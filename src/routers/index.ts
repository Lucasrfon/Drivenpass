import {Router} from "express";
import authRouter from './authRouter';
import cardsRouter from "./cardRouter";
import credentialsRouter from "./credentialsRouter";
import notesRouter from "./noteRouter";
import wifisRouter from "./wifiRouter";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(wifisRouter);

export default router;