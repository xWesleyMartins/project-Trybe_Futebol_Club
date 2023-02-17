import ITeam from '../interfaces/ITeam';
import ILeaderboard from '../interfaces/ILeaderboard';
import IMatches from '../interfaces/IMatches';

const populaLb = (team: ITeam, matches: IMatches[], l: ILeaderboard) => matches.forEach((match) => {
  const t = l;
  if (team.id === match.homeTeamId) {
    if (match.homeTeamGoals > match.awayTeamGoals) {
      t.totalVictories += 1;
      t.totalPoints += 3;
    }
    if (match.homeTeamGoals < match.awayTeamGoals) {
      t.totalLosses += 1;
    }
    if (match.homeTeamGoals === match.awayTeamGoals) {
      t.totalDraws += 1; t.totalPoints += 1;
    }
    t.totalGames += 1;
    t.goalsFavor += match.homeTeamGoals;
    t.goalsOwn += match.awayTeamGoals;
    t.goalsBalance = t.goalsFavor - t.goalsOwn;
    t.efficiency = Number(((t.totalPoints / (t.totalGames * 3)) * 100).toFixed(2));
  }
});
export default populaLb;
