import { Request, Response } from 'express';
// import TeamsServc from '../services/teamsSrvc';
import MatchesServc from '../services/matchesSrvc';

export default class MatchesController {
  matchesSrvc = new MatchesServc();

  async matchesContr(_req: Request, res: Response) {
    const allMatches = await this.matchesSrvc.findAllMatches();
    return res.status(200).json(allMatches);
  }

  // async findTeamsById(req: Request, res: Response) {
  //   const id = Number(req.params.id);
  //   const teamById = await this.teamsSrvc.findTeamById(id);
  //   return res.status(200).json(teamById);
  // }
}
