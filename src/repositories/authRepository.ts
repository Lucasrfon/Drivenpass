import client from "../dbStrategy/prisma";

export async function findUserByEmail(email: string) {
    const user = await client.users.findFirst({where: { email }});
    return user
}

export async function insertUser(email: string, password: string) {
    await client.users.create({data: {email, password}});
}