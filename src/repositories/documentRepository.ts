import client from "../dbStrategy/prisma";
import { TypeDocument } from "../utils/interfaces";

export async function findDocumentByUserIdAndType(id: number, typeDoc: string) {
    const document = await client.docs.findFirst({where: { userId: id, typeDoc }});
    return document
}

export async function insertDocument(id: number, document: TypeDocument) {
    await client.docs.create({data: {...document, userId: id}});
}

export async function findAllDocuments(id: number) {
    const documents = await client.docs.findMany({where: { userId: id }});
    return documents
}

export async function findDocument(id: number) {
    const document = await client.docs.findUnique({where: { id }});
    return document
}

export async function deleteDocument(id: number) {
    await client.docs.delete({where: { id }});
}