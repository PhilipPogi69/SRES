"use client";

import { readClassInfo, readCurrentClassInfo } from "@/lib/util";
import { ClassInfo } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const tableHeaders = [
  "Class Code",
  "Description",
  "Units",
  "Schedule",
  "Professor",
  "Actions",
];

interface Props {
  tableData: ({
    currentClass: {
      class: {
        classId: string;
        classCode: string;
        units: number;
        schedule: string;
        description: string;
      };
      professor: {
        profID: string;
        profName: string;
        email: string | null;
        departmentId: string;
        collegeId: string | null;
        userId: string;
      };
    } & {
      currentClassId: string;
      classInfoClassId: string;
      professorInfoProfID: string;
      assignedAt: Date;
      assignedBy: string;
    };
  } & { id: string; currentClassId: string; studentInfoStudentId: string })[];
}

export default function StudentClassTable({ tableData }: Props) {
  const router = useRouter();
  return (
    <div className="px-8">
      <div className=" py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              {tableHeaders.map((header) => (
                <th key={header} className="text-left p-3 px-5">
                  {header}
                </th>
              ))}
            </tr>
            {tableData.map((rec) => (
              <tr
                key={rec.id}
                className="border-b hover:bg-orange-100 bg-gray-100"
              >
                <td className="p-3 px-5">{rec.currentClass.class.classCode}</td>
                <td className="p-3 px-5">
                  {rec.currentClass.class.description}
                </td>
                <td className="p-3 px-5">{rec.currentClass.class.units}</td>
                <td className="p-3 px-5">{rec.currentClass.class.schedule}</td>
                <td className="p-3 px-5">
                  {rec.currentClass.professor.profName}
                </td>

                <td className="p-3 px-5 flex ">
                  <button
                    onClick={() => {
                      router.push(
                        `/Grades/${rec.currentClass.class.classId}/${rec.currentClass.professor.profID}`
                      );
                    }}
                    type="button"
                    className=" bg-blue-500 hover:bg-blue-700 active:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
