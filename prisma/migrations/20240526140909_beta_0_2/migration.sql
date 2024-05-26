-- AlterTable
ALTER TABLE `gradestemplate` ADD COLUMN `classInfoId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `StudentGrades` (
    `id` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `gradesTemplateId` VARCHAR(191) NOT NULL,
    `studentInfoStudentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `GradesTemplate` ADD CONSTRAINT `GradesTemplate_classInfoId_fkey` FOREIGN KEY (`classInfoId`) REFERENCES `ClassInfo`(`classId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentGrades` ADD CONSTRAINT `StudentGrades_gradesTemplateId_fkey` FOREIGN KEY (`gradesTemplateId`) REFERENCES `GradesTemplate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentGrades` ADD CONSTRAINT `StudentGrades_studentInfoStudentId_fkey` FOREIGN KEY (`studentInfoStudentId`) REFERENCES `StudentInfo`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
