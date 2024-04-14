/*
  Warnings:

  - You are about to drop the column `averageRating` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "averageRating",
DROP COLUMN "likes";
