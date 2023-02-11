import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const SECRET_KEY = process.env.JWT_SECRET || 'jwt_secret';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).json({ message: 'token não encontrado' });
  }
  try {
    const validToken = jwt.verify(authorization, SECRET_KEY);
    req.body.role = validToken;
    next();
  } catch (err) {
    res.status(401).json({ message: 'token invalido' });
  }
};

export default validateToken;
