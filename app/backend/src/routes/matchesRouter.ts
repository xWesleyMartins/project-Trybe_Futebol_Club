import { Router } from 'express';
import MatchesController from '../controllers/matchesController';
import validateToken from '../middlewares/validateToken';
import validateMatch from '../middlewares/validateMatch';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', (req, res) => {
  matchesController.matchesContr(req, res);
});

matchesRouter.post('/matches', validateToken, validateMatch, (req, res) => {
  matchesController.saveMatchesContr(req, res);
});

matchesRouter.patch('/matches/:id/finish', (req, res) => {
  matchesController.updatInprogressMatchesCtrlr(req, res);
});

export default matchesRouter;
