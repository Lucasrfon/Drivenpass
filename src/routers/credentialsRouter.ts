import {Router} from "express";
import { createNewCredential } from "../controllers/credentialsController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import credentialSchema from "../schemas/credentialsSchema";

const credentialsRouter = Router();

credentialsRouter.post('/credentials', validateToken(), validateSchema(credentialSchema), createNewCredential);
credentialsRouter.get('/credentials', validateToken());
credentialsRouter.delete('/credentials', validateToken());

export default credentialsRouter;