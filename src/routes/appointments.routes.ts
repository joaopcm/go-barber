import { Router, Response, Request } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import CreateAppointmentService from '../services/CreateAppointmentService';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();

appointmentsRouter.get('/', async (request: Request, response: Response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json({ error: false, data: appointments });
});

appointmentsRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { provider, date } = request.body;
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();
    const appointment = await createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json({ error: false, data: appointment });
  } catch (error) {
    return response.status(400).json({ error: true, data: error.message });
  }
});

export default appointmentsRouter;
