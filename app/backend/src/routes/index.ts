import { Router } from 'express';
import loginRouter from './loginRouter';

const router = Router();

router.use(loginRouter);

export default router;
