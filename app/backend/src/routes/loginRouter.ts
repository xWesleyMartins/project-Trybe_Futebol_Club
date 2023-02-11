import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validLogin from '../middlewares/validateFieldLogin';
// import validLoginEmail from '../middlewares/validateLoginEmail';
import validateToken from '../ultils/validateToken';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validLogin, (req, res) => {
  loginController.loginContr(req, res);
});
loginRouter.get('/login/validate', validateToken, (req, res) => {
  loginController.getValidLogin(req, res);
});
// loginRouter.post('/login', validLogin, (req, res) => {
//   loginController.loginContr(req, res);
// });

// loginRouter.post('/login', (req, res) => loginController.loginContr(req, res));

export default loginRouter;
