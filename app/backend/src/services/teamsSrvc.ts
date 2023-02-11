import Teams from '../database/models/Teams';

export default class TeamsServc {
  constructor(private teamsModel = Teams) {}

  async findAllTeams(): Promise<object[] | undefined> {
    const resultFind = await this.teamsModel.findAll();
    return resultFind;
  }

  async findTeamById(id: number): Promise<object | null> {
    const findId = await this.teamsModel.findOne({ where: { id } });
    return findId;
  }
}
