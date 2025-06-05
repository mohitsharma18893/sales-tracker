import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import salesmanRoutes from './routes/salesmanRoutes.js';
import shopsRoutes from './routes/shopsRoutes.js';
import shopsSalesmanMappingRoutes from './routes/shopsSalesmanMappingRoutes.js';
import cors from 'cors';
import codes from './constants/httpCodes.js';
import messages from './constants/messages.js';
import logger from './utils/logger.js';

config();
connectDB();

const app = express();
app.use(cors());
app.use(json());

app.use('/api/login', authRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/salesman', salesmanRoutes);
app.use('/api/shops', shopsRoutes);
app.use('/api/mapping', shopsSalesmanMappingRoutes);

app.use((err, req, res, next) => {
  const status = err.statusCode || codes.INTERNAL_SERVER_ERROR;
  return res.status(status).json({ message: err.message || messages.SERVER_ERROR });
});

const PORT = process.env.PORT;
app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`));
