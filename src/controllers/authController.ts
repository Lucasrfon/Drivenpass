import { Request, Response } from "express";
import { checkLogin, createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
    const { email, password } = req.body;

    await createUser(email, password);

    res.status(201).send('Usuário cadastrado!')
}

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await checkLogin(email, password);

    res.status(200).send(token)
}