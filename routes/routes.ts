import { Router } from 'express';
import { ApiController } from '../controlers/api.controller';

const apiController = new ApiController();
const router = Router();
router.get('/v1/location', apiController.location);

router.get('/v1/current/:city?', apiController.current);
router.get('/v1/forecast/:city?', apiController.forecast);

export default router;
