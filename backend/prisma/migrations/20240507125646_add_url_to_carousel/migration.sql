/*
  Warnings:

  - Added the required column `url` to the `Carousel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Carousel" ADD COLUMN     "url" TEXT NOT NULL;
