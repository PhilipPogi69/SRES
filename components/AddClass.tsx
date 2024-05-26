"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { GradesTemplate, ProfessorInfo } from "@prisma/client";

const classId = uuidv4();

function TemplateField({
  rawArray,
  setRawArray,
}: {
  setRawArray: React.Dispatch<React.SetStateAction<Partial<GradesTemplate>[]>>;
  rawArray: Partial<GradesTemplate>[];
}) {
  const [rawData, setRawData] = useState({
    classInfoId: classId,
    gradeId: null,
    id: uuidv4(),
    percentage: 0,
    title: "",
  });

  useEffect(() => {
    setRawArray([...rawArray, rawData]);
  }, []);

  useEffect(() => {
    console.log(rawArray);
  }, [rawData]);

  return (
    <div className="flex gap-2">
      <div className="flex items-center">
        <label className="label label-text">Title: </label>
        <input
          className="input input-xs"
          type="text"
          onChange={(e) => {
            setRawData({ ...rawData, title: e.target.value });
          }}
        />
      </div>
      <div className="flex items-center">
        <label className="label label-text">Percentage: </label>
        <input
          className="input input-xs"
          type="number"
          onChange={(e) => {
            setRawData({ ...rawData, percentage: e.target.valueAsNumber });
          }}
        />
      </div>
      <button className="btn btn-primary btn-sm">+ Add Sub Category</button>
    </div>
  );
}

export default function AddClass({
  proffInfo,
}: {
  proffInfo: ProfessorInfo[];
}) {
  const [rawArray, setRawArray] = useState<Partial<GradesTemplate>[]>([]);
  const [templateElements, setTemplateElements] = useState<React.JSX.Element[]>(
    []
  );

  useEffect(() => {
    console.log(rawArray);
  }, [rawArray]);
  return (
    <div>
      <div className="flex items-center">
        <label className="label label-text">Class Name: </label>
        <input className="input input-xs" type="text" />
      </div>
      <div className="flex items-center">
        <label className="label label-text">Class Code: </label>
        <input className="input input-xs" type="text" />
      </div>
      <div className="flex items-center">
        <label className="label label-text">Schedule: </label>
        <input className="input input-xs" type="text" />
      </div>
      <div className="flex items-center">
        <label className="label label-text">Professor: </label>
        <select className="select select-bordered select-xs w-full max-w-xs">
          {proffInfo.map((rec) => {
            return (
              <option key={uuidv4()} value={rec.profID}>
                {rec.profName}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <p className="m-4">Grading Template</p>
      </div>
      <button
        onClick={(e) => {
          setTemplateElements([
            ...templateElements,
            <TemplateField
              key={uuidv4()}
              setRawArray={setRawArray}
              rawArray={rawArray}
            />,
          ]);
        }}
        className="btn btn-primary btn-sm"
      >
        + Add
      </button>
      {templateElements}
      <button
        onClick={(e) => {
          setTemplateElements(
            templateElements.slice(0, templateElements.length - 1)
          );
        }}
        className="btn btn-primary btn-sm"
      >
        - Remove
      </button>
    </div>
  );
}
