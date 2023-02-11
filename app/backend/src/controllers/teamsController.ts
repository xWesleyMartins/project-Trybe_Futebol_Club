import { Request, Response } from 'express';
import TeamsServc from '../services/teamsSrvc';

export default class TeamsController {
  teamsSrvc = new TeamsServc();

  async teamsContr(_req: Request, res: Response) {
    const allTeams = await this.teamsSrvc.findAllTeams();

    return res.status(200).json(allTeams);
  }

  async findTeamsById(req: Request, res: Response) {
    const id = Number(req.params.id);
    console.log(id);
    const teamById = await this.teamsSrvc.findTeamById(id);
    return res.status(200).json(teamById);
  }
}
