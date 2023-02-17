import TeamsServc from './teamsSrvc';
import MatchesServc from './matchesSrvc';
import ITeam from '../interfaces/ITeam';
import IMatches from '../interfaces/IMatches';
import { ppltHome } from '../ultils/populateLB';

export default class LeaderboardSrvc {
  teamSrvc = new TeamsServc();
  // matchesSrvc = new MatchesServc();
  // private _teams: object[] = [];
  // private _matches: IMatches[] = [];

  // async getTeams() {
  //   return this.teamSrvc.findAllTeams();
  // }

  // async getMatches() {
  //   return this.matchesSrvc.findProgressMatches(false);
  // }

  static async getResult() {
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
      ppltHome(team, matches, t);
      return t;
    });
  }

  static async sortLeaderboard() {
    const resultSort = await LeaderboardSrvc.getResult();
    return resultSort.sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn + a.goalsOwn
    ));
  }
}
