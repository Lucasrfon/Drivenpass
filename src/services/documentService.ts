import { deleteDocument, findAllDocuments, findDocument, findDocumentByUserIdAndType, insertDocument } from "../repositories/documentRepository";
import { TypeDocument } from "../utils/interfaces";

export async function checkDocument(id: number, document: TypeDocument) {
    const findDocument = await findDocumentByUserIdAndType(id, document.typeDoc);
    
    if(findDocument) {
        throw { type: "conflict", message: 'Documento já cadastrado' }
    }

    await insertDocument(id, document);
}

export async function getAllDocuments(id: number) {
    const documents = await findAllDocuments(id);
    return documents
}

export async function getOneDocument(userId: number, documentId: number) {
    const document = await isValidRequestByUser(userId, documentId); 
    return document
}

export async function removeDocument(userId: number, documentId: number) {
    await isValidRequestByUser(userId, documentId);
    await deleteDocument(documentId);
}

async function isValidRequestByUser(userId: number, documentId: number) {
    const document = await findDocument(documentId);

    if(!document) {
        throw { type: "not found" }
    }
    if(document.userId !== userId) {
        throw { type: "not found" }
    }
    return document
}