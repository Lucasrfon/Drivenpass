import Cryptr from 'cryptr';
import dotenv from 'dotenv';
import { deleteCard, findAllCards, findCard, findCardByUserIdAndTitle, insertCard } from '../repositories/cardRepository';
import { TypeCard } from "../utils/interfaces";
dotenv.config();

const cryptr = new Cryptr(process.env.TOKEN_SECRET_KEY?? '');

export async function checkCard(id: number, card: TypeCard) {
    const findCard = await findCardByUserIdAndTitle(id, card.title);
    
    if(findCard) {
        throw { type: "conflict", message: 'Cartão já cadastrado' }
    }

    card.password = cryptr.encrypt(card.password);
    card.cvv = cryptr.encrypt(card.cvv);
    await insertCard(id, card);
}

export async function getAllCards(id: number) {
    const cards = await findAllCards(id);
    cards.map(card => {
        card.password = cryptr.decrypt(card.password); card.cvv = cryptr.decrypt(card.cvv)
    });
    return cards
}

export async function getOneCard(userId: number, cardId: number) {
    const card = await isValidRequestByUser(userId, cardId); 
    card.password = cryptr.decrypt(card.password);
    card.cvv = cryptr.decrypt(card.cvv);
    return card
}

export async function removeCard(userId: number, cardId: number) {
    await isValidRequestByUser(userId, cardId);
    await deleteCard(cardId);
}

async function isValidRequestByUser(userId: number, cardId: number) {
    const card = await findCard(cardId);

    if(!card) {
        throw { type: "not found" }
    }
    if(card.userId !== userId) {
        throw { type: "not found" }
    }
    return card
}