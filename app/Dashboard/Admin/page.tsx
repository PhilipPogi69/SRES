"use client";

import { ClassInfo, StudentInfo, User } from "@prisma/client";
import { Workbook } from "exceljs";
import { v4 as uuidv4 } from "uuid";

import React, { useEffect, useState } from "react";
import {
  createClassesFromFile,
  generateStudentsInfoAndAccounts,
} from "@/lib/util";

interface StudentInfoType {
  info: StudentInfo;
  user: User;
}

export default function page() {
  const [file, setFile] = useState<FileList>();
  const [dataArray, setDataArray] = useState<ClassInfo[]>([]);

  const [studentFile, setStudentFile] = useState<FileList>();
  const [studentInfoArray, setStudentInfoArray] = useState<StudentInfoType[]>(
    []
  );

  function handleClick() {
    const f: FileList = file || new FileList();
    const wb = new Workbook();
    const reader = new FileReader();

    const func = async () => {
      reader.readAsArrayBuffer(f[0]);
      reader.onload = async () => {
        const buffer = reader.result as Buffer;
        const workbook = await wb.xlsx.load(buffer);
        workbook.eachSheet((sheet, id) => {
          let arr: ClassInfo[] = [];
          sheet.eachRow((row, index) => {
            if (index !== 1) {
              const data: ClassInfo = {
                classCode: row.getCell(1).toString(),
                classId: uuidv4(),
                schedule: row.getCell(4).toString(),
                units: Number(row.getCell(3)),
                description: row.getCell(2).toString(),
              };
              arr.push(data);
            }
          });
          setDataArray(arr);
        });
      };
    };

    func();
  }

  function handleStudentInfo() {
    const f: FileList = studentFile || new FileList();
    const wb = new Workbook();
    const reader = new FileReader();

    const func = async () => {
      reader.readAsArrayBuffer(f[0]);
      reader.onload = async () => {
        const buffer = reader.result as Buffer;
        const workbook = await wb.xlsx.load(buffer);
        workbook.eachSheet((sheet, id) => {
          let arr: StudentInfoType[] = [];
          sheet.eachRow((row, index) => {
            if (index !== 1) {
              const studentInfo: StudentInfo = {
                dateOfBirth: new Date(row.getCell(3).toString()),
                studentCode: row.getCell(1).toString(),
                studentEmail: row.getCell(4).toString(),
                studentName: row.getCell(2).toString(),
                studentId: uuidv4(),
                userId: "",
              };

              const userData: User = {
                dateOfBirth: new Date(row.getCell(3).toString()),
                email: row.getCell(4).toString(),
                accessLevel: "STUDENT",
                password: row.getCell(5).toString(),
                username: row.getCell(1).toString(),
                id: uuidv4(),
              };

              arr.push({ info: studentInfo, user: userData });
            }
          });
          setStudentInfoArray(arr);
        });
      };
    };

    func();
  }

  useEffect(() => {
    if (dataArray.length !== 0) {
      const fetch = async () => {
        const res = await createClassesFromFile(dataArray);
        if (!res.success) {
          console.log(res.message);
        }
      };

      fetch();
    }
  }, [dataArray]);

  useEffect(() => {
    if (studentInfoArray.length !== 0) {
      const fetch = async () => {
        const res = await generateStudentsInfoAndAccounts(studentInfoArray);
        console.log(res);
      };

      fetch();
    }
  }, [studentInfoArray]);

  return (
    <div>
      <div>
        <p>Class</p>
        <input
          type="file"
          className="file-input w-full max-w-xs"
          onChange={(e) => {
            setFile(e.target.files || new FileList());
          }}
        />
        <button
          className="btn btn-info "
          onClick={(e) => {
            handleClick();
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <p>Student</p>
        <input
          type="file"
          className="file-input w-full max-w-xs"
          onChange={(e) => {
            setStudentFile(e.target.files || new FileList());
          }}
        />
        <button
          className="btn btn-info "
          onClick={(e) => {
            handleStudentInfo();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
