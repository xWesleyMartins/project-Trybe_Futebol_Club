import { Request, Response } from 'express';
import MatchesServc from '../services/matchesSrvc';

export default class MatchesController {
  matchesSrvc = new MatchesServc();

  async matchesContr(req: Request, res: Response) {
    const allMatches = await this.matchesSrvc.findAllMatches();
    const inProgressMatches = req.query.inProgress === 'true';
    const matchesInProgress = await this.matchesSrvc.findProgressMatches(inProgressMatches);
    if (req.query.inProgress === undefined) {
      return res.status(200).json(allMatches);
    }
    return res.status(200).json(matchesInProgress);
  }
}
