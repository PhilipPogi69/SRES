"use client";

import React, { useEffect, useState } from "react";

import { FaGraduationCap } from "react-icons/fa";
import { PiBookFill } from "react-icons/pi";

import NavBar from "@/components/Navbar";
import RegisterModal from "@/components/RegisterModal";
import {
  getProffessorInfoByUserId,
  readCurrentClassInfo,
  readUserInfo,
} from "@/lib/util";
import { useCrateClassModalStore, useCurrentUserStore } from "@/lib/store";

import { useSession } from "next-auth/react";
import { ClassInfo, User } from "@prisma/client";
import ForbiddenCard from "@/components/ForbiddenCard";
import ClassTable from "@/components/ClassTable";
import AddClassModal from "@/components/AddClassModal";

const page: React.FC = () => {
  const modalStore = useCrateClassModalStore();

  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const [registered, setRegistered] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [tableData, setTableData] = useState<ClassInfo[]>([]);
  const [proffId, setProffId] = useState<string>("");
  const userData = useCurrentUserStore((state) => state.userData);

  useEffect(() => {
    const fetch = async () => {};
    fetch();
  }, []);

  useEffect(() => {
    if (session.status !== "authenticated") return;
    const fetch = async () => {
      if (userData.id !== "" && userData.id !== undefined) {
        const res = await getProffessorInfoByUserId(userData.id);
        const res2: User = (await readUserInfo(session.data.user?.name || ""))
          .data;
        const res3 = await readCurrentClassInfo(res?.profID || "");

        if (res2.accessLevel === "INSTRUCTOR") {
          setIsInstructor(true);
          setProffId(res?.profID || "");
          setTableData(res3.data);
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
          {isInstructor ? (
            registered ? (
              <>
                <NavBar />
                <div className="w-full h-40 p-8">
                  <div className="w-full h-full items-center p-4 drop-shadow-lg rounded-xl bg-base-100 flex">
                    <div className="flex justify-between mx-8 gap-2 w-full">
                      <span className="font-bold text-4xl ">
                        Jhon Philip Guiang
                      </span>
                      <div className="flex items-center gap-2">
                        <FaGraduationCap size={40} />

                        <span className="font-semibold text-xl">
                          College of Science
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <PiBookFill size={40} className="" />

                        <span className="font-semibold text-xl">
                          Physics Department
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex px-8 items-center justify-between">
                  <p className="font-bold text-xl drop-shadow-lg ">Classes</p>
                  <button
                    onClick={() => {
                      modalStore.Show();
                    }}
                    className="btn drop-shadow-2xl btn-info"
                  >
                    + Add Class
                  </button>

                  {modalStore.isHidden ? null : (
                    <AddClassModal proffId={proffId} />
                  )}
                </div>
                {tableData.length > 0 ? (
                  <ClassTable tableData={tableData} proffId={proffId} />
                ) : (
                  <div className="w-full h-96 flex justify-center my-8 font-bold text-3xl text-gray-400 drop-shadow-lg">
                    <h1>There are no classes assigned yet.</h1>
                  </div>
                )}
              </>
            ) : (
              <RegisterModal />
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
