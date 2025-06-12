import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import playerRoutes from './routes/playerRoutes';
import propertyRoutes from './routes/propertyRoutes';

const app = express();

app.use(express.json());

// Routes
app.use('/api/players', playerRoutes);
app.use('/api/properties', propertyRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
