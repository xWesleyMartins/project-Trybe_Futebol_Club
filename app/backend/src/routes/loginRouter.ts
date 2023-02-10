import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validLogin from '../middlewares/validateFieldLogin';
// import validLoginEmail from '../middlewares/validateLoginEmail';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validLogin, (req, res) => {
  loginController.loginContr(req, res);
});

// loginRouter.post('/login', validLogin, validLoginEmail, (req, res) => {
//   loginController.loginContr(req, res);
// });

// loginRouter.post('/login', (req, res) => loginController.loginContr(req, res));

export default loginRouter;
