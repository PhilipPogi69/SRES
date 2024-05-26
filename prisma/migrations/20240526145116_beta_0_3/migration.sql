/*
  Warnings:

  - You are about to drop the column `gradeId` on the `gradestemplate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `gradestemplate` DROP FOREIGN KEY `GradesTemplate_gradeId_fkey`;

-- AlterTable
ALTER TABLE `gradestemplate` DROP COLUMN `gradeId`;

-- CreateTable
CREATE TABLE `_GradingInfo` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GradingInfo_AB_unique`(`A`, `B`),
    INDEX `_GradingInfo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GradingInfo` ADD CONSTRAINT `_GradingInfo_A_fkey` FOREIGN KEY (`A`) REFERENCES `GradesTemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GradingInfo` ADD CONSTRAINT `_GradingInfo_B_fkey` FOREIGN KEY (`B`) REFERENCES `GradesTemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
