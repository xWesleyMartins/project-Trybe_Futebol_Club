import { Router } from 'express';
import MatchesController from '../controllers/matchesController';
import validateToken from '../middlewares/validateToken';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => {
  matchesController.matchesContr(req, res);
});

matchesRouter.post('/matches', validateToken, (req, res) => {
  matchesController.saveMatchesContr(req, res);
});

export default matchesRouter;
