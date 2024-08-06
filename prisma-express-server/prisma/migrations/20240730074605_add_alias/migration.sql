/*
  Warnings:

  - Added the required column `alias` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "alias" TEXT NOT NULL,
    "postStatusId" INTEGER NOT NULL,
    CONSTRAINT "Post_postStatusId_fkey" FOREIGN KEY ("postStatusId") REFERENCES "PostStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("description", "id", "postStatusId", "title") SELECT "description", "id", "postStatusId", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
