"use client";

import { useStudentGradesScore } from "@/lib/store";
import { StudentGrades } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  gradesTemplateId: string;
  currentClassStudentId: string;
}

interface Test extends StudentGrades {}

export default function GradeInputElement({
  gradesTemplateId,
  currentClassStudentId,
  ...props
}: ButtonProps) {
  const studentGradeData = useStudentGradesScore();
  const [rawData, setRawData] = useState<StudentGrades>({
    gradesTemplateId: gradesTemplateId,
    studentCurrentClassesId: currentClassStudentId,
    value: 0,
    id: uuidv4(),
  });

  useEffect(() => {
    const data = studentGradeData.data.find(
      (item) =>
        item.gradesTemplateId === gradesTemplateId &&
        item.studentCurrentClassesId === currentClassStudentId
    );

    if (data) {
      setRawData(data);
    } else {
      studentGradeData.push(rawData);
    }
  }, []);

  useEffect(() => {
    studentGradeData.udpate(rawData);
  }, [rawData.value]);
  return (
    <input
      type="number"
      value={
        studentGradeData.data.find(
          (item) =>
            item.gradesTemplateId === gradesTemplateId &&
            item.studentCurrentClassesId === currentClassStudentId
        )?.value
      }
      {...props}
      onChange={(e) => {
        setRawData({ ...rawData, value: Number(e.target.value) });
      }}
    />
  );
}
