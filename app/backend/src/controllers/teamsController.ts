import { Request, Response } from 'express';
import TeamsServc from '../services/teamsSrvc';

export default class TeamsController {
  teamsSrvc = new TeamsServc();

  static async teamsContr(_req: Request, res: Response) {
    const allTeams = await TeamsServc.findAllTeams();

    return res.status(200).json(allTeams);
  }

  static async findTeamsById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const teamById = await TeamsServc.findTeamById(id);
    return res.status(200).json(teamById);
  }
}
