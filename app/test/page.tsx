"use client";
import { v4 as uuidv4 } from "uuid";

const gradeTemplate: GradesTemplate[] = [
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
    gradeId: null,
    id: "1",
    percentage: 30,
    title: "quizes",
  },
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
    gradeId: "1",
    id: "2",
    percentage: 50,
    title: "quiz 1",
  },
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
    gradeId: "1",
    id: "3",
    percentage: 50,
    title: "quiz 2",
  },
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
    gradeId: null,
    id: "4",
    percentage: 70,
    title: "finals",
  },
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
    gradeId: "2",
    id: "5",
    percentage: 50,
    title: "part 1",
  },
  {
    classInfoId: "f7b8ea0c-b8ee-4b89-9acc-f20998cd26e9",
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
  generateStudentGrades,
  readGradeTamplate,
} from "@/lib/util";
import React, { useEffect, useState } from "react";
import { GradesTemplate } from "@prisma/client";

export default function page() {
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    console.log(temp);
  }, [temp]);
  return (
    <div>
      <button
        onClick={() => {
          async function create() {}
          create();
        }}
        className="btn btn-xs btn-neutral"
      >
        Create Student
      </button>

      <button
        className="btn btn-xs btn-neutral"
        onClick={() => {
          async function create() {}
          create();
        }}
      >
        Create Professor
      </button>

      <button
        onClick={() => {
          async function create() {}
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
            setTemp(test.data);
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

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              {temp ? temp.map((data: any) => <th>{data.title}</th>) : null}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>
                <input type="text" className="input-sx " />
              </td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
