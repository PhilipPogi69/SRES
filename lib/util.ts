"use server";

import { ClassInfo,StudentInfo,Enrollment,ClassroomInfo, PrismaClient, ProfessorInfo, User } from "@prisma/client";
import { use } from "react";
const prisma = new PrismaClient();

interface Result {
  success: boolean;
  message?: string;
  data?: any;
}

//Create User
export async function  createUserInfo(data:User): Promise<Result>  {
  const { email,username,password,accessLevel } = data;
  try {
    const createUserData = await prisma.user.create({
      data: {
        email:email,
        username:username,
        password:password,
        accessLevel: accessLevel
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

//Read User
export async function readUserInfo(data: User): Promise<Result> {
  const { email,username,password,accessLevel } = data;
  try {
    const readUserData = await prisma.user.findMany({
      where: {
        email:email,
        username:username,
        password:password,
      }
    });
    return {
      success: true,
      data: readUserData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update User
export async function  updateUserInfo(data: User): Promise<Result>  {
  const { id,email,username,password,accessLevel } = data;
  try {
    const updateUserData = await prisma.user.updateMany({
      where: {
        id: id // Specify the condition to identify the record to update
      },
      data: {
        email:email,
        username:username,
        password:password,
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

// Delete User
export async function  deleteUserInfo(data: User): Promise<Result>  {
  const { id,email,username,password,accessLevel } = data;
  try {
    const deleteUserData = await prisma.user.deleteMany({
      where: {
        id: id // Specify the condition to identify the record to update
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
export async function  createClassInfo(data: ClassInfo): Promise<Result>  {
  const { classCode,schedule } = data;
  try {
    const createClassData = await prisma.classInfo.create({
      data: {
        classCode: "1",
        schedule: "Thursday 11am-1pm"
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

// Read Class
export async function readClassInfo(data: ClassInfo): Promise<Result> {
  const { classCode, schedule } = data;
  try {
    const readClassData = await prisma.classInfo.findMany({
      where: {
        classCode: classCode, // Filter by classCode if provided
        schedule: schedule // Filter by schedule if provided
      }
    });
    return {
      success: true,
      data: readClassData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update Class
export async function  updateClassInfo(data: ClassInfo): Promise<Result>  {
  const { classId, classCode,schedule } = data;
  try {
    const updateClassData = await prisma.classInfo.updateMany({
      where: {
        classId: classId // Specify the condition to identify the record to update
      },
      data: {
        classCode: "2", // Update classCode based on provided data
        schedule: "Friday 8am to 11am" // Update schedule based on provided data
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

// Delete Class
export async function  deleteClassInfo(data: ClassInfo): Promise<Result>  {
  const { classId, classCode,schedule } = data;
  try {
    const deleteClassData = await prisma.classInfo.deleteMany({
      where: {
        classId: classId // Specify the condition to identify the record to update
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
export async function  createProfessorInfo(data: ProfessorInfo): Promise<Result>  {
  const { email,profName,department } = data;
  try {
    const createProfData = await prisma.professorInfo.create({
      data: {
        profName: "Jan Burnok Balagtas",
        department: "COS",
        email:"janbalagtas@gmail.com"
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
export async function readProfessorInfo(data: ProfessorInfo): Promise<Result> {
  const { email,profName,department } = data;
  try {
    const readProfData = await prisma.professorInfo.findMany({
      where: {
        profName: "Jan Burnok Balagtas",
        department: "COS",
        email:"janbalagtas@gmail.com"
      }
    });
    return {
      success: true,
      data: readProfData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update Professor
export async function  updateProfessorInfo(data: ProfessorInfo): Promise<Result>  {
  const { profID,email,profName,department } = data;
  try {
    const updateProfData = await prisma.professorInfo.updateMany({
      where: {
        profID: profID // Specify the condition to identify the record to update
      },
      data: {
        profName: "Ben Burnik",
        department: "CIT",
        email:"benburnik@gmail.com"
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


// Delete Professor
export async function  deleteProfessorInfo(data: ProfessorInfo): Promise<Result>  {
  const { profID,email,profName,department } = data;
  try {
    const deleteProfData = await prisma.professorInfo.deleteMany({
      where: {
        profID: profID // Specify the condition to identify the record to update
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
export async function  createStudentInfo(data: StudentInfo): Promise<Result>  {
  const { studentId,studentName,studentEmail } = data;
  try {
    const createStudentData = await prisma.studentInfo.create({
      data: {
        studentName:"Karl Yuri Kong",
        studentEmail:"karlyurikong@gmail.com"
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

// Read Student
export async function readStudentInfo(data: StudentInfo): Promise<Result> {
  const { studentId,studentName,studentEmail } = data;
  try {
    const readStudentData = await prisma.studentInfo.findMany({
      where: {
        studentName: studentName, // Filter by classCode if provided
        studentEmail: studentEmail // Filter by schedule if provided
      }
    });
    return {
      success: true,
      data: readStudentData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update Student
export async function  updateStudentInfo(data: StudentInfo): Promise<Result>  {
  const { studentId,studentName,studentEmail } = data;
  try {
    const updateStudentData = await prisma.studentInfo.updateMany({
      where: {
        studentId: studentId // Specify the condition to identify the record to update
      },
      data: {
        studentName: studentName, // Update classCode based on provided data
        studentEmail: studentEmail // Update schedule based on provided data
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

// Delete Student
export async function  deleteStudentInfo(data: StudentInfo): Promise<Result>  {
  const { studentId,studentName,studentEmail } = data;
  try {
    const deleteStudentData = await prisma.studentInfo.deleteMany({
      where: {
        studentId: studentId // Specify the condition to identify the record to update
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
export async function  createClassroomInfo(data: ClassroomInfo): Promise<Result>  {
  const { roomID,roomNumber } = data;
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
  const { roomID,roomNumber } = data;
  try {
    const readClassroomData = await prisma.classroomInfo.findMany({
      where: {
        roomNumber: roomNumber, // Filter by classCode if provided
      }
    });
    return {
      success: true,
      data: readClassroomData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update Classroom
export async function  updateClassroomInfo(data: ClassroomInfo): Promise<Result>  {
  const { roomID,roomNumber } = data;
  try {
    const updateClassroomData = await prisma.classroomInfo.updateMany({
      where: {
        roomID: roomID // Specify the condition to identify the record to update
      },
      data: {
        roomNumber: roomNumber, // Update classCode based on provided data
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


// Delete Classroom
export async function  deleteClassroomInfo(data: ClassroomInfo): Promise<Result>  {
  const { roomID,roomNumber } = data;
  try {
    const createData = await prisma.classroomInfo.deleteMany({
      where: {
        roomID:roomID // Specify the condition to identify the record to update
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
export async function  createEnrollmentInfo(data: Enrollment): Promise<Result>  {
  const { studentInfoId,classInfoId } = data;
  try {
    const createEnrollmentData = await prisma.enrollment.create({
      data: {
        studentInfoId:studentInfoId,
        classInfoId:classInfoId
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
  const { studentInfoId,classInfoId } = data;
  try {
    const readEnrollmentData = await prisma.enrollment.findMany({
      where: {
        studentInfoId:studentInfoId,
        classInfoId:classInfoId
      }
    });
    return {
      success: true,
      data: readEnrollmentData // Optionally return the retrieved data
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: `Things exploded (${error.message})`
      };
    } else {
      return {
        success: false
      };
    }
  }
}

// Update operation
export async function  updateEnrollmentInfo(data: Enrollment): Promise<Result>  {
  const { enrollmentId,studentInfoId,classInfoId } = data;
  try {
    const createData = await prisma.enrollment.updateMany({
      where: {
        enrollmentId: enrollmentId // Specify the condition to identify the record to update
      },
      data: {
        studentInfoId:studentInfoId,
        classInfoId:classInfoId
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

// Delete operation
export async function  deleteEnrollmentInfo(data: Enrollment): Promise<Result>  {
  const { enrollmentId,studentInfoId,classInfoId } = data;
  try {
    const createData = await prisma.enrollment.deleteMany({
      where: {
        enrollmentId: enrollmentId // Specify the condition to identify the record to update
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


