import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/database';
import authRoutes from './routes/auth.route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
  connectDB(), console.log(`Server is running on port http://localhost:${PORT}`);
});
