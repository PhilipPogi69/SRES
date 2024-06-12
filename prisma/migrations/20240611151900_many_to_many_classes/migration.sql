/*
  Warnings:

  - You are about to drop the column `professorInfoId` on the `classinfo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `classinfo` DROP FOREIGN KEY `ClassInfo_professorInfoId_fkey`;

-- AlterTable
ALTER TABLE `classinfo` DROP COLUMN `professorInfoId`;

-- CreateTable
CREATE TABLE `_ClassInfoToProfessorInfo` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ClassInfoToProfessorInfo_AB_unique`(`A`, `B`),
    INDEX `_ClassInfoToProfessorInfo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ClassInfoToProfessorInfo` ADD CONSTRAINT `_ClassInfoToProfessorInfo_A_fkey` FOREIGN KEY (`A`) REFERENCES `ClassInfo`(`classId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassInfoToProfessorInfo` ADD CONSTRAINT `_ClassInfoToProfessorInfo_B_fkey` FOREIGN KEY (`B`) REFERENCES `ProfessorInfo`(`profID`) ON DELETE CASCADE ON UPDATE CASCADE;
