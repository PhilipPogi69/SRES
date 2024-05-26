"use client";
import { v4 as uuidv4 } from "uuid";

const gradeTemplate: GradesTemplate[] = [
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: null,
    id: "1",
    percentage: 30,
    title: "quizes",
  },
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: "1",
    id: "2",
    percentage: 50,
    title: "quiz 1",
  },
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: "1",
    id: "3",
    percentage: 50,
    title: "quiz 2",
  },
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: null,
    id: "4",
    percentage: 70,
    title: "finals",
  },
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: "2",
    id: "5",
    percentage: 50,
    title: "part 1",
  },
  {
    classInfoId: "12022b3f-769b-4bbb-823a-4a553125cfc4",
    gradeId: "2",
    id: "6",
    percentage: 50,
    title: "part 2",
  },
];

import {
  createClassInfo,
  createGradeTamplate,
  createProfessorInfo,
  createStudentInfo,
  generateStudentGrades,
  readGradeTamplate,
} from "@/lib/util";
import React from "react";
import { GradesTemplate } from "@prisma/client";

export default function page() {
  return (
    <div>
      <button
        onClick={() => {
          async function create() {
            const test = await createStudentInfo({
              studentEmail: "alex.smith@example.com",
              studentName: "Alex Smith",
              studentId: "1",
            });
            console.log("Student :" + test.success);
          }
          create();
        }}
        className="btn btn-xs btn-neutral"
      >
        Create Student
      </button>

      <button
        className="btn btn-xs btn-neutral"
        onClick={() => {
          async function create() {
            const test = await createProfessorInfo({
              department: "COS",
              email: "email.com",
              profID: "123",
              profName: "Joe Mama",
            });
            console.log("Professor :" + test.success);
          }
          create();
        }}
      >
        Create Professor
      </button>

      <button
        onClick={() => {
          async function create() {
            const test = await createClassInfo({
              professorInfoId: "18bd7d21-a617-49ff-abf6-b53393460176",
              classCode: "123",
              classId: "1",
              schedule: "Friday 10am-10pm",
            });
            console.log("Class :" + test.success + test.message);
          }
          create();
        }}
        className="btn btn-xs btn-neutral"
      >
        Create
      </button>

      <button
        onClick={() => {
          async function create() {
            const test = await createGradeTamplate(gradeTemplate);
            console.log("Grades :" + test.success + test.message);
          }
          create();
        }}
        className="btn btn-xs btn-neutral"
      >
        Create Grade
      </button>

      <button
        className="btn btn-xs btn-neutral"
        onClick={() => {
          async function create() {
            const test = await readGradeTamplate();
            console.log(test.data);
          }
          create();
        }}
      >
        see grades
      </button>
      <button
        className="btn btn-xs btn-neutral"
        onClick={() => {
          async function create() {
            const test = await generateStudentGrades(
              "291ed2ec-d118-4312-b65e-faffee52d701",
              "12022b3f-769b-4bbb-823a-4a553125cfc4"
            );
            console.log("Success");
          }
          create();
        }}
      >
        generate Student Grades
      </button>
    </div>
  );
}
