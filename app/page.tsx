"use client";

import Navbar from "@/components/Navbar";
import { useCurrentUserStore } from "@/lib/store";
import {
  collegeAndDepartmentIntitiation,
  createClassesFromFile,
  readUserInfo,
} from "@/lib/util";
import { ClassInfo, User } from "@prisma/client";
import { Workbook } from "exceljs";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const { status, data } = useSession();
  const currentData = useCurrentUserStore();
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      await collegeAndDepartmentIntitiation();
    };

    fetch();
  }, []);

  useEffect(() => {
    if (data) {
      const fetch = async () => {
        const user = await readUserInfo(data.user?.name || "");
        if (user) {
          const data: User = user.data;
          currentData.updateData(user.data);
          if (data.accessLevel === "STUDENT") {
            router.push("/Dashboard/Student");
          } else if (data.accessLevel === "INSTRUCTOR") {
            router.push("/Dashboard/Professor");
          }
        }
      };

      fetch();
    }
  }, [data]);
  return (
    <div>
      <Navbar />

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Welcome {currentData.userData.username}
            </h1>
            <p className="py-6 w-full">
              Welcome to SRES, we streamline the process of student record
              evaluation, ensuring both students and professors have easy access
              to vital academic information. Whether you're here to track your
              progress or to assess your students' achievements, our platform is
              designed to support your academic journey with efficiency and
              clarity.
            </p>
            <div className="flex gap-4 my-2 justify-center">
              <button
                onClick={() => {
                  router.push("/Dashboard/Professor");
                }}
                className="btn btn-accent"
              >
                I'm a Professor
              </button>

              <button className="btn btn-secondary text-base-100">
                I'm a Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
