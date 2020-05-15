import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';
import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ error: true, data: error.message });
    }

    console.error(error);
    return response
      .status(500)
      .json({ error: true, data: 'Houve um erro interno' });
  },
);

app.listen(3333, () => console.log('🚀 Server started on port 3333!'));
