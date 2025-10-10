import {Router} from 'express';
import villagerouter from './villages.ts';

const routers = Router()

routers.use('/village', villagerouter)

export default routers