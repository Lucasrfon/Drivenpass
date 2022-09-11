import bcrypt from 'bcrypt';
import { findUserByEmail, insertUser } from '../repositories/authRepository';

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