const { createUserInfo, createClassInfo, createProfessorInfo, createStudentInfo, createClassroomInfo, createEnrollmentInfo } = require('./util'); // No need for .ts extension

async function main() {
  // Create user
  await createUserInfo({
    email: 'example@example.com',
    username: 'example_user',
    password: 'password123',
    accessLevel: 'admin' // or whatever access level you want to assign
  });

  // Create class
  await createClassInfo({
    classCode: 'CS101',
    schedule: 'Monday 9am-11am'
  });

  // Create professor
  await createProfessorInfo({
    profName: 'John Doe',
    department: 'Computer Science',
    email: 'john.doe@example.com'
  });

  // Create student
  await createStudentInfo({
    studentName: 'Alice Smith',
    studentEmail: 'alice.smith@example.com'
  });

  // Create classroom
  await createClassroomInfo({
    roomNumber: '101'
  });

  // Create enrollment
  await createEnrollmentInfo({
    studentInfoId: /* provide studentInfoId */,
    classInfoId: /* provide classInfoId */
  });
}

main().catch(error => {
  console.error('Error:', error);
});
