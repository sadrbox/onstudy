/*
  Warnings:

  - You are about to alter the column `bin` on the `Counterparties` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Counterparties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "fullname" TEXT,
    "bin" BIGINT
);
INSERT INTO "new_Counterparties" ("bin", "fullname", "id", "title") SELECT "bin", "fullname", "id", "title" FROM "Counterparties";
DROP TABLE "Counterparties";
ALTER TABLE "new_Counterparties" RENAME TO "Counterparties";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
