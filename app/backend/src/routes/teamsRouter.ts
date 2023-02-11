import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get('/teams', (req, res) => {
  teamsController.teamsContr(req, res);
});

teamsRouter.get('/teams/:id', (req, res) => {
  teamsController.findTeamsById(req, res);
});

export default teamsRouter;
