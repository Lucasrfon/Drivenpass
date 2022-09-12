import { Request, Response } from "express";
import { checkDocument, getAllDocuments, getOneDocument, removeDocument } from "../services/documentService";

export async function createNewDocument(req: Request, res: Response) {
    const document = req.body;
    const userId = res.locals.id;

    await checkDocument(userId, document);

    res.status(201).send('Documento cadastrado!')
}

export async function getDocuments(req: Request, res: Response) {
    const userId = res.locals.id;
    const documents = await getAllDocuments(userId);

    res.status(200).send(documents)
}

export async function getdocument(req: Request, res: Response) {
    const userId = res.locals.id;
    const documentId = parseInt(req.params.id);

    const document = await getOneDocument(userId, documentId);

    res.status(200).send(document)
}

export async function deleteDocument(req: Request, res: Response) {
    const userId = res.locals.id;
    const documentId = parseInt(req.params.id);

    await removeDocument(userId, documentId);

    res.status(200).send('Documento excluído')
}