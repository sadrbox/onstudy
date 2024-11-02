-- CreateTable
CREATE TABLE "Counterparty" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortName" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "bin" INTEGER
);
