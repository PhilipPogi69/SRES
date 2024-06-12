"use client";

import { useModalStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import React from "react";

function UniversalModal({
  header,
  content,
  redirectUrl,
}: {
  header: string;
  content: string;
  redirectUrl?: string;
}) {
  const makeInvinsible = useModalStore((state) => state.makeInvinsible);
  const router = useRouter();
  async function handleOnClick() {
    if (redirectUrl === undefined) {
      makeInvinsible();
      return;
    }

    if (redirectUrl !== undefined || redirectUrl || redirectUrl !== "") {
      router.push(`${redirectUrl}`);
    }
    makeInvinsible();
  }

  return (
    <div className="bg-[rgba(0,0,0,.7)] main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
      <div className="border border-red-50 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold text-black">{header}</p>
            <div className="modal-close cursor-pointer z-50"></div>
          </div>

          <div className="my-5">
            <p className="text-gray-700">{content}</p>
          </div>

          <div className="flex justify-end pt-2">
            <button onClick={handleOnClick} className="btn btn-red">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversalModal;
