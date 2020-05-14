import { Router, Response, Request } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepositoy from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepositoy();

appointmentsRouter.get('/', (request: Request, response: Response) => {
  const appointments = appointmentsRepository.all();

  return response.json({ error: false, data: appointments });
});

appointmentsRouter.post('/', (request: Request, response: Response) => {
  try {
    const { provider, date } = request.body;
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );
    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json({ error: false, data: appointment });
  } catch (error) {
    return response.status(400).json({ error: true, data: error.message });
  }
});

export default appointmentsRouter;
