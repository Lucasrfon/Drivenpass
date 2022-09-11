import {Router} from "express";
import { createNewNote, deleteNote, getNote, getNotes } from "../controllers/noteController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import noteSchema from "../schemas/noteSchema";

const notesRouter = Router();

notesRouter.post('/notes', validateToken(), validateSchema(noteSchema), createNewNote);
notesRouter.get('/notes', validateToken(), getNotes);
notesRouter.get('/notes/:id', validateToken(), getNote);
notesRouter.delete('/notes/:id', validateToken(), deleteNote);

export default notesRouter;