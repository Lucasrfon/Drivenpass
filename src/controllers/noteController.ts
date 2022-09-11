import { Request, Response } from "express";
import { checkNote, getAllNotes, getOneNote, removeNote } from "../services/noteService";

export async function createNewNote(req: Request, res: Response) {
    const note = req.body;
    const userId = res.locals.id;

    await checkNote(userId, note);

    res.status(201).send('Nota cadastrada!')
}

export async function getNotes(req: Request, res: Response) {
    const userId = res.locals.id;
    const notes = await getAllNotes(userId);

    res.status(200).send(notes)
}

export async function getNote(req: Request, res: Response) {
    const userId = res.locals.id;
    const noteId = parseInt(req.params.id);

    const note = await getOneNote(userId, noteId);

    res.status(200).send(note)
}

export async function deleteNote(req: Request, res: Response) {
    const userId = res.locals.id;
    const noteId = parseInt(req.params.id);

    await removeNote(userId, noteId);

    res.status(200).send('Nota excluída')
}