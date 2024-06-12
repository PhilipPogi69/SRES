/*
  Warnings:

  - Added the required column `collegeCollegeId` to the `Department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `department` ADD COLUMN `collegeCollegeId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `professorinfo` ADD COLUMN `collegeId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `College` (
    `collegeId` VARCHAR(191) NOT NULL,
    `college` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`collegeId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Department` ADD CONSTRAINT `Department_collegeCollegeId_fkey` FOREIGN KEY (`collegeCollegeId`) REFERENCES `College`(`collegeId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorInfo` ADD CONSTRAINT `ProfessorInfo_collegeId_fkey` FOREIGN KEY (`collegeId`) REFERENCES `College`(`collegeId`) ON DELETE SET NULL ON UPDATE CASCADE;
