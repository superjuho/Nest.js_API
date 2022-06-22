/*
  Warnings:

  - Added the required column `title` to the `VisitorCount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `VisitorCount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VisitorCount" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;
