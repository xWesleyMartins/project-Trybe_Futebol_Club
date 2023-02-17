import IMatches from '../interfaces/IMatches';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import TeamsServc from './teamsSrvc';

export default class MatchesServc {
  teamSrvc = new TeamsServc();

  // constructor(private matchesModel = Matches) {}

  static async findAllMatches(): Promise<object[] | undefined> {
    const resultFind = await Matches.findAll({
      include: [{
        model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    return resultFind;
  }

  static async findProgressMatches(inProgress: boolean): Promise<IMatches[]> {
    const resultFind = await Matches.findAll({
      where: { inProgress },
      include: [{
        model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
    });
    return resultFind;
  }

  public newMatchSrvc = async (matchePayLoad: IMatches) => {
    const addNewMatch = await Matches.create({ ...matchePayLoad, inProgress: true });
    return { type: 201, message: { ...addNewMatch.dataValues } };
  };

  static async updatInprogressMatches(id: string): Promise<object | null> {
    const updatMatch = await Matches.update(
      { inProgress: false },
      { where: { id } },
    );
    return updatMatch;
  }

  static async editMatch(id: string, matchPayLoad: IMatches) {
    const { homeTeamGoals, awayTeamGoals } = matchPayLoad;
    await Matches
      .update(
        { homeTeamGoals, awayTeamGoals },
        { where: { id } },
      );
    const resultUpdtMatch = await Matches.findByPk(id);
    return resultUpdtMatch;
  }
}
