import client from "../dbStrategy/prisma";
import { TypeCredential } from "../utils/interfaces";

export async function findCredentialByUserIdAndTitle(id: number, title: string) {
    const credential = await client.credentials.findFirst({where: { userId: id, title }});
    return credential
}

export async function insertCredential(id: number, credential: TypeCredential) {
    await client.credentials.create({data: {...credential, userId: id}});
}

export async function findAllCredentials(id: number) {
    const credentials = await client.credentials.findMany({where: { userId: id }});
    return credentials
}

export async function findCredential(id: number) {
    const credential = await client.credentials.findUnique({where: { id }});
    return credential
}

export async function deleteCredential(id: number) {
    await client.credentials.delete({where: { id }});
}