/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `News` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "News" DROP COLUMN "imageUrl",
ALTER COLUMN "url" DROP NOT NULL;
