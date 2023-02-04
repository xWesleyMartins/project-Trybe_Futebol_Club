import { Request, Response } from 'express';
import LoginServc from '../services/loginSrvc';

export default class LoginController {
  loginServc = new LoginServc();

  async loginContr(req: Request, res: Response) {
    const token = await this.loginServc.login(req.body);
    // console.log(token);
    res.status(200).json({ token });
    // const { email, password } = req.body;
    // if (email === undefined || password === undefined) {
    //   return res.status(400).json({ message: 'All fields must be filled' });
    // }
    // return next();
  }
}
