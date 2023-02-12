import { Router } from 'express';
import MatchesController from '../controllers/matchesController';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => {
  matchesController.matchesContr(req, res);
});

export default matchesRouter;
