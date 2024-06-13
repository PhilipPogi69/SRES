"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { createProfessorInfo, hasEmptyValues, readColleges } from "@/lib/util";
import { v4 as uuidv4 } from "uuid";
import { College, Department, ProfessorInfo } from "@prisma/client";
import ErrorBanner from "./ErrorBanner";
import { useCurrentUserStore } from "@/lib/store";

interface CollegeType extends College {
  Department: Department[];
}

function RegisterModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [collegeOptions, setCollegeOptions] = useState<CollegeType[]>([]);
  const [departmentOptions, setDepartmentOptions] = useState<Department[]>([]);
  const [rawData, setRawData] = useState<ProfessorInfo>({
    profName: "",
    collegeId: "",
    departmentId: "",
    email: "",
    profID: uuidv4(),
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
    if (rawData.collegeId === "") {
      setDepartmentOptions([]);
      return;
    }
    const college = collegeOptions.find(
      (college) => college.collegeId === rawData.collegeId
    );
    if (college) {
      setDepartmentOptions(college.Department);
    }
  }, [rawData.collegeId]);

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
    const res = await createProfessorInfo(rawData);
    if (res.success) {
      window.location.reload();
    } else {
      setError({ errorMessage: res.message || "", isError: true });
    }
  }

  return (
    <div className=" bg-[rgba(0,0,0,.7)] main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animate-fade-up animate-ease-in-out">
      <div className="border border-red-50 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black">
              Proffessor Registration Form
            </p>
          </div>

          <form action="" className="form my-6 flex flex-col gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your full name?</span>
              </div>
              <input
                onChange={(e) => {
                  setRawData({ ...rawData, profName: e.target.value });
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
                  setRawData({ ...rawData, email: e.target.value });
                }}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your college?</span>
              </div>
              <select
                onChange={(e) => {
                  setRawData({ ...rawData, collegeId: e.currentTarget.value });
                }}
                className="select w-full max-w-xs"
              >
                <option value="" selected>
                  Pick your college
                </option>
                {collegeOptions.length > 0
                  ? collegeOptions.map((college) => (
                      <option key={college.collegeId} value={college.collegeId}>
                        {college.college}
                      </option>
                    ))
                  : null}
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your department?</span>
              </div>
              <select
                onChange={(e) => {
                  setRawData({
                    ...rawData,
                    departmentId: e.currentTarget.value,
                  });
                }}
                className="select w-full max-w-xs"
              >
                <option value="" selected defaultChecked>
                  Pick your department
                </option>
                {departmentOptions.length > 0
                  ? departmentOptions.map((dept) => (
                      <option key={dept.departmentId} value={dept.departmentId}>
                        {dept.department}
                      </option>
                    ))
                  : null}
              </select>
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

export default RegisterModal;
