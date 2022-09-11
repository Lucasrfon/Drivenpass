import { Request, Response } from "express";
import { checkCredential } from "../repositories/credentialRepository";

export async function createNewCredential(req: Request, res: Response) {
    const credential = req.body;

    await checkCredential(credential);

    res.status(201).send('Credencial cadastrada!')
}