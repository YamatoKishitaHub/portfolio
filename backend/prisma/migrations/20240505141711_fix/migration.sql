/*
  Warnings:

  - You are about to drop the column `text` on the `Carousel` table. All the data in the column will be lost.
  - Added the required column `content` to the `Carousel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carousel" DROP COLUMN "text",
ADD COLUMN     "content" TEXT NOT NULL;
