import {Router} from "express";
import authRouter from './authRouter';
import cardsRouter from "./cardRouter";
import credentialsRouter from "./credentialsRouter";
import documentsRouter from "./documentRouter";
import notesRouter from "./noteRouter";
import wifisRouter from "./wifiRouter";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifisRouter);
router.use(documentsRouter);

export default router;