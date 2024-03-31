-- Step 1: Create a new enum with the new values
CREATE TYPE "NewGamePlatform" AS ENUM ('PC', 'PLAYSTATION', 'XBOX');

-- Step 2: Update the table to use the new enum values
BEGIN;
  ALTER TABLE "Game" ADD COLUMN "newPlatform" "NewGamePlatform"[];
  UPDATE "Game" SET "newPlatform" = ARRAY['PC'::"NewGamePlatform"] WHERE "platform" @> ARRAY['Pc'::"GamePlatform"];
  UPDATE "Game" SET "newPlatform" = ARRAY['PLAYSTATION'::"NewGamePlatform"] WHERE "platform" @> ARRAY['Playstation'::"GamePlatform"];
  UPDATE "Game" SET "newPlatform" = ARRAY['XBOX'::"NewGamePlatform"] WHERE "platform" @> ARRAY['Xbox'::"GamePlatform"];
  ALTER TABLE "Game" DROP COLUMN "platform";
  ALTER TABLE "Game" RENAME COLUMN "newPlatform" TO "platform";
COMMIT;

-- Step 3: Rename the old enum
ALTER TYPE "GamePlatform" RENAME TO "OldGamePlatform";

-- Step 4: Rename the new enum to the old enum name
ALTER TYPE "NewGamePlatform" RENAME TO "GamePlatform";

-- Step 5: Drop the old enum
DROP TYPE "OldGamePlatform";