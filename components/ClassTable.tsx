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
  "Actions",
];

interface Props {
  tableData: ClassInfo[];
  proffId: string;
}

export default function ClassTable({ tableData, proffId }: Props) {
  const router = useRouter();
  return (
    <div className="px-8">
      <div className=" py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              {tableHeaders.map((header) => (
                <th className="text-left p-3 px-5">{header}</th>
              ))}
            </tr>
            {tableData.map((rec) => (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{rec.classCode}</td>
                <td className="p-3 px-5">{rec.description}</td>
                <td className="p-3 px-5">{rec.units}</td>
                <td className="p-3 px-5">{rec.schedule}</td>

                <td className="p-3 px-5 flex ">
                  <button
                    onClick={() => {
                      router.push(`/Grades/${rec.classId}/${proffId}`);
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
