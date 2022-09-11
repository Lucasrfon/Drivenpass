import Cryptr from 'cryptr';
import dotenv from 'dotenv';
import { deleteNote, findAllNotes, findNote, findNoteByUserIdAndTitle, insertNote } from '../repositories/noteRepository';
import { TypeNote } from '../utils/interfaces';
dotenv.config();

const cryptr = new Cryptr(process.env.TOKEN_SECRET_KEY?? '');

export async function checkNote(id: number, note: TypeNote) {
    const findNote = await findNoteByUserIdAndTitle(id, note.title);
    
    if(findNote) {
        throw { type: "conflict", message: 'Título já cadastrado' }
    }

    await insertNote(id, note);
}

export async function getAllNotes(id: number) {
    const notes = await findAllNotes(id);
    return notes
}

export async function getOneNote(userId: number, noteId: number) {
    const note = await isValidRequestByUser(userId, noteId);
    return note
}

export async function removeNote(userId: number, noteId: number) {
    await isValidRequestByUser(userId, noteId);
    await deleteNote(noteId);
}

async function isValidRequestByUser(userId: number, noteId: number) {
    const note = await findNote(noteId);

    if(!note) {
        throw { type: "not found" }
    }
    if(note.userId !== userId) {
        throw { type: "not found" }
    }
    return note
}