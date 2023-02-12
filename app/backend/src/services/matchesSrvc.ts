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

  // async findTeamById(id: number): Promise<object | null> {
  //   const findId = await this.teamsModel.findOne({ where: { id } });
  //   return findId;
  // }
}
