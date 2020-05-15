import { Router, Response, Request } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const usersRouter = Router();

usersRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const createSession = new CreateSessionService();

    const { user, token } = await createSession.execute({ email, password });

    return response.json({ error: false, data: { user, token } });
  } catch (error) {
    return response.status(400).json({ error: true, data: error.message });
  }
});

export default usersRouter;
