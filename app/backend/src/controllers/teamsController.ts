import { Request, Response } from 'express';
import TeamsServc from '../services/teamsSrvc';

export default class TeamsController {
  teamsSrvc = new TeamsServc();

  async teamsContr(_req: Request, res: Response) {
    const allTeams = await this.teamsSrvc.findAllTeams();
    console.log({ allTeams });

    return res.status(200).json(allTeams);
  }
}
