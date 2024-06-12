"use client";

import { useCrateClassModalStore, useModalStore } from "@/lib/store";
import { createCurrentClass, readClassInfo } from "@/lib/util";
import { ClassInfo } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function AddClassModal({ proffId }: { proffId: string }) {
  const [isHidden, setIsHidden] = useState(true);
  const [classId, setClassID] = useState("");
  const [className, setClassName] = useState("Pick a Class");
  const modalStore = useCrateClassModalStore();

  const [classes, setClasses] = useState<ClassInfo[]>([]);
  const [classQuery, setClassQuery] = useState("");

  async function handleOnClick() {
    if (classId === "") {
      alert("Pick a class.");
      return;
    }

    const res = await createCurrentClass(proffId, classId);
    if (res.success) {
      modalStore.Hide();
      window.location.reload();
    }
  }

  useEffect(() => {
    if (classQuery === "") {
      const fetch = async () => {
        const res = await readClassInfo();
        setClasses(res.data);
      };
      fetch();
    }

    setClasses(
      classes.filter((rec) =>
        rec.classCode.toLowerCase().includes(classQuery.toLowerCase())
      )
    );
  }, [classQuery]);

  useEffect(() => {
    const fetch = async () => {
      const res = await readClassInfo();
      setClasses(res.data);
    };
    fetch();
  }, [proffId]);

  return (
    <div className="bg-[rgba(0,0,0,.7)] main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animate-fade-up transition-all">
      <div className="border border-red-50 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 ">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black">Add a class</p>
            <div className="modal-close cursor-pointer z-50"></div>
          </div>

          <div className="label">
            <p className="text-gray-700 label-text">Class Code:</p>
          </div>
          <div className=" w-full h-auto flex items-center">
            <div className="relative group w-40">
              <button
                onClick={() => {
                  setIsHidden(false);
                }}
                id="dropdown-button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                <span className="mr-2">{className}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              {isHidden ? null : (
                <div
                  id="dropdown-menu"
                  className=" absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                >
                  <input
                    id="search-input"
                    className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none"
                    type="search"
                    placeholder="Search Class"
                    autoComplete="off"
                    onChange={(e) => {
                      setClassQuery(e.target.value);
                    }}
                  />

                  <div className="w-full max-h-32 overflow-auto">
                    {classes.length > 0 ? (
                      classes.map((rec) => (
                        <div
                          onClick={(e) => {
                            setClassID(rec.classId);
                            setIsHidden(true);
                            setClassName(rec.classCode);
                          }}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                        >
                          {rec.classCode}{" "}
                        </div>
                      ))
                    ) : (
                      <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">
                        There are no classes
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2 gap-2">
            <button
              onClick={() => {
                modalStore.Hide();
              }}
              className="btn btn-error text-base-100 font-medium tracking-wide"
            >
              Cancel
            </button>
            <button
              onClick={handleOnClick}
              className="btn btn-info text-base-100 font-medium tracking-wide"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClassModal;
