import { Router } from 'express';
import loginRouter from './loginRouter';
import teamsRouter from './teamsRouter';
import matchesRouter from './matchesRouter';

const router = Router();

router.use(loginRouter);

router.use(teamsRouter);

router.use(matchesRouter);

export default router;
