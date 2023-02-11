import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validLogin from '../middlewares/validateFieldLogin';
import validateToken from '../middlewares/validateToken';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validLogin, (req, res) => {
  loginController.loginContr(req, res);
});
loginRouter.get('/login/validate', validateToken, (req, res) => {
  loginController.getValidLogin(req, res);
});

export default loginRouter;
