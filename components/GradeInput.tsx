"use client";
import { useCreateGradeTemplate } from "@/lib/store";
import { GradesTemplate } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  gradeId: string | null;
  classInfoId: string;
}

export default function GradeInput({ gradeId, classInfoId }: Props) {
  const isPassed = useCreateGradeTemplate();

  const [counter, setCounter] = useState(0);
  const [rawData, setRawData] = useState<GradesTemplate>({
    id: uuidv4(),
    percentage: 0,
    title: "",
    currentClassId: classInfoId,
    classInfoClassId: "",
    gradeId: gradeId,
  });
  const [elements, setElements] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    if (counter <= 0) {
      setElements([]);
      return;
    }
    const ArrElements =
      counter !== -1
        ? Array(counter).fill(
            <GradeInput
              classInfoId={rawData.currentClassId || ""}
              gradeId={rawData.id || ""}
            />
          )
        : [];
    setElements(ArrElements);
  }, [counter, rawData]);

  useEffect(() => {
    if (isPassed.isPassed) {
      isPassed.addItem(rawData);
    }
  }, [isPassed.isPassed]);

  return (
    <div className="flex gap-2 my-8 animate-jump-in transition-all">
      <div className="">
        <div className="label">
          <span className="label-text">Description</span>
        </div>
        <div className="flex gap-2">
          <input
            onChange={(e) => {
              setRawData({ ...rawData, title: e.target.value });
            }}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div>
        <div className="label">
          <span className="label-text">Percentage</span>
        </div>
        <div className="flex gap-2 relative">
          <input
            onChange={(e) => {
              setRawData({ ...rawData, percentage: e.target.valueAsNumber });
            }}
            type="number"
            placeholder="i.e. 10%"
            className="input input-bordered w-full max-w-xs"
            min={1}
            max={100}
            step={0.01}
          />
          <button
            type="button"
            onClick={() => {
              setCounter((state) => state + 1);
            }}
            className="btn btn-xs absolute bottom-[-32px]"
          >
            + sub category
          </button>
          {counter > 0 ? (
            <button
              type="button"
              onClick={() => {
                setCounter((state) => state - 1);
              }}
              className="btn btn-xs btn-error text-base-100 absolute bottom-[-32px] left-32"
            >
              delete
            </button>
          ) : null}
        </div>
        {counter !== 0 ? elements : null}
      </div>
    </div>
  );
}
