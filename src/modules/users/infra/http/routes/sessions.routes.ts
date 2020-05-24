import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const usersRouter = Router();
const sessionsController = new SessionsController();

usersRouter.post('/', sessionsController.create);

export default usersRouter;
