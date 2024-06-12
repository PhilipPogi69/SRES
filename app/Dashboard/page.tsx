"use client";

import React, { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";
import Logo from "@/public/Technological_University_of_the_Philippines_Seal.svg.png";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import { useCurrentUserStore } from "@/lib/store";

const page: React.FC = () => {
  return (
    <div data-theme="light" className="min-h-screen bg-base-200">
      <NavBar />
      <section className="grade-transparency p-4">
        <div className="bg-base-100 mt-4 rounded-lg shadow-xl overflow-x-auto">
          <h1 className="uppercase text-2xl text-black p-4 text-center">
            GRADE TRANSPARENCY
          </h1>
          <table className="table w-full text-black border-collapse border border-black">
            <thead>
              <tr>
                <th
                  colSpan={16}
                  className="bg-error text-white border border-black text-center"
                >
                  Attendance
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Recitation
                  <br />
                  10%
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Assignment
                  <br />
                  10%
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Reporting & Attitude
                  <br />
                  20%
                </th>
                <th
                  colSpan={3}
                  className="bg-error text-white border border-black text-center"
                >
                  Quiz
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Total Class Standing
                  <br />
                  60%
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Midterm 1-70
                  <br />
                  20%
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Finals 1-100
                  <br />
                  20%
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Total
                  <br />
                  Grade
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Remarks
                </th>
              </tr>
              <tr>
                {[...Array(16)].map((_, i) => (
                  <th
                    key={i}
                    className="bg-error text-white border border-black text-center"
                  >
                    {i + 1}
                  </th>
                ))}
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center">
                  Q1-
                  <br />
                  20
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Q2-
                  <br />
                  10
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Ave.
                  <br />
                  10%
                </th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
                <th className="bg-error text-white border border-black text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {[...Array(16)].map((_, i) => (
                  <td
                    key={i}
                    contentEditable
                    className="border border-black p-2 text-center"
                  ></td>
                ))}
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default page;
