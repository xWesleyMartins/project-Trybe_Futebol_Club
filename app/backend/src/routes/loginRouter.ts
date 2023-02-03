import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', (req, res) => loginController.loginContr(req, res));

export default loginRouter;
