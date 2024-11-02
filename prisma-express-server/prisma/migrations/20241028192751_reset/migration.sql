/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `fullName` on the `Counterparties` table. All the data in the column will be lost.
  - You are about to drop the column `shortName` on the `Counterparties` table. All the data in the column will be lost.
  - Added the required column `fullname` to the `Counterparties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortname` to the `Counterparties` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "password" TEXT,
    "email" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "middlename" TEXT,
    "fullname" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Counterparties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortname" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "bin" INTEGER
);
INSERT INTO "new_Counterparties" ("bin", "id") SELECT "bin", "id" FROM "Counterparties";
DROP TABLE "Counterparties";
ALTER TABLE "new_Counterparties" RENAME TO "Counterparties";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
