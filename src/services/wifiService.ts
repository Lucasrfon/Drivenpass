import Cryptr from 'cryptr';
import dotenv from 'dotenv';
import { deleteWifi, findAllWifis, findWifi, insertWifi } from '../repositories/wifiRepository';
import { TypeWifi } from "../utils/interfaces";
dotenv.config();

const cryptr = new Cryptr(process.env.TOKEN_SECRET_KEY?? '');

export async function checkWifi(id: number, wifi: TypeWifi) {
    wifi.password = cryptr.encrypt(wifi.password);
    await insertWifi(id, wifi);
}

export async function getAllWifis(id: number) {
    const wifis = await findAllWifis(id);
    wifis.map(wifi => wifi.password = cryptr.decrypt(wifi.password));
    return wifis
}

export async function getOneWifi(userId: number, wifiId: number) {
    const wifi = await isValidRequestByUser(userId, wifiId); 
    wifi.password = cryptr.decrypt(wifi.password);
    return wifi
}

export async function removeWifi(userId: number, wifiId: number) {
    await isValidRequestByUser(userId, wifiId);
    await deleteWifi(wifiId);
}

async function isValidRequestByUser(userId: number, wifiId: number) {
    const wifi = await findWifi(wifiId);

    if(!wifi) {
        throw { type: "not found" }
    }
    if(wifi.userId !== userId) {
        throw { type: "not found" }
    }
    return wifi
}