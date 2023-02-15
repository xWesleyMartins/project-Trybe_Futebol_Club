import { Request, Response } from 'express';
// import IMatches from 'src/interfaces/IMatches';
import MatchesServc from '../services/matchesSrvc';
import TeamsServc from '../services/teamsSrvc';

export default class MatchesController {
  matchesSrvc = new MatchesServc();
  teamSrvc = new TeamsServc();

  async matchesContr(req: Request, res: Response) {
    const allMatches = await this.matchesSrvc.findAllMatches();
    const inProgressMatches = req.query.inProgress === 'true';
    const matchesInProgress = await this.matchesSrvc.findProgressMatches(inProgressMatches);
    if (req.query.inProgress === undefined) {
      return res.status(200).json(allMatches);
    }
    return res.status(200).json(matchesInProgress);
  }

  async saveMatchesContr(req: Request, res: Response) {
    const match = req.body;
    const addMatch = await this.matchesSrvc.newMatchSrvc(match);
    return res.status(addMatch.type).json(addMatch.message);
  }

  // async saveMatchesContr(req: Request, res: Response) {
  //   const payloadNewMatch = req.body;
  //   const result = await this.matchesSrvc.saveMatches(payloadNewMatch);

  //   console.log('teste controller ->> ', result);

  //   return res.status(201).json(result);
  // }
}
