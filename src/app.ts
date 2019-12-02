import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();

// setting
app.set('port', 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

export default app;