"use client";

import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { FaPercentage } from "react-icons/fa";
import { createProfessorInfo, hasEmptyValues, readColleges } from "@/lib/util";
import { v4 as uuidv4 } from "uuid";
import { College, Department, ProfessorInfo } from "@prisma/client";
import ErrorBanner from "./ErrorBanner";
import { useCreateGradeTemplate, useCurrentUserStore } from "@/lib/store";
import GradeInput from "./GradeInput";

interface CollegeType extends College {
  Department: Department[];
}

function GradingTemplateModal({ classId }: { classId: string }) {
  const isPassed = useCreateGradeTemplate();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [counter, setCounter] = useState(0);
  const [collegeOptions, setCollegeOptions] = useState<CollegeType[]>([]);
  const [departmentOptions, setDepartmentOptions] = useState<Department[]>([]);

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const currentData = useCurrentUserStore();

  async function handleOnClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    isPassed.setPassed(true);
  }
  return (
    <div className=" bg-[rgba(0,0,0,.7)] main-modal fixed h-100 inset-0 z-50 overflow-auto flex justify-center items-center animate-fade-up animate-ease-in-out p-8">
      <div className="border border-red-50 modal-container overflow-y-auto h-full bg-white w-11/12 md:max-w-screen mx-auto rounded shadow-lg z-50 ">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black">
              Add a grade template
            </p>
          </div>

          <form action="" className="form my-6 flex flex-col gap-2">
            <label className="form-control w-full max-w-xs"></label>
            {counter !== 0
              ? Array(counter).fill(
                  <GradeInput classInfoId={classId} gradeId={null} />
                )
              : null}
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  setCounter((state) => state + 1);
                }}
                className="btn btn-sm "
                type="button"
              >
                + Add Category
              </button>
              {counter > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    setCounter((state) => state - 1);
                  }}
                  className="btn btn-sm btn-error text-base-100 "
                >
                  delete
                </button>
              ) : null}
            </div>
            <div className="flex justify-end pt-8">
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

export default GradingTemplateModal;
