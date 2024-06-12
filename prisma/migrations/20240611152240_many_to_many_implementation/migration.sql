/*
  Warnings:

  - You are about to drop the `_classinfotoprofessorinfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_classinfotoprofessorinfo` DROP FOREIGN KEY `_ClassInfoToProfessorInfo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_classinfotoprofessorinfo` DROP FOREIGN KEY `_ClassInfoToProfessorInfo_B_fkey`;

-- DropTable
DROP TABLE `_classinfotoprofessorinfo`;

-- CreateTable
CREATE TABLE `CurrentClasses` (
    `currentClassId` VARCHAR(191) NOT NULL,
    `classInfoClassId` VARCHAR(191) NOT NULL,
    `professorInfoProfID` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`currentClassId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CurrentClasses` ADD CONSTRAINT `CurrentClasses_classInfoClassId_fkey` FOREIGN KEY (`classInfoClassId`) REFERENCES `ClassInfo`(`classId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CurrentClasses` ADD CONSTRAINT `CurrentClasses_professorInfoProfID_fkey` FOREIGN KEY (`professorInfoProfID`) REFERENCES `ProfessorInfo`(`profID`) ON DELETE RESTRICT ON UPDATE CASCADE;
