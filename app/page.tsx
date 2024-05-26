"use client";

import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import Logo from "../public/Technological_University_of_the_Philippines_Seal.svg.png";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const expandedWidth = "250px"; // Width of the nav bar when expanded
  const collapsedWidth = "120px"; // Width of the nav bar when collapsed

  return (
    <div className="flex min-h-screen bg-gray-200">
      <nav
        className={`fixed top-0 left-0 ${
          isHovered ? expandedWidth : collapsedWidth
        } h-screen bg-white shadow transition duration-300`}
      >
        <ul className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center justify-center mt-10">
            <NavItem
              text="TUP MANILA"
              isHovered={isHovered}
              logo={Logo}
              icon={undefined}
            />
            <NavItem
              icon={<MdOutlineSpaceDashboard className="text-3xl" />}
              text="Dashboard"
              isHovered={isHovered}
            />
            <NavItem
              icon={<FaRegMessage className="text-3xl" />}
              text="Message"
              isHovered={isHovered}
            />
            <NavItem
              icon={<HiOutlineDocumentReport className="text-3xl" />}
              text="Report"
              isHovered={isHovered}
            />
            <NavItem
              icon={<SiGoogleclassroom className="text-3xl" />}
              text="Attendance"
              isHovered={isHovered}
            />
            <NavItem
              icon={<IoSettingsOutline className="text-3xl" />}
              text="Setting"
              isHovered={isHovered}
            />
          </div>
          <NavItem
            icon={<IoIosLogOut className="text-3xl" />}
            text="Log out"
            isHovered={isHovered}
          />
        </ul>
      </nav>
      <div
        className={`ml-${
          isHovered ? expandedWidth : collapsedWidth
        } p-6 w-full`}
      >
        <section className="attendance">
          <div className="attendance-list bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl uppercase text-black mb-6">Student List</h1>
            <table className="w-full">
              <thead>
                <tr className="bg-red-500 text-white rounded-t-lg">
                  <th className="px-4 py-2">Student ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">College</th>
                  <th className="px-4 py-2">Course</th>
                  <th className="px-4 py-2">Year</th>
                  <th className="px-4 py-2">Units</th>
                  <th className="px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-2">TUPM-21-0001</td>
                  <td className="px-4 py-2">Antonio Cruz</td>
                  <td className="px-4 py-2">Science</td>
                  <td className="px-4 py-2">BSCS-NS</td>
                  <td className="px-4 py-2">Third</td>
                  <td className="px-4 py-2">--</td>
                  <td className="px-4 py-2">
                    <Link href="/Grades">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

const NavItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  isHovered: boolean;
  logo?: string | StaticImageData;
}> = ({ icon, text, isHovered, logo }) => {
  const [itemHovered, setItemHovered] = useState(false);

  const handleMouseEnter = () => setItemHovered(true);
  const handleMouseLeave = () => setItemHovered(false);

  const isTupManila = text === "TUP MANILA";

  return (
    <li className="w-full">
      {isTupManila ? (
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center ${
            isHovered ? "justify-start" : ""
          } ${
            itemHovered ? "bg-gray-100" : ""
          } text-black text-xl p-4 rounded-lg transition duration-300 w-full`}
        >
          {logo ? (
            <Image src={logo} alt="TUP Logo" width={40} height={40} />
          ) : (
            <div
              className={`flex items-center justify-center mr-4 ${
                isHovered ? "mr-0" : ""
              }`}
            >
              {icon}
            </div>
          )}
          <span className={`${isHovered ? "block" : "hidden"} text-lg`}>
            {text}
          </span>
        </a>
      ) : (
        <a
          href="#"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center ${
            isHovered ? "justify-start" : ""
          } ${
            itemHovered ? "bg-gray-100" : ""
          } text-black text-xl p-4 rounded-lg transition duration-300 w-full`}
        >
          <div
            className={`flex items-center justify-center mr-4 ${
              isHovered ? "mr-0" : ""
            }`}
          >
            {icon}
          </div>
          <span className={`${isHovered ? "block" : "hidden"} text-lg`}>
            {text}
          </span>
        </a>
      )}
    </li>
  );
};

export default NavBar;
