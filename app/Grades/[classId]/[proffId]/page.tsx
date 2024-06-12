"use client";

import { IoIosLogOut } from "react-icons/io";
import Image from "next/image";
import Logo from "@/public/Technological_University_of_the_Philippines_Seal.svg.png";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import GradingTemplateModal from "@/components/GradingTemplateModal";

import {
  createGradeTamplate,
  readCurrentClassInfoByProffIdAndClassId,
  readGradeTamplate,
  readMainGradeTamplate,
} from "@/lib/util";
import { ClassInfo, GradesTemplate } from "@prisma/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCreateGradeTemplate } from "@/lib/store";

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
  const [template, setTemplate] = useState<GradesTemplateType[]>([]);
  const isPassed = useCreateGradeTemplate();
  const params = useParams<{ classId: string; ProffId: string }>();
  const [loading, setIsLoading] = useState(true);
  const [classData, setClassData] = useState<ClassInfo | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await readCurrentClassInfoByProffIdAndClassId(
        params.ProffId,
        params.classId
      );

      const res2 = await readMainGradeTamplate(res.data.currentClassId);

      if (res.success) {
        if (res.data.class) {
          setClassData(res.data.class);
          setTemplate(res2.data);
          setCurrentClassId(res.data.currentClassId);
          setIsLoading(false);
        }
      }
    };

    fetch();
  }, []);

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

          {template.length === 0 ? (
            <GradingTemplateModal classId={currentClassId} />
          ) : (
            <section className="grade-transparency p-4">
              <div className="bg-base-100 mt-4 rounded-lg shadow-xl overflow-x-auto">
                <h1 className="uppercase text-2xl text-black p-4 text-center">
                  GRADE TRANSPARENCY
                </h1>
                <table className="table w-full text-black border-collapse border border-black">
                  <thead>
                    <tr>
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
                      {tableHeaderElement(template)
                        .map((rec: any) => rec[1].flat(Infinity))
                        .flat(Infinity)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {findLeafNodes(template).map((rec) => (
                        <td className="border border-black text-center p-0"></td>
                      ))}
                    </tr>
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
