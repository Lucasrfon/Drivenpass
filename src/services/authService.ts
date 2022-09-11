import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail, insertUser } from '../repositories/authRepository';
dotenv.config();

export async function createUser(email: string, rawPassword: string) {
    await isUniqueEmail(email);
    const password = bcrypt.hashSync(rawPassword, 5);
    await insertUser(email, password);
}

export async function isUniqueEmail(email: string) {
    const user = await findUserByEmail(email)

    if(user) {
        throw { type: "conflict", message: 'Email já cadastrado' };
    }
}

export async function checkLogin(email: string, rawPassword: string) {
    const user = await findUserByEmail(email);
    
    if(!user) {
        throw { type: "unauthorized", message: 'Email ou senha inválidos' }
    }

    const password = bcrypt.compareSync(rawPassword, user.password);

    if(!password) {
        throw { type: "unauthorized", message: 'Email ou senha inválidos' }
    }
    
    return generateToken(user.id);
}

export function generateToken(id: number) {
    const secret = process.env.TOKEN_SECRET_KEY;

    if(!secret) {
        throw { type: "code", message: '.env não implementado' }
    }

    const expiresIn = process.env.EXPIRES_IN;
    const token = jwt.sign({ id }, secret, { expiresIn });

    return token
}