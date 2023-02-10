import { Request, Response } from 'express';
// import User from '../database/models/User';
import LoginServc from '../services/loginSrvc';
import loginSchemaJoi from '../validations/joiLoginPassWord';

export default class LoginController {
  // constructor(private userModel = User) {}

  loginServc = new LoginServc();

  async loginContr(req: Request, res: Response) {
    const { error } = loginSchemaJoi.validate(req.body);
    if (error) {
      return res.status(401).json({ message: error.message });
    }
    const token = await this.loginServc.login(req.body);
    if (!token) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    return res.status(200).json({ token });
  }
}
