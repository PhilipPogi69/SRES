/*
  Warnings:

  - You are about to drop the column `studentInfoId` on the `studentgrades` table. All the data in the column will be lost.
  - Added the required column `studentCurrentClassesId` to the `StudentGrades` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `studentgrades` DROP FOREIGN KEY `StudentGrades_studentInfoId_fkey`;

-- AlterTable
ALTER TABLE `studentgrades` DROP COLUMN `studentInfoId`,
    ADD COLUMN `studentCurrentClassesId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `StudentCurrentClasses` (
    `id` VARCHAR(191) NOT NULL,
    `currentClassId` VARCHAR(191) NOT NULL,
    `studentInfoStudentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudentCurrentClasses` ADD CONSTRAINT `StudentCurrentClasses_currentClassId_fkey` FOREIGN KEY (`currentClassId`) REFERENCES `CurrentClasses`(`currentClassId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentCurrentClasses` ADD CONSTRAINT `StudentCurrentClasses_studentInfoStudentId_fkey` FOREIGN KEY (`studentInfoStudentId`) REFERENCES `StudentInfo`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentGrades` ADD CONSTRAINT `StudentGrades_studentCurrentClassesId_fkey` FOREIGN KEY (`studentCurrentClassesId`) REFERENCES `StudentCurrentClasses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
