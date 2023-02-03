import { compareSync } from 'bcryptjs';
import { ILogin } from '../interfaces';
import User from '../database/models/User';
import generateToken from '../ultils/generateToken';

export default class LoginServc {
  constructor(private userModel = User) {}

  async login(loginPayload: ILogin): Promise<string | undefined> {
    const { email, password } = loginPayload;
    const user = await this.userModel.findOne({ where: { email } });
    const compCryto = user && compareSync(password, user.password);
    if (compCryto) {
      const genToken = generateToken(loginPayload);
      return genToken;
    }
  }
}
