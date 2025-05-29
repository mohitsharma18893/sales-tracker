import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import salesmanRoutes from './routes/salesmanRoutes.js';
import shopsRoutes from './routes/shopsRoutes.js';
import cors from 'cors';

config();
connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use('/api/login', authRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/salesman', salesmanRoutes);
app.use('/api/shops', shopsRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
