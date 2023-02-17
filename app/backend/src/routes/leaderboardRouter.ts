import { Router } from 'express';
import LeaderbordController from '../controllers/leaderBoardCntrlr';

const leaderboardRouter = Router();
// const leaderboardController = new LeaderbordController();

leaderboardRouter.get('/leaderboard/home', (req, res) => {
  LeaderbordController.getTotalMatches(req, res);
});

export default leaderboardRouter;
