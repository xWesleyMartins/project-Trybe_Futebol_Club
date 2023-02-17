import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const teamsRouter = Router();
// const teamsController = new TeamsController();

teamsRouter.get('/teams', (req, res) => {
  TeamsController.teamsContr(req, res);
});

teamsRouter.get('/teams/:id', (req, res) => {
  TeamsController.findTeamsById(req, res);
});

export default teamsRouter;
