"use client";

import React, { useEffect, useState } from "react";

import { FaGraduationCap } from "react-icons/fa";
import { PiBookFill } from "react-icons/pi";

import NavBar from "@/components/Navbar";
import RegisterModal from "@/components/RegisterStudentModal";
import {
  getProffessorInfoByUserId,
  readCurrentClassInfo,
  readStudentCurrentClassses,
  readStudentInfo,
  readStudentInfoById,
  readUserInfo,
} from "@/lib/util";
import { useCrateClassModalStore, useCurrentUserStore } from "@/lib/store";

import { useSession } from "next-auth/react";
import { ClassInfo, ProfessorInfo, StudentInfo, User } from "@prisma/client";
import ForbiddenCard from "@/components/ForbiddenCard";
import ClassTable from "@/components/ClassTable";
import AddClassModal from "@/components/AddClassModal";
import RegisterStudentModal from "@/components/RegisterStudentModal";
import StudentClassTable from "@/components/StudentClassTable";

const page: React.FC = () => {
  const modalStore = useCrateClassModalStore();

  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const [registered, setRegistered] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [tableData, setTableData] = useState<
    ({
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
    } & { id: string; currentClassId: string; studentInfoStudentId: string })[]
  >([]);
  const [StudentId, setStudentId] = useState<string>("");
  const [StudentInfo, setStudentInfo] = useState<StudentInfo>();
  const userData = useCurrentUserStore((state) => state.userData);

  useEffect(() => {
    const fetch = async () => {};
    fetch();
  }, []);

  useEffect(() => {
    if (session.status !== "authenticated") return;
    const fetch = async () => {
      if (userData.id !== "" && userData.id !== undefined) {
        const res = await readStudentInfoById(userData.id);
        const res2: User = (await readUserInfo(session.data.user?.name || ""))
          .data;
        const res3 = await readStudentCurrentClassses(res?.studentId || "");

        if (res2.accessLevel === "STUDENT") {
          setIsStudent(true);
          setTableData(res3);
          if (res && res !== undefined) {
            setStudentInfo(res);
          }
        }
        setLoading(false);

        if (res) {
          setRegistered(true);
        }
      }
    };

    fetch();
  }, [session]);

  return (
    <div className="min-h-screen bg-base-200">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
          <span className="loading loading-spinner loading-lg"></span>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {isStudent ? (
            registered ? (
              <>
                <NavBar />
                <div className="w-full h-40 p-8">
                  <div className="w-full h-full items-center p-4 drop-shadow-lg rounded-xl bg-base-100 flex">
                    <div className="flex justify-between mx-8 gap-2 w-full">
                      <span className="font-bold text-4xl ">
                        {StudentInfo?.studentName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex px-8 items-center justify-between">
                  <p className="font-bold text-xl drop-shadow-lg ">Classes</p>
                </div>
                {tableData.length > 0 ? (
                  <StudentClassTable tableData={tableData} />
                ) : (
                  <div className="w-full h-96 flex justify-center my-8 font-bold text-3xl text-gray-400 drop-shadow-lg">
                    <h1>There are no classes assigned yet.</h1>
                  </div>
                )}
              </>
            ) : (
              <RegisterStudentModal />
            )
          ) : (
            <ForbiddenCard />
          )}
        </>
      )}
    </div>
  );
};

export default page;
