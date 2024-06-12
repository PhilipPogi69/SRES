/*
  Warnings:

  - You are about to drop the column `department` on the `professorinfo` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `ProfessorInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `StudentInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentCode` to the `StudentInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `professorinfo` DROP COLUMN `department`,
    ADD COLUMN `departmentId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `studentinfo` ADD COLUMN `dateOfBirth` DATETIME(3) NOT NULL,
    ADD COLUMN `studentCode` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Department` (
    `departmentId` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`departmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProfessorInfo` ADD CONSTRAINT `ProfessorInfo_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `Department`(`departmentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
