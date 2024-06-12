import Link from "next/link";
import React from "react";

function InfoTable() {
  return (
    <section className="attendance p-4">
      <div className="attendance-list bg-base-100 mt-4 rounded-lg shadow-xl">
        <h1
          contentEditable
          className="uppercase text-2xl text-black p-4 text-center outline-none"
        >
          Section name
        </h1>
        <div className="overflow-x-auto rounded-t-lg">
          <table className="table w-full text-black border-collapse border border-black">
            <thead>
              <tr>
                <th className="bg-error text-white border border-black text-center">
                  Student ID
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Name
                </th>
                <th className="bg-error text-white border border-black text-center">
                  College
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Course
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Year
                </th>
                <th className="bg-error text-white border border-black text-center">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                >
                  TUPM-21-0001
                </td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                >
                  Antonio Cruz
                </td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                >
                  Science
                </td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                >
                  BSCS-NS
                </td>
                <td
                  contentEditable
                  className="border border-black p-2 text-center"
                >
                  Third
                </td>

                <td className="border border-black p-2 text-center">
                  <Link href="/Grades">
                    <button className="btn btn-outline btn-error">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default InfoTable;
