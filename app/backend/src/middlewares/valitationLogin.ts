import { Request, Response, NextFunction } from 'express';

const validLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
  // if (email === undefined || password === undefined) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};
export default validLogin;

// const { email } = req.body;
//     console.log(email);
//     if (email === undefined) {
//       return res.status(400).json({ message: 'All fields must be filled' });
//     }
