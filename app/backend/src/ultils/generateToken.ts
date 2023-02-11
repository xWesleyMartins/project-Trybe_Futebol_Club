import * as jwt from 'jsonwebtoken';
import { ICreateToken } from '../interfaces';

const generateToken = async (userPayload: ICreateToken) => {
  // const { email } = userPayload;
  const genToken = jwt.sign({ userPayload }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return genToken;
};

export default generateToken;
