/*
  Warnings:

  - You are about to drop the column `studentInfoStudentId` on the `studentgrades` table. All the data in the column will be lost.
  - Added the required column `studentInfoId` to the `StudentGrades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `studentgrades` DROP FOREIGN KEY `StudentGrades_studentInfoStudentId_fkey`;

-- AlterTable
ALTER TABLE `studentgrades` DROP COLUMN `studentInfoStudentId`,
    ADD COLUMN `studentInfoId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `StudentGrades` ADD CONSTRAINT `StudentGrades_studentInfoId_fkey` FOREIGN KEY (`studentInfoId`) REFERENCES `StudentInfo`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
