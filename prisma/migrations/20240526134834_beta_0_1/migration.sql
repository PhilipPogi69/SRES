-- AlterTable
ALTER TABLE `user` ADD COLUMN `testId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `GradesTemplate` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `percentage` DOUBLE NOT NULL,
    `gradeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GradesTemplate` ADD CONSTRAINT `GradesTemplate_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `GradesTemplate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
