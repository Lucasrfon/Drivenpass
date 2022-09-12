import {Router} from "express";
import authRouter from './authRouter';
import cardsRouter from "./cardRouter";
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./noteRouter";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);

export default router;