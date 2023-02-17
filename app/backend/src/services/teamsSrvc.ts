import Teams from '../database/models/Teams';
import ITeam from '../interfaces/ITeam';

export default class TeamsServc {
  // constructor(private teamsModel = Teams) {}

  static async findAllTeams(): Promise<ITeam[]> {
    const resultFind = await Teams.findAll();
    return resultFind;
  }

  static async findTeamById(id: number): Promise<ITeam | null> {
    const findId = await Teams.findOne({ where: { id } });
    return findId;
  }
}
