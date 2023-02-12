import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchesServc {
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

  async findProgressMatches(inProgress: boolean): Promise<object | undefined> {
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
}
