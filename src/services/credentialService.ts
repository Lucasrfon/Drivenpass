import Cryptr from 'cryptr';
import dotenv from 'dotenv';
import { deleteCredential, findAllCredentials, findCredential, findCredentialByUserIdAndTitle, insertCredential } from "../repositories/credentialRepository";
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

export async function getAllCredentials(id: number) {
    const credentials = await findAllCredentials(id);
    credentials.map(credential => credential.password = cryptr.decrypt(credential.password));
    return credentials
}

export async function getOneCredential(userId: number, credentialId: number) {
    const credential = await isValidRequestByUser(userId, credentialId); 
    credential.password = cryptr.decrypt(credential.password);
    return credential
}

export async function removeCredential(userId: number, credentialId: number) {
    await isValidRequestByUser(userId, credentialId);
    await deleteCredential(credentialId);
}

async function isValidRequestByUser(userId: number, credentialId: number) {
    const credential = await findCredential(credentialId);

    if(!credential) {
        throw { type: "not found" }
    }
    if(credential.userId !== userId) {
        throw { type: "not found" }
    }
    return credential
}