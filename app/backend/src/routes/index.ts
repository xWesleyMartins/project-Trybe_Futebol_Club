import { Router } from 'express';
import loginRouter from './loginRouter';
import teamsRouter from './teamsRouter';

const router = Router();

router.use(loginRouter);
router.use(teamsRouter);

export default router;
