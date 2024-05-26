import AddClass from "@/components/AddClass";
import { readClassInfo, readProfessorInfo } from "@/lib/util";
import React from "react";

export default async function page() {
  const proffInfo = await readProfessorInfo();
  return <AddClass proffInfo={proffInfo.data} />;
}
