/* eslint-disable max-lines-per-function */
import TeamsServc from './teamsSrvc';
import MatchesServc from './matchesSrvc';

export default class LeaderboardSrvc {
  teamSrvc = new TeamsServc();
  matchesSrvc = new MatchesServc();
  private _teams: any[] = [];
  private _matches: any[] = [];

  async getTeams() {
    return this.teamSrvc.findAllTeams();
  }

  async getMatches() {
    return this.matchesSrvc.findProgressMatches(false);
  }

  async getResult() {
    const teams = await this.getTeams();
    const matches = await this.getMatches();
    return teams.map((team: any) => {
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
      matches.forEach((match: any) => {
        if (team.id === match.homeTeamId) {
          if (match.homeTeamGoals > match.awayTeamGoals) {
            t.totalVictories += 1;
            t.totalPoints += 3;
          }
          if (match.homeTeamGoals < match.awayTeamGoals) {
            t.totalLosses += 1;
          }
          if (match.homeTeamGoals === match.awayTeamGoals) {
            t.totalDraws += 1;
            t.totalPoints += 1;
          }
          t.totalGames += 1;
          t.goalsFavor += match.homeTeamGoals;
          t.goalsOwn += match.awayTeamGoals;
          t.goalsBalance = t.goalsFavor - t.goalsOwn;
          t.efficiency = Number(((t.totalPoints / (t.totalGames * 3)) * 100).toFixed(2));
        }
      });
      return t;
    }).sort((a, b) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || b.goalsOwn + a.goalsOwn
    ));
  }
}
