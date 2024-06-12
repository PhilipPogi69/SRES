"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Logo from "@/public/Technological_University_of_the_Philippines_Seal.svg.png";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    signOut();
  }

  return (
    <div
      className="navbar bg-base-100 shadow-lg transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex-none cursor-pointer"
      >
        <Image src={Logo} alt="TUP Logo" width={40} height={40} />
        <span className="ml-2 font-bold">
          TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES
        </span>
      </div>
      <div
        className={`flex justify-end flex-1 transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
          <a className="btn btn-ghost normal-case text-xl">Message</a>
          <a className="btn btn-ghost normal-case text-xl">Report</a>
          <a className="btn btn-ghost normal-case text-xl">Attendance</a>
          <a className="btn btn-ghost normal-case text-xl">Setting</a>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={handleSignOut}>
          <IoIosLogOut className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
