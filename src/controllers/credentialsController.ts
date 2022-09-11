import { Request, Response } from "express";
import { checkCredential, getAllCredentials, getOneCredential } from "../services/credentialService";

export async function createNewCredential(req: Request, res: Response) {
    const credential = req.body;
    const userId = res.locals.id;

    await checkCredential(userId, credential);

    res.status(201).send('Credencial cadastrada!')
}

export async function getCredentials(req: Request, res: Response) {
    const userId = res.locals.id;
    const credentials = await getAllCredentials(userId);

    res.status(200).send(credentials)
}

export async function getCredential(req: Request, res: Response) {
    const userId = res.locals.id;
    const credentialId = parseInt(req.params.id);

    const credential = await getOneCredential(userId, credentialId);

    res.status(200).send(credential)
}