-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "rating" DOUBLE PRECISION;

-- DropEnum
DROP TYPE "GamesSortCriteria";

-- DropEnum
DROP TYPE "SortType";
