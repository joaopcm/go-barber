import { Router, Response, Request } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return response.json({ error: false, data: user });
  } catch (error) {
    return response.status(400).json({ error: true, data: error.message });
  }
});

export default usersRouter;
