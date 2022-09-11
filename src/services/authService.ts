import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByEmail, insertUser } from '../repositories/authRepository';
import { TypeAuth } from '../utils/interfaces';
dotenv.config();

export async function createUser(user: TypeAuth) {
    await isUniqueEmail(user.email);
    user.password = bcrypt.hashSync(user.password, 5);
    await insertUser(user);
}

export async function isUniqueEmail(email: string) {
    const user = await findUserByEmail(email)

    if(user) {
        throw { type: "conflict", message: 'Email já cadastrado' };
    }
}

export async function checkLogin(user: TypeAuth) {
    const findUser = await findUserByEmail(user.email);
    
    if(!findUser) {
        throw { type: "unauthorized", message: 'Email ou senha inválidos' }
    }

    const password = bcrypt.compareSync(user.password, findUser.password);

    if(!password) {
        throw { type: "unauthorized", message: 'Email ou senha inválidos' }
    }
    
    return generateToken(findUser.id);
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