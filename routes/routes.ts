import { Router } from 'express';
import { ForecastController } from '../controlers/forecast.controller';

const forecastController = new ForecastController();
const router = Router();
router.get('', forecastController.test);

export default router;
