import { Request, Response } from "express";
import { checkWifi, getAllWifis, getOneWifi, removeWifi } from "../services/wifiService";

export async function createNewWifi(req: Request, res: Response) {
    const wifi = req.body;
    const userId = res.locals.id;

    await checkWifi(userId, wifi);

    res.status(201).send('Wifi cadastrado!')
}

export async function getWifis(req: Request, res: Response) {
    const userId = res.locals.id;
    const wifis = await getAllWifis(userId);

    res.status(200).send(wifis)
}

export async function getWifi(req: Request, res: Response) {
    const userId = res.locals.id;
    const wifiId = parseInt(req.params.id);

    const wifi = await getOneWifi(userId, wifiId);

    res.status(200).send(wifi)
}

export async function deleteWifi(req: Request, res: Response) {
    const userId = res.locals.id;
    const wifiId = parseInt(req.params.id);

    await removeWifi(userId, wifiId);

    res.status(200).send('Wifi excluído')
}