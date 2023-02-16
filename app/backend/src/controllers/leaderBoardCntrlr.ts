import { Request, Response } from 'express';
import TeamsServc from '../services/teamsSrvc';
import MatchesServc from '../services/matchesSrvc';
import LeaderboardSrvc from '../services/leaderboardSrvc';

export default class LeaderbordController {
  teamsSrvc = new TeamsServc();
  matchesSrvc = new MatchesServc();
  leaderboardSrvc = new LeaderboardSrvc();

  async getTotalMatches(_req: Request, res: Response) {
    const allTeams = await this.leaderboardSrvc.getResult();

    return res.status(200).json(allTeams);
  }
}
