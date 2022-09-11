import { credentials, notes, users } from "@prisma/client";

export type TypeAuth = Omit<users, 'id'>

export type TypeCredential = Omit<credentials, 'id' | 'userId'>

export type TypeNote = Omit<notes, 'id' | 'userId'>