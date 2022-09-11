import {Router} from "express";
import { createNewCredential, getCredential, getCredentials } from "../controllers/credentialsController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import credentialSchema from "../schemas/credentialsSchema";

const credentialsRouter = Router();

credentialsRouter.post('/credentials', validateToken(), validateSchema(credentialSchema), createNewCredential);
credentialsRouter.get('/credentials', validateToken(), getCredentials);
credentialsRouter.get('/credentials/:id', validateToken(), getCredential);
credentialsRouter.delete('/credentials/:id', validateToken());

export default credentialsRouter;