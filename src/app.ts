import express, { Application } from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth';
import guideRoutes from './routes/guide';

const app: Application = express();

// setting
app.set('port', 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/guide', guideRoutes);

export default app;