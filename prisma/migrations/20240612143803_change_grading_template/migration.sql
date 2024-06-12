/*
  Warnings:

  - You are about to drop the column `classInfoId` on the `gradestemplate` table. All the data in the column will be lost.
  - Added the required column `currentClassId` to the `GradesTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `gradestemplate` DROP FOREIGN KEY `GradesTemplate_classInfoId_fkey`;

-- AlterTable
ALTER TABLE `gradestemplate` DROP COLUMN `classInfoId`,
    ADD COLUMN `classInfoClassId` VARCHAR(191) NULL,
    ADD COLUMN `currentClassId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `GradesTemplate` ADD CONSTRAINT `GradesTemplate_currentClassId_fkey` FOREIGN KEY (`currentClassId`) REFERENCES `CurrentClasses`(`currentClassId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GradesTemplate` ADD CONSTRAINT `GradesTemplate_classInfoClassId_fkey` FOREIGN KEY (`classInfoClassId`) REFERENCES `ClassInfo`(`classId`) ON DELETE SET NULL ON UPDATE CASCADE;
