import {Router} from "express";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import noteSchema from "../schemas/noteSchema";

const notesRouter = Router();

notesRouter.post('/notes', validateToken(), validateSchema(noteSchema));
notesRouter.get('/notes', validateToken());
notesRouter.get('/notes/:id', validateToken());
notesRouter.delete('/notes/:id', validateToken());

export default notesRouter;