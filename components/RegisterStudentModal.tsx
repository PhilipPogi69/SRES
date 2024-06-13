"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import {
  createProfessorInfo,
  createStudentInfo,
  hasEmptyValues,
  readColleges,
  readStudentInfoById,
  readUserInfo,
} from "@/lib/util";
import { v4 as uuidv4 } from "uuid";
import {
  College,
  Department,
  ProfessorInfo,
  StudentInfo,
  User,
} from "@prisma/client";
import ErrorBanner from "./ErrorBanner";
import { useCurrentUserStore } from "@/lib/store";
import { useSession } from "next-auth/react";

interface CollegeType extends College {
  Department: Department[];
}

function RegisterStudentModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const userData = useCurrentUserStore((state) => state.userData);
  const session = useSession();

  const [collegeOptions, setCollegeOptions] = useState<CollegeType[]>([]);
  const [departmentOptions, setDepartmentOptions] = useState<Department[]>([]);

  const [rawData, setRawData] = useState<StudentInfo>({
    studentName: "",
    studentCode: "",
    studentEmail: "",
    dateOfBirth: new Date(Date.now()),
    studentId: "",
    userId: "",
  });
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const currentData = useCurrentUserStore();

  useEffect(() => {
    if (currentData.userData.id !== "") {
      setRawData({ ...rawData, userId: currentData.userData.id || "" });
    }
  }, [currentData]);

  useEffect(() => {
    if (session.status !== "authenticated") return;
    const fetch = async () => {
      if (userData.id !== "" && userData.id !== undefined) {
        const res2: User = (await readUserInfo(session.data.user?.name || ""))
          .data;
        if (res2) {
          setRawData({
            dateOfBirth: res2.dateOfBirth,
            studentEmail: "",
            studentCode: res2.username,
            studentId: uuidv4(),
            userId: res2.id,
            studentName: "",
          });
        }
      }
    };
    fetch();
  }, [session]);

  useEffect(() => {
    setError({
      isError: false,
      errorMessage: "",
    });
  }, [rawData]);

  useEffect(() => {
    const fetch = async () => {
      const res = await readColleges();
      setCollegeOptions(res.data);
    };
    fetch();
  }, []);

  async function handleOnClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const hasEmpty = await hasEmptyValues(rawData);
    if (hasEmpty) {
      setError({ errorMessage: "There are some empty fields.", isError: true });
      return;
    }
    const res = await createStudentInfo(rawData);
    if (res) {
      window.location.reload();
    } else {
      setError({ errorMessage: "There was an error." || "", isError: true });
    }
  }

  return (
    <div className=" bg-[rgba(0,0,0,.7)] main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animate-fade-up animate-ease-in-out">
      <div className="border border-red-50 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black">
              Student Registration Form
            </p>
          </div>

          <form action="" className="form my-6 flex flex-col gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your full name?</span>
              </div>
              <input
                onChange={(e) => {
                  setRawData({ ...rawData, studentName: e.target.value });
                }}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your email?</span>
              </div>
              <input
                onChange={(e) => {
                  setRawData({ ...rawData, studentEmail: e.target.value });
                }}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <div className="flex justify-end pt-2">
              <button onClick={handleOnClick} className="btn btn-red">
                Confirm
              </button>
            </div>
            {error.isError ? (
              <ErrorBanner
                isError={error.isError}
                errorMessage={error.errorMessage}
              />
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterStudentModal;
