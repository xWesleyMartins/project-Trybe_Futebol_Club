import { Request, Response } from 'express';
import TeamsServc from '../services/teamsSrvc';
import MatchesServc from '../services/matchesSrvc';
import LeaderboardSrvc from '../services/leaderboardSrvc';

export default class LeaderbordController {
  teamsSrvc = new TeamsServc();
  matchesSrvc = new MatchesServc();
  // leaderboardSrvc = new LeaderboardSrvc();

  static async getHomeMatches(_req: Request, res: Response) {
    const allTeams = await LeaderboardSrvc.sortLeaderboard('homeTeamId');

    return res.status(200).json(allTeams);
  }

  static async getAwayMatches(_req: Request, res: Response) {
    const allTeams = await LeaderboardSrvc.sortLeaderboard('awayTeamId');

    return res.status(200).json(allTeams);
  }
}
