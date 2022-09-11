/*
  Warnings:

  - You are about to drop the column `type` on the `cards` table. All the data in the column will be lost.
  - Added the required column `typeCard` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "typeCard" AS ENUM ('CREDITO', 'DEBITO', 'AMBOS');

-- CreateEnum
CREATE TYPE "typeDoc" AS ENUM ('RG', 'CNH');

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "type",
ADD COLUMN     "typeCard" TEXT NOT NULL;

-- DropEnum
DROP TYPE "type";

-- CreateTable
CREATE TABLE "docs" (
    "id" SERIAL NOT NULL,
    "typeDoc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emission" TIMESTAMP(3) NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "number" TEXT NOT NULL,
    "org" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "docs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "docs" ADD CONSTRAINT "docs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
