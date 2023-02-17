import TeamsServc from './teamsSrvc';
import MatchesServc from './matchesSrvc';
import ITeam from '../interfaces/ITeam';
import IMatches from '../interfaces/IMatches';
import populateLB from '../ultils/populateLB';

type Key = 'homeTeamId' | 'awayTeamId';

export default class LeaderboardSrvc {
  teamSrvc = new TeamsServc();

  static async getResult(str: Key) {
    const teams: ITeam[] = await TeamsServc.findAllTeams();
    const matches: IMatches[] = await MatchesServc.findProgressMatches(false);
    return teams.map((team) => {
      const t = {
        name: team.teamName,
        totalPoints: 0,
        totalGames: 0,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsBalance: 0,
        efficiency: 0,
      };
      populateLB(team, matches, t, str);
      return t;
    });
  }

  static async sortLeaderboard(str: Key) {
    const resultSort = await LeaderboardSrvc.getResult(str);
    return resultSort.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn + a.goalsOwn
    ));
  }
}
