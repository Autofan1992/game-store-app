-- Step 1: Create a new enum with the new values
CREATE TYPE "NewGamePlatform" AS ENUM ('Pc', 'Playstation', 'Xbox');

-- Step 2: Update the table to use the new enum values
BEGIN;
  ALTER TABLE "Game" ADD COLUMN "newPlatform" "NewGamePlatform"[];
  UPDATE "Game" SET "newPlatform" = ARRAY['Pc'::"NewGamePlatform"] WHERE "platform" @> ARRAY['PC'::"GamePlatform"];
  UPDATE "Game" SET "newPlatform" = ARRAY['Playstation'::"NewGamePlatform"] WHERE "platform" @> ARRAY['PLAYSTATION'::"GamePlatform"];
  UPDATE "Game" SET "newPlatform" = ARRAY['Xbox'::"NewGamePlatform"] WHERE "platform" @> ARRAY['XBOX'::"GamePlatform"];
  ALTER TABLE "Game" DROP COLUMN "platform";
  ALTER TABLE "Game" RENAME COLUMN "newPlatform" TO "platform";
COMMIT;

-- Step 3: Rename the old enum
ALTER TYPE "GamePlatform" RENAME TO "OldGamePlatform";

-- Step 4: Rename the new enum to the old enum name
ALTER TYPE "NewGamePlatform" RENAME TO "GamePlatform";

-- Step 5: Drop the old enum
DROP TYPE "OldGamePlatform";