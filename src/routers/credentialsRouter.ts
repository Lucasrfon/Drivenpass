import {Router} from "express";
import validateSchema from "../middlewares/validateSchema";
import credentialSchema from "../schemas/credentialsSchema";

const credentialsRouter = Router();

credentialsRouter.post('/credentials', validateSchema(credentialSchema));
credentialsRouter.get('/credentials');
credentialsRouter.delete('/credentials');

export default credentialsRouter;