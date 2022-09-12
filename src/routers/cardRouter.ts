import {Router} from "express";
import { createNewCard, deleteCard, getCard, getCards } from "../controllers/cardController";
import validateSchema from "../middlewares/validateSchema";
import validateToken from "../middlewares/validateToken";
import cardSchema from "../schemas/cardSchema";

const cardsRouter = Router();

cardsRouter.post('/cards', validateToken(), validateSchema(cardSchema), createNewCard);
cardsRouter.get('/cards', validateToken(), getCards);
cardsRouter.get('/cards/:id', validateToken(),getCard);
cardsRouter.delete('/cards/:id', validateToken(), deleteCard);

export default cardsRouter;