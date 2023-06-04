import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

// route imports
import usersRouter from './app/modules/users/users.route';

const app: Application = express();

// middlewares
app.use(cors());

// * persers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * routes
app.use('/api/v1/users', usersRouter);

// testing route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome');
});

export default app;
