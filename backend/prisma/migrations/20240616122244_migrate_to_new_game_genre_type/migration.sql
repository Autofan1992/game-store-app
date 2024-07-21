/*
  Warnings:

  - You are about to drop the column `newGenre` on the `Game` table. All the data in the column will be lost.
  - Changed the type of `genre` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Game"
DROP COLUMN "genre";

-- AlterTable
ALTER TABLE "Game"
RENAME COLUMN "newGenre" TO "genre";