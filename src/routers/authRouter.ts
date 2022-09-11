import {Router} from "express";
import { login, signup } from "../controllers/authController";
import validateSchema from "../middlewares/validateSchema";
import authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(authSchema), signup);
authRouter.post('/login', validateSchema(authSchema), login);

export default authRouter;