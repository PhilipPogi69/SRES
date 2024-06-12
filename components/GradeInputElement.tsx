"use client";

import { StudentGrades } from "@prisma/client";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  gradesTemplateId: string;
  studentInfoId: string;
}

interface Test extends StudentGrades {}

export default function GradeInputElement({ ...props }: ButtonProps) {

  return <input {...props} />;
}
