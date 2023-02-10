// import { Request, Response, NextFunction } from 'express';
// import { compareSync } from 'bcryptjs';
// // import LoginServc from '../services/loginSrvc'
// import User from '../database/models/User';

// const validLoginEmail = async (req: Request, res: Response, next: NextFunction) => {
//   const emailRegex = //
//   const { email, password } = req.body;
//   const user = await User.findOne({ where: { email } });
//   if (!user) {
//     return res.status(401).json({ message: 'Incorrect email or password' });
//   }
//   const result = compareSync(password, user.password);
//   if (user) {
//     return result;
//   }
//   if (!result) {
//     return res.status(401).json({ message: 'Incorrect email or password' });
//   }
//   if (result) {
//     return next();
//   }
//   next();
// };

// export default validLoginEmail;
