import { Request, Response } from "express";
import { checkCredential } from "../services/credentialService";

export async function createNewCredential(req: Request, res: Response) {
    const credential = req.body;
    const id = res.locals.id;

    await checkCredential(id, credential);

    res.status(201).send('Credencial cadastrada!')
}