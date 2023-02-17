import { Router } from 'express';
import LeaderbordController from '../controllers/leaderBoardCntrlr';

const leaderboardRouter = Router();
// const leaderboardController = new LeaderbordController();

leaderboardRouter.get('/leaderboard/home', (req, res) => {
  LeaderbordController.getHomeMatches(req, res);
});

leaderboardRouter.get('/leaderboard/away', (req, res) => {
  LeaderbordController.getAwayMatches(req, res);
});

export default leaderboardRouter;
