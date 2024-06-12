/*
  Warnings:

  - Added the required column `units` to the `ClassInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `classinfo` ADD COLUMN `units` INTEGER NOT NULL;
