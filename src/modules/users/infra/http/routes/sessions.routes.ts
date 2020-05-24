import { Router } from 'express';

import CreateSessionService from '@modules/users/services/CreateSessionService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const createSession = new CreateSessionService();

  const { user, token } = await createSession.execute({ email, password });

  return response.json({ error: false, data: { user, token } });
});

export default usersRouter;
