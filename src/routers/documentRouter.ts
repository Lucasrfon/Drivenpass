import {Router} from "express";
import { createNewDocument, deleteDocument, getDocument, getDocuments } from "../controllers/documentController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import documentSchema from "../schemas/documentSchema";

const documentsRouter = Router();

documentsRouter.post('/documents', validateToken(), validateSchema(documentSchema), createNewDocument);
documentsRouter.get('/documents', validateToken(), getDocuments);
documentsRouter.get('/documents/:id', validateToken(), getDocument);
documentsRouter.delete('/documents/:id', validateToken(), deleteDocument);

export default documentsRouter;