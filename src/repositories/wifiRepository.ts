import client from "../dbStrategy/prisma";
import { TypeWifi } from "../utils/interfaces";

export async function findWifiByUserIdAndTitle(id: number, title: string) {
    const wifi = await client.wifis.findFirst({where: { userId: id, title }});
    return wifi
}

export async function insertWifi(id: number, wifi: TypeWifi) {
    await client.wifis.create({data: {...wifi, userId: id}});
}

export async function findAllWifis(id: number) {
    const wifis = await client.wifis.findMany({where: { userId: id }});
    return wifis
}

export async function findWifi(id: number) {
    const wifi = await client.wifis.findUnique({where: { id }});
    return wifi
}

export async function deleteWifi(id: number) {
    await client.wifis.delete({where: { id }});
}