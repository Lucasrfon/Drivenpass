import { Request, Response } from "express";
import { checkLogin, createUser } from "../services/authService";

export async function signup(req: Request, res: Response) {
    const user = req.body;

    await createUser(user);

    res.status(201).send('Usuário cadastrado!')
}

export async function login(req: Request, res: Response) {
    const user = req.body;

    const token = await checkLogin(user);

    res.status(200).send(token)
}