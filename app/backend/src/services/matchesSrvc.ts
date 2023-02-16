import IMatches from '../interfaces/IMatches';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import TeamsServc from './teamsSrvc';

export default class MatchesServc {
  teamSrvc = new TeamsServc();

  constructor(private matchesModel = Matches) {}

  async findAllMatches(): Promise<object[] | undefined> {
    const resultFind = await this.matchesModel.findAll({
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

  async findProgressMatches(inProgress: boolean): Promise<object[]> {
    const resultFind = await this.matchesModel.findAll({
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
    const addNewMatch = await this.matchesModel.create({ ...matchePayLoad, inProgress: true });
    return { type: 201, message: { ...addNewMatch.dataValues } };
  };

  async updatInprogressMatches(id: string): Promise<object | null> {
    const updatMatch = await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
    return updatMatch;
  }

  async editMatch(id: string, matchPayLoad: IMatches) {
    const { homeTeamGoals, awayTeamGoals } = matchPayLoad;
    await this.matchesModel
      .update(
        { homeTeamGoals, awayTeamGoals },
        { where: { id } },
      );
    const resultUpdtMatch = await this.matchesModel.findByPk(id);
    return resultUpdtMatch;
  }
}
