import { Request, Response } from "express";
import { checkCredential, getAllCredentials } from "../services/credentialService";

export async function createNewCredential(req: Request, res: Response) {
    const credential = req.body;
    const id = res.locals.id;

    await checkCredential(id, credential);

    res.status(201).send('Credencial cadastrada!')
}

export async function getCredentials(req: Request, res: Response) {
    const id = res.locals.id;
    const credentials = await getAllCredentials(id);

    res.status(200).send(credentials)
}