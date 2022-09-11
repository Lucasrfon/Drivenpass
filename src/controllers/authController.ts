import { Request, Response } from "express";
import { createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
    const { email, password } = req.body;

    await createUser(email, password);

    res.status(201).send('Usuário cadastrado!')
}