/*
  Warnings:

  - You are about to drop the `Counterparty` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Counterparty";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Counterparties" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "bin" INTEGER
);
