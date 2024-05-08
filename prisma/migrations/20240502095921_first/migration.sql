-- CreateTable
CREATE TABLE `ClassInfo` (
    `classId` VARCHAR(191) NOT NULL,
    `classCode` VARCHAR(191) NOT NULL,
    `schedule` VARCHAR(191) NOT NULL,
    `professorInfoId` VARCHAR(191) NULL,

    PRIMARY KEY (`classId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentInfo` (
    `studentId` VARCHAR(191) NOT NULL,
    `studentName` VARCHAR(191) NOT NULL,
    `studentEmail` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`studentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enrollment` (
    `enrollmentId` VARCHAR(191) NOT NULL,
    `classInfoId` VARCHAR(191) NOT NULL,
    `studentInfoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`enrollmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfessorInfo` (
    `profID` VARCHAR(191) NOT NULL,
    `profName` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`profID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClassroomInfo` (
    `roomID` VARCHAR(191) NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClassInfo` ADD CONSTRAINT `ClassInfo_professorInfoId_fkey` FOREIGN KEY (`professorInfoId`) REFERENCES `ProfessorInfo`(`profID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_classInfoId_fkey` FOREIGN KEY (`classInfoId`) REFERENCES `ClassInfo`(`classId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enrollment` ADD CONSTRAINT `Enrollment_studentInfoId_fkey` FOREIGN KEY (`studentInfoId`) REFERENCES `StudentInfo`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
