import { Router } from 'express';
import LoginController from '../controllers/loginController';
import validLogin from '../middlewares/valitationLogin';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', validLogin, (req, res) => loginController.loginContr(req, res));

// loginRouter.post('/login', (req, res) => loginController.loginContr(req, res));

export default loginRouter;
