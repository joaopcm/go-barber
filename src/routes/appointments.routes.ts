import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepositoy from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepositoy();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));
  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    parsedDate,
  );
  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ error: true, message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parsedDate);

  return response.json({ error: false, data: appointment });
});

export default appointmentsRouter;
