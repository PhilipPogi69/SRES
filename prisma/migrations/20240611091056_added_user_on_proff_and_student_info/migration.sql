/*
  Warnings:

  - Added the required column `userId` to the `ProfessorInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `StudentInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `professorinfo` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `studentinfo` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `StudentInfo` ADD CONSTRAINT `StudentInfo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfessorInfo` ADD CONSTRAINT `ProfessorInfo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
