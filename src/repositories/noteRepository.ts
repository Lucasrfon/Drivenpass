import client from "../dbStrategy/prisma";
import { TypeNote } from "../utils/interfaces";

export async function findNoteByUserIdAndTitle(id: number, title: string) {
    const note = await client.notes.findFirst({where: { userId: id, title }});
    return note
}

export async function insertNote(id: number, note: TypeNote) {
    await client.notes.create({data: {...note, userId: id}});
}

export async function findAllNotes(id: number) {
    const notes = await client.notes.findMany({where: { userId: id }});
    return notes
}

export async function findNote(id: number) {
    const note = await client.notes.findUnique({where: { id }});
    return note
}

export async function deleteNote(id: number) {
    await client.notes.delete({where: { id }});
}