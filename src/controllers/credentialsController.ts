import { Request, Response } from "express";

export async function signup(req: Request, res: Response) {
    const { title, url, user, email } = req.body;

    res.status(201).send('Usuário cadastrado!')
}