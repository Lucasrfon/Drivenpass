import Cryptr from 'cryptr';
import dotenv from 'dotenv';
import { findCredentialByUserIdAndTitle, insertCredential } from "../repositories/credentialRepository";
import { TypeCredential } from "../utils/interfaces";
dotenv.config();

const cryptr = new Cryptr(process.env.TOKEN_SECRET_KEY?? '');

export async function checkCredential(id: number, credential: TypeCredential) {
    const findCredential = await findCredentialByUserIdAndTitle(id, credential.title);
    
    if(findCredential) {
        throw { type: "conflict", message: 'Título já cadastrado' }
    }

    credential.password = cryptr.encrypt(credential.password);
    await insertCredential(id, credential);
}