"use server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import {
  ClassInfo,
  StudentInfo,
  Enrollment,
  ClassroomInfo,
  PrismaClient,
  ProfessorInfo,
  User,
  GradesTemplate,
} from "@prisma/client";
import { colleges } from "./store";
import { use } from "react";

const prisma = new PrismaClient();

interface StudentInfoType {
  info: StudentInfo;
  user: User;
}
interface Result {
  success: boolean;
  message?: string;
  data?: any;
}

export async function readColleges(): Promise<Result> {
  try {
    const data = await prisma.college.findMany({
      include: {
        Department: true,
      },
    });
    return {
      data: data,
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function collegeAndDepartmentIntitiation(): Promise<Result> {
  try {
    const collegeDepartmentData = colleges;
    await prisma.$transaction(async (tx) => {
      const colleges = await tx.college.findMany();
      const departments = await tx.department.findMany();
      if (colleges.length === 0 && departments.length === 0) {
        for (let index = 0; index < collegeDepartmentData.length; index++) {
          const college = collegeDepartmentData[index];
          const createCollege = await tx.college.create({
            data: {
              college: college.name,
            },
          });
          for (let index = 0; index < college.departments.length; index++) {
            const department = college.departments[index];
            const createDepartment = await tx.department.create({
              data: {
                department: department.name,
                collegeCollegeId: createCollege.collegeId,
              },
            });
          }
        }
      }
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function generateStudentGrades(
  studentId: string,
  classId: string
): Promise<Result> {
  try {
    await prisma.$transaction(async (tx) => {
      const template = await tx.gradesTemplate.findMany({
        where: {
          currentClassId: classId,
        },
      });

      for (let index = 0; index < template.length; index++) {
        const { currentClassId, gradeId, id, percentage, title } =
          template[index];
        await tx.studentGrades.create({
          data: {
            value: 0,
            gradesTemplateId: id,
            studentCurrentClassesId: currentClassId,
          },
        });
      }
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function readMainGradeTamplate(
  currentClassId: string
): Promise<Result> {
  try {
    const data = await prisma.gradesTemplate.findMany({
      where: { gradeId: null, currentClassId: currentClassId },
      include: {
        Grades: {
          include: {
            Grades: {
              include: {
                Grades: {
                  include: {
                    Grades: {
                      include: { Grades: { include: { Grades: true } } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    return {
      data: data,
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function createCurrentStudentClass() {
  try {
    // const res = await prisma.
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export async function generateStudentsInfoAndAccounts(data: StudentInfoType[]) {
  try {
    await prisma.$transaction(async (tx) => {
      for (let index = 0; index < data.length; index++) {
        const { info, user } = data[index];
        const password = await bcrypt.hash(user.password, 10);
        const userData = await tx.user.create({
          data: {
            dateOfBirth: user.dateOfBirth,
            accessLevel: user.accessLevel,
            password: password,
            username: user.username,
            email: user.email,
          },
        });

        await tx.studentInfo.create({
          data: {
            dateOfBirth: info.dateOfBirth,
            studentCode: info.studentCode,
            studentEmail: info.studentEmail,
            studentName: info.studentName,
            userId: userData.id,
          },
        });
      }
    });
    return null;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

export async function readGradeTamplate(): Promise<Result> {
  try {
    const data = await prisma.gradesTemplate.findMany({
      include: {
        Grades: {
          include: {
            Grades: {
              include: {
                Grades: {
                  include: {
                    Grades: {
                      include: { Grades: { include: { Grades: true } } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    return {
      data: data,
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function createGradeTamplate(
  data: Partial<GradesTemplate>[]
): Promise<Result> {
  try {
    await prisma.$transaction(async (tx) => {
      for (let index = 0; index < data.length; index++) {
        const { currentClassId, percentage, title, id, gradeId } = data[index];
        if (!gradeId) {
          await tx.gradesTemplate.create({
            data: {
              id: id,

              currentClassId: currentClassId || "",
              percentage: percentage || 0,
              title: title || "",
            },
          });
        }
      }

      for (let index = 0; index < data.length; index++) {
        const { currentClassId, percentage, title, id, gradeId } = data[index];

        if (gradeId) {
          const test = await tx.gradesTemplate.update({
            where: { id: gradeId },
            data: {
              Grades: {
                create: {
                  id: id,
                  currentClassId: currentClassId || "",
                  gradeId: gradeId,
                  percentage: percentage || 0,
                  title: title || "",
                },
              },
            },
          });
        }
      }
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// export async function createGradeTamplate() : Promise<Result>  {
//   try {
//     return {
//       success: true,
//     };
//   } catch (error) {
//     if (error instanceof Error) {
//       return {
//         success: false,
//         message: `Things exploded (${error.message})`,
//       };
//     } else {
//       return {
//         success: false,
//       };
//     }
//   }
// }

//Create User

export async function hasEmptyValues(
  obj: any,
  exemptions: string[] = []
): Promise<boolean> {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    if (exemptions.includes(key)) continue;

    const value = obj[key];

    if (value instanceof Date) {
      return false;
    }

    if (value === "" || value === 0) {
      return true;
    }

    if (Array.isArray(value) && value.length === 0) {
      return true;
    }

    if (typeof value === "object" && value !== null) {
      if (Object.keys(value).length === 0) {
        return true;
      }
      if (await hasEmptyValues(value, exemptions)) {
        return true;
      }
    }
  }

  return false;
}

export async function createUserInfo(data: User): Promise<Result> {
  const { email, username, password, accessLevel, dateOfBirth } = data;

  const hashed = await bcrypt.hash(password, 10);
  try {
    const userData = await prisma.user.findFirst({
      where: { username: username },
    });
    if (userData) {
      throw new Error(
        "There is already an account that exist with the same username, pick another one. "
      );
    }

    const createUserData = await prisma.user.create({
      data: {
        username: username,
        password: hashed,
        accessLevel: accessLevel,
        dateOfBirth: dateOfBirth,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `${error.message}`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function readDepartments(): Promise<Result> {
  try {
    const departments = await prisma.department.findMany();
    return {
      success: true,
      data: departments, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

//Read User
export async function readUserInfo(username: string): Promise<Result> {
  try {
    const readUserData = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return {
      success: true,
      data: readUserData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update User
export async function updateUserInfo(data: User): Promise<Result> {
  const { id, email, username, password, accessLevel } = data;
  try {
    const updateUserData = await prisma.user.updateMany({
      where: {
        id: id, // Specify the condition to identify the record to update
      },
      data: {
        email: email,
        username: username,
        password: password,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Delete User
export async function deleteUserInfo(data: User): Promise<Result> {
  const { id, email, username, password, accessLevel } = data;
  try {
    const deleteUserData = await prisma.user.deleteMany({
      where: {
        id: id, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function createClassesFromFile(
  data: ClassInfo[]
): Promise<Result> {
  try {
    const createClassData = await prisma.classInfo.createMany({
      data: data,
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function createCurrentClass(
  proffId: string,
  classId: string
): Promise<Result> {
  try {
    const createClassData = await prisma.currentClasses.create({
      data: {
        assignedBy: proffId,
        classInfoClassId: classId,
        professorInfoProfID: proffId,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Create Class
export async function createClassInfo(data: ClassInfo): Promise<Result> {
  const { classCode, schedule, classId, description, units } = data;
  try {
    const createClassData = await prisma.classInfo.create({
      data: {
        classCode: classCode,
        schedule: schedule,
        description: description,
        classId: classId,
        units: units,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function readSingleClassInfo(data: ClassInfo): Promise<Result> {
  const { classCode, schedule } = data;
  try {
    const readClassData = await prisma.classInfo.findMany({
      where: {
        classCode: classCode, // Filter by classCode if provided
        schedule: schedule, // Filter by schedule if provided
      },
    });
    return {
      success: true,
      data: readClassData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Read Class

export async function readCurrentClassInfoByProffIdAndClassId(
  proffId: string,
  classId: string
): Promise<Result> {
  try {
    const readClassData = await prisma.currentClasses.findFirst({
      where: {
        AND: [{ professorInfoProfID: proffId }, { classInfoClassId: classId }],
      },
      include: { class: true },
    });
    return {
      success: true,
      data: readClassData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function readCurrentClassInfo(proffId: string): Promise<Result> {
  try {
    const readClassData = await prisma.currentClasses.findMany({
      where: {
        professorInfoProfID: proffId,
      },
      include: { class: true },
    });
    return {
      success: true,
      data: readClassData.map((data) => data.class), // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function readClassInfo(): Promise<Result> {
  try {
    const readClassData = await prisma.classInfo.findMany();
    return {
      success: true,
      data: readClassData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update Class
export async function updateClassInfo(data: ClassInfo): Promise<Result> {
  const { classId, classCode, schedule } = data;
  try {
    const updateClassData = await prisma.classInfo.updateMany({
      where: {
        classId: classId, // Specify the condition to identify the record to update
      },
      data: {
        classCode: "2", // Update classCode based on provided data
        schedule: "Friday 8am to 11am", // Update schedule based on provided data
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

export async function getProffessorInfoByUserId(userId: string) {
  const res = prisma.professorInfo.findFirst({ where: { userId: userId } });
  return res;
}

// Delete Class
export async function deleteClassInfo(data: ClassInfo): Promise<Result> {
  const { classId, classCode, schedule } = data;
  try {
    const deleteClassData = await prisma.classInfo.deleteMany({
      where: {
        classId: classId, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Create Professor
export async function createProfessorInfo(
  data: ProfessorInfo
): Promise<Result> {
  const { collegeId, departmentId, email, profID, profName, userId } = data;
  try {
    const createProfData = await prisma.professorInfo.create({
      data: {
        profName: profName,
        email: email,
        departmentId: departmentId,
        userId: userId,
        collegeId: collegeId,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Read Professor
export async function readProfessorInfo(): Promise<Result> {
  try {
    const readProfData: ProfessorInfo[] = await prisma.professorInfo.findMany();
    return {
      success: true,
      data: readProfData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update Professor
export async function updateProfessorInfo(
  data: ProfessorInfo
): Promise<Result> {
  const { profID, email, profName } = data;
  try {
    const updateProfData = await prisma.professorInfo.updateMany({
      where: {
        profID: profID, // Specify the condition to identify the record to update
      },
      data: {
        profName: "Ben Burnik",

        email: "benburnik@gmail.com",
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Delete Professor
export async function deleteProfessorInfo(
  data: ProfessorInfo
): Promise<Result> {
  const { profID, email, profName } = data;
  try {
    const deleteProfData = await prisma.professorInfo.deleteMany({
      where: {
        profID: profID, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Create Student
// export async function createStudentInfo(data: StudentInfo): Promise<Result> {
//   const { studentId, studentName, studentEmail } = data;
//   try {
//     const createStudentData = await prisma.studentInfo.create({
//       data: {
//         studentName: studentName,
//         studentEmail: studentEmail,
//         dateOfBirth :
//       },
//     });
//     return {
//       success: true,
//     };
//   } catch (error) {
//     if (error instanceof Error) {
//       return {
//         success: false,
//         message: `Things exploded (${error.message})`,
//       };
//     } else {
//       return {
//         success: false,
//       };
//     }
//   }
// }

// Read Student
export async function readStudentInfo(data: StudentInfo): Promise<Result> {
  const { studentId, studentName, studentEmail } = data;
  try {
    const readStudentData = await prisma.studentInfo.findMany({
      where: {
        studentName: studentName, // Filter by classCode if provided
        studentEmail: studentEmail, // Filter by schedule if provided
      },
    });
    return {
      success: true,
      data: readStudentData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update Student
export async function updateStudentInfo(data: StudentInfo): Promise<Result> {
  const { studentId, studentName, studentEmail } = data;
  try {
    const updateStudentData = await prisma.studentInfo.updateMany({
      where: {
        studentId: studentId, // Specify the condition to identify the record to update
      },
      data: {
        studentName: studentName, // Update classCode based on provided data
        studentEmail: studentEmail, // Update schedule based on provided data
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Delete Student
export async function deleteStudentInfo(data: StudentInfo): Promise<Result> {
  const { studentId, studentName, studentEmail } = data;
  try {
    const deleteStudentData = await prisma.studentInfo.deleteMany({
      where: {
        studentId: studentId, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Create Classroom
export async function createClassroomInfo(
  data: ClassroomInfo
): Promise<Result> {
  const { roomID, roomNumber } = data;
  try {
    const createClassroomData = await prisma.classroomInfo.create({
      data: {
        roomNumber: "306",
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Read Classroom
export async function readClassroomInfo(data: ClassroomInfo): Promise<Result> {
  const { roomID, roomNumber } = data;
  try {
    const readClassroomData = await prisma.classroomInfo.findMany({
      where: {
        roomNumber: roomNumber, // Filter by classCode if provided
      },
    });
    return {
      success: true,
      data: readClassroomData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update Classroom
export async function updateClassroomInfo(
  data: ClassroomInfo
): Promise<Result> {
  const { roomID, roomNumber } = data;
  try {
    const updateClassroomData = await prisma.classroomInfo.updateMany({
      where: {
        roomID: roomID, // Specify the condition to identify the record to update
      },
      data: {
        roomNumber: roomNumber, // Update classCode based on provided data
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Delete Classroom
export async function deleteClassroomInfo(
  data: ClassroomInfo
): Promise<Result> {
  const { roomID, roomNumber } = data;
  try {
    const createData = await prisma.classroomInfo.deleteMany({
      where: {
        roomID: roomID, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Create operation
export async function createEnrollmentInfo(data: Enrollment): Promise<Result> {
  const { studentInfoId, classInfoId } = data;
  try {
    const createEnrollmentData = await prisma.enrollment.create({
      data: {
        studentInfoId: studentInfoId,
        classInfoId: classInfoId,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Read operation
export async function readEnrollmentInfo(data: Enrollment): Promise<Result> {
  const { studentInfoId, classInfoId } = data;
  try {
    const readEnrollmentData = await prisma.enrollment.findMany({
      where: {
        studentInfoId: studentInfoId,
        classInfoId: classInfoId,
      },
    });
    return {
      success: true,
      data: readEnrollmentData, // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Update operation
export async function updateEnrollmentInfo(data: Enrollment): Promise<Result> {
  const { enrollmentId, studentInfoId, classInfoId } = data;
  try {
    const createData = await prisma.enrollment.updateMany({
      where: {
        enrollmentId: enrollmentId, // Specify the condition to identify the record to update
      },
      data: {
        studentInfoId: studentInfoId,
        classInfoId: classInfoId,
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}

// Delete operation
export async function deleteEnrollmentInfo(data: Enrollment): Promise<Result> {
  const { enrollmentId, studentInfoId, classInfoId } = data;
  try {
    const createData = await prisma.enrollment.deleteMany({
      where: {
        enrollmentId: enrollmentId, // Specify the condition to identify the record to update
      },
    });
    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}
