import { Router } from 'express';
import loginRouter from './loginRouter';
import teamsRouter from './teamsRouter';
import matchesRouter from './matchesRouter';
import leaderboardRouter from './leaderboardRouter';

const router = Router();

router.use(loginRouter);

router.use(teamsRouter);

router.use(matchesRouter);

router.use(leaderboardRouter);

export default router;
