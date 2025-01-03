import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

//  application Routes
app.use('/api/v1', router)



app.use(globalErrorHandler)
// not found
app.use(notFound)



app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
