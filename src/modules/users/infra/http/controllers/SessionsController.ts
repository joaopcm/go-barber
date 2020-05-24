import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateSessionService from '@modules/users/services/CreateSessionService';

export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const createSession = container.resolve(CreateSessionService);

    const { user, token } = await createSession.execute({ email, password });

    return response.json({ error: false, data: { user, token } });
  }
}
