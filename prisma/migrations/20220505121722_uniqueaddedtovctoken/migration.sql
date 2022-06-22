/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `VisitorCount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VisitorCount_token_key" ON "VisitorCount"("token");
