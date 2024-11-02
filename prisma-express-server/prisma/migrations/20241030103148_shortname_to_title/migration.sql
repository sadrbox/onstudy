/*
  Warnings:

  - You are about to drop the column `shortname` on the `Counterparties` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Counterparties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "fullname" TEXT,
    "bin" INTEGER
);
INSERT INTO "new_Counterparties" ("bin", "fullname", "id") SELECT "bin", "fullname", "id" FROM "Counterparties";
DROP TABLE "Counterparties";
ALTER TABLE "new_Counterparties" RENAME TO "Counterparties";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
