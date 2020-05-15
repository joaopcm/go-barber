import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const createSession = new CreateSessionService();

    const { user, token } = await createSession.execute({ email, password });

    return response.json({ error: false, data: { user, token } });
  } catch (error) {
    return response
      .status(error.statusCode)
      .json({ error: true, data: error.message });
  }
});

export default usersRouter;
