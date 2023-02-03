import { Request, Response } from 'express';
import LoginServc from '../services/loginSrvc';

export default class LoginController {
  loginServc = new LoginServc();

  async loginContr(req: Request, res: Response) {
    const token = await this.loginServc.login(req.body);
    res.status(200).json({ token });
  }
}
