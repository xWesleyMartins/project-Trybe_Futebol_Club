import { Request, Response } from 'express';
// import IMatches from 'src/interfaces/IMatches';
import MatchesServc from '../services/matchesSrvc';
import TeamsServc from '../services/teamsSrvc';

export default class MatchesController {
  matchesSrvc = new MatchesServc();
  teamSrvc = new TeamsServc();

  async matchesContr(req: Request, res: Response) {
    const allMatches = await this.matchesSrvc.findAllMatches();
    const inProgressMatches = req.query.inProgress === 'true';
    const matchesInProgress = await this.matchesSrvc.findProgressMatches(inProgressMatches);
    if (req.query.inProgress === undefined) {
      return res.status(200).json(allMatches);
    }
    return res.status(200).json(matchesInProgress);
  }

  async saveMatchesContr(req: Request, res: Response) {
    const match = req.body;

    const addMatch = await this.matchesSrvc.newMatchSrvc(match);
    // const team = await this.teamSrvc.findTeamById(match.homeTeamId);
    // console.log(team);

    // if (!team) {
    //   return team;
    //   // return res.status(404).json({ message: 'There is no team with such id!' });
    // }

    return res.status(addMatch.type).json(addMatch.message);
  }

  async updatInprogressMatchesCtrlr(req: Request, res: Response) {
    const { id } = req.params;
    await this.matchesSrvc.updatInprogressMatches(id);
    return res.status(200).json({ message: 'Finished' });
  }
}
