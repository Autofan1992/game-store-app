/*
  Warnings:

  - You are about to drop the column `avarageRating` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "avarageRating",
ADD COLUMN     "averageRating" DOUBLE PRECISION;
