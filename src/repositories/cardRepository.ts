import client from "../dbStrategy/prisma";
import { TypeCard } from "../utils/interfaces";

export async function findCardByUserIdAndTitle(id: number, title: string) {
    const card = await client.cards.findFirst({where: { userId: id, title }});
    return card
}

export async function insertCard(id: number, card: TypeCard) {
    await client.cards.create({data: {...card, userId: id}});
}

export async function findAllCards(id: number) {
    const cards = await client.cards.findMany({where: { userId: id }});
    return cards
}

export async function findCard(id: number) {
    const card = await client.cards.findUnique({where: { id }});
    return card
}

export async function deleteCard(id: number) {
    await client.cards.delete({where: { id }});
}