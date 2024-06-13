"use client";

import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";
import Logo from "@/public/Technological_University_of_the_Philippines_Seal.svg.png";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import GradingTemplateModal from "@/components/GradingTemplateModal";

import {
  createGradeTamplate,
  createStudentGrades,
  readCurrentClassInfoByProffIdAndClassId,
  readCurrentStudentClass,
  readGradeTamplate,
  readMainGradeTamplate,
  readStudentGradesById,
  readUserInfo,
} from "@/lib/util";
import {
  ACCESSLEVEL,
  ClassInfo,
  GradesTemplate,
  StudentGrades,
  User,
} from "@prisma/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  useCrateClassModalStore,
  useCreateGradeTemplate,
  useStudentGradesScore,
} from "@/lib/store";
import AddStudentModal from "@/components/AddStudentModal";
import GradeInputElement from "@/components/GradeInputElement";
import { useSession } from "next-auth/react";

interface GradesTemplateType extends GradesTemplate {
  Grades: GradesTemplateType[];
}

function findLeafNodes(grades: GradesTemplateType[]): GradesTemplateType[] {
  const leafNodes: GradesTemplateType[] = [];

  function recurse(nodes: GradesTemplateType[]): void {
    for (const node of nodes) {
      if (!node.Grades || node.Grades.length === 0) {
        leafNodes.push(node);
      } else {
        recurse(node.Grades);
      }
    }
  }

  recurse(grades);
  return leafNodes;
}

interface GradesHeaderProps {
  grades: GradesTemplateType[];
  depth: number;
}

export default function page() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentClassId, setCurrentClassId] = useState("");
  const modalStore = useCrateClassModalStore();
  const studentGradeData = useStudentGradesScore();

  const [students, setStudents] = useState<
    | ({
        student: {
          studentId: string;
          studentName: string;
          studentCode: string;
          studentEmail: string;
          dateOfBirth: Date;
          userId: string;
        };
      } & {
        id: string;
        currentClassId: string;
        studentInfoStudentId: string;
      })[]
  >([]);
  const [template, setTemplate] = useState<GradesTemplateType[]>([]);
  const isPassed = useCreateGradeTemplate();
  const params = useParams<{ classId: string; ProffId: string }>();
  const [loading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const session = useSession();
  const [getAllGrades, setGetAllGrades] = useState<StudentGrades[]>([]);
  const [classData, setClassData] = useState<ClassInfo | null>(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await readCurrentClassInfoByProffIdAndClassId(
        params.ProffId,
        params.classId
      );

      const res2 = await readMainGradeTamplate(res.data.currentClassId);

      const res3 =
        (await readCurrentStudentClass(res.data.currentClassId)) || [];
      const res4 = await Promise.all(
        res3.map(async (record) => {
          const response = await readStudentGradesById(record.id);
          return response;
        })
      );

      if (res.success) {
        if (res.data.class) {
          setGetAllGrades(res4.flat());
          setStudents(res3 || []);
          setClassData(res.data.class);
          setTemplate(res2.data);
          setCurrentClassId(res.data.currentClassId);
        }
      }

      if (session.status === "authenticated") {
        const res5: User = (await readUserInfo(session.data?.user?.name || ""))
          .data;
        setRole(res5.accessLevel);
        setIsLoading(false);
      }
    };

    fetch();
  }, [session]);

  useEffect(() => {
    if (getAllGrades.length !== 0) {
      studentGradeData.replace(getAllGrades);
    }
  }, [getAllGrades]);

  useEffect(() => {
    if (isPassed.data.length > 0) {
      const post = async () => {
        const res = await createGradeTamplate(isPassed.data);
        if (res.success) {
          window.location.reload();
        }
      };
      post();
    }
  }, [isPassed.data]);

  async function handleSave() {
    if (studentGradeData.data.length === 0) return;
    const res = await createStudentGrades(studentGradeData.data);
    if (res) {
      window.location.reload();
    } else {
      console.log(res);
    }
  }

  function tableHeaderElement(template: GradesTemplateType[]): any {
    if (template.length === 0) return [];
    return template
      .sort((a, b) => {
        const isTotalA =
          !isNaN(+a.title) ||
          a.title.toLowerCase().includes("total grade") ||
          a.title.toLowerCase().includes("final grade");
        const isTotalB =
          !isNaN(+b.title) ||
          b.title.toLowerCase().includes("total grade") ||
          a.title.toLowerCase().includes("final grade");

        if (!isTotalA && !isTotalB) {
          return a.title.localeCompare(b.title);
        } else if (!isTotalA) {
          return -1; // Place item without total before item with total
        } else if (!isTotalB) {
          return 1; // Place item with total after item without total
        } else {
          return Number(a.title) - Number(b.title);
        }
      })
      .map((rec: any) => {
        let gradeElements = [];
        if (rec.Grades.length > 0) {
          gradeElements = tableHeaderElement(rec.Grades);
        } else if (rec.gradeId === null) {
          gradeElements = [
            <th
              colSpan={rec.Grades.length}
              className="bg-error text-base-100 border text-center border-black"
            ></th>,
          ];
        }

        if (rec.gradeId === null) {
          return [
            <th
              colSpan={rec.Grades.length}
              className="bg-error text-base-100 border text-center border-black"
            >
              {rec.title}
            </th>,
            gradeElements,
          ];
        } else {
          return (
            <th
              colSpan={rec.Grades.length}
              className="bg-error text-base-100 border text-center border-black"
            >
              {rec.title}
            </th>
          );
        }
      });
  }

  return (
    <>
      {loading && !classData ? null : (
        <div data-theme="light" className="min-h-screen bg-base-200">
          <NavBar />
          {modalStore.isHidden ? null : (
            <AddStudentModal
              currentClassId={currentClassId}
              proffId={params.ProffId}
            />
          )}

          {template.length === 0 ? (
            <GradingTemplateModal classId={currentClassId} />
          ) : (
            <section className="grade-transparency p-4">
              {role === ACCESSLEVEL.INSTRUCTOR || role === ACCESSLEVEL.ADMIN ? (
                <div className="w-full flex justify-between">
                  <button
                    onClick={(e) => {
                      modalStore.Show();
                    }}
                    className="btn shadow-xl transition-all"
                  >
                    + Add Student
                  </button>
                  {isEditing ? (
                    <button
                      onClick={(e) => {
                        setIsEditing(false);
                        handleSave();
                      }}
                      className="btn shadow-xl transition-all bg-success text-base-100 "
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setIsEditing(true);
                      }}
                      className="btn shadow-xl transition-all bg-info text-base-100 "
                    >
                      Edit
                    </button>
                  )}
                </div>
              ) : null}

              <div className="bg-base-100 mt-4 rounded-lg shadow-xl overflow-x-auto px-4">
                <h1 className="uppercase text-2xl text-black p-4 text-center">
                  GRADE TRANSPARENCY
                </h1>
                <table className="table w-full text-black border-collapse border border-black">
                  <thead>
                    <tr>
                      <th className="bg-error text-base-100 border text-center border-black">
                        Student Code
                      </th>
                      {template.map((rec) => (
                        <th
                          colSpan={rec.Grades.length}
                          className="bg-error text-base-100 border text-center border-black"
                        >
                          {rec.title}
                        </th>
                      ))}
                    </tr>
                    <tr>
                      <th className="bg-error text-base-100 border text-center border-black"></th>
                      {tableHeaderElement(template)
                        .map((rec: any) => rec[1].flat(Infinity))
                        .flat(Infinity)}
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr>
                        <td className="w-auto border border-black">
                          {student.student.studentCode}
                        </td>
                        {findLeafNodes(template).map((rec) => {
                          const data = studentGradeData.data.find(
                            (x) =>
                              x.gradesTemplateId === rec.id &&
                              x.studentCurrentClassesId === student.id
                          );

                          const studentGrade = getAllGrades.find(
                            (x) =>
                              x.gradesTemplateId === rec.id &&
                              x.studentCurrentClassesId === student.id
                          );

                          return isEditing ? (
                            <td className="border min-w-8 border-black text-center p-0">
                              <GradeInputElement
                                className=" w-full h-8 input input-sm"
                                gradesTemplateId={rec.id}
                                currentClassStudentId={student.id}
                              />
                            </td>
                          ) : (
                            <td className="border min-w-8 border-black text-center p-0">
                              <span>{studentGrade?.value}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
}
