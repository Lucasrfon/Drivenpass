import {Router} from "express";
import validateSchema from "../middlewares/validateSchema";
import authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup', validateSchema(authSchema));
authRouter.post('/login', validateSchema(authSchema));

export default authRouter;