import { Request, Response } from "express";
import { checkCard, getAllCards, getOneCard, removeCard } from "../services/cardService";

export async function createNewCard(req: Request, res: Response) {
    const card = req.body;
    const userId = res.locals.id;

    await checkCard(userId, card);

    res.status(201).send('Cartão cadastrado!')
}

export async function getCards(req: Request, res: Response) {
    const userId = res.locals.id;
    const cards = await getAllCards(userId);

    res.status(200).send(cards)
}

export async function getCard(req: Request, res: Response) {
    const userId = res.locals.id;
    const cardId = parseInt(req.params.id);

    const card = await getOneCard(userId, cardId);

    res.status(200).send(card)
}

export async function deleteCard(req: Request, res: Response) {
    const userId = res.locals.id;
    const cardId = parseInt(req.params.id);

    await removeCard(userId, cardId);

    res.status(200).send('Cartão excluído')
}