import {Router} from "express";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import cardSchema from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post('/cards', validateToken(), validateSchema(cardSchema));
cardsRouter.get('/cards', validateToken());
cardsRouter.get('/cards/:id', validateToken());
cardsRouter.delete('/cards/:id', validateToken());

export default cardsRouter;