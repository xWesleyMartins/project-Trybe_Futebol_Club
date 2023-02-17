import ITeam from '../interfaces/ITeam';
import ILeaderboard from '../interfaces/ILeaderboard';
import IMatches from '../interfaces/IMatches';

type Key = 'homeTeamId' | 'awayTeamId';

const finalCalc = (match: IMatches, l: ILeaderboard, k: Key) => {
  const t = l;
  const keyGoals1 = k === 'homeTeamId' ? 'homeTeamGoals' : 'awayTeamGoals';
  const keyGoals2 = k !== 'homeTeamId' ? 'homeTeamGoals' : 'awayTeamGoals';
  t.totalGames += 1;
  t.goalsFavor += match[keyGoals1];
  t.goalsOwn += match[keyGoals2];
  t.goalsBalance = t.goalsFavor - t.goalsOwn;
  t.efficiency = Number(((t.totalPoints / (t.totalGames * 3)) * 100).toFixed(2));
};

const populateLB = (team: ITeam, matches: IMatches[], l: ILeaderboard, k: Key) => matches
  .forEach((match) => {
    const t = l;
    const keyGoals1 = k === 'homeTeamId' ? 'homeTeamGoals' : 'awayTeamGoals';
    const keyGoals2 = k !== 'homeTeamId' ? 'homeTeamGoals' : 'awayTeamGoals';
    if (team.id === match[k]) {
      if (match[keyGoals1] > match[keyGoals2]) {
        t.totalVictories += 1;
        t.totalPoints += 3;
      }
      if (match[keyGoals1] < match[keyGoals2]) {
        t.totalLosses += 1;
      }
      if (match[keyGoals1] === match[keyGoals2]) {
        t.totalDraws += 1; t.totalPoints += 1;
      }
      finalCalc(match, t, k);
    }
  });

export default populateLB;

// ppltHome = populateHome;
