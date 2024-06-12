"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import TupLogo from "@/public/Technological_University_of_the_Philippines_Seal.svg.png"; // Update the import path
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { User } from "@prisma/client";
import { createUserInfo, hasEmptyValues } from "@/lib/util";
import ErrorModal from "@/components/ErrorModal";
import Input from "@/components/Input";
import ErrorBanner from "@/components/ErrorBanner";
import UniversalModal from "@/components/UniversalModal";
import { useModalStore } from "@/lib/store";

function getAge(date: Date): number {
  const today: Date = new Date();
  const birthDate: Date = date;
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDifference: number = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const Signup: React.FC = () => {
  const [credentials, setCredentials] = useState<User>({
    accessLevel: "VISITOR",
    email: "",
    id: uuid(),
    password: "",
    username: "",
    dateOfBirth: new Date(Date.now()),
  });

  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  const modalState = useModalStore();

  useEffect(() => {
    setError({ errorMessage: "", isError: false });
  }, [credentials]);

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const test = await hasEmptyValues(credentials, ["email"]);
    if (test) {
      setError({ errorMessage: "There are some empty fields.", isError: true });
      return;
    }

    if (getAge(credentials.dateOfBirth) <= 16) {
      setError({ errorMessage: "Invalid birthdate.", isError: true });
      return;
    }

    const res = await createUserInfo(credentials);
    if (res.success) {
      modalState.updateModal({
        content: "Signed up sucessfully. You must sign in to continue.",
        header: "Sucess",
        redirectUrl: "/Login",
      });
      modalState.makeVisible();
    } else {
      modalState.updateModal({
        content: res.message || "",
        header: "Signup failed",
      });
      modalState.makeVisible();
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <Image src={TupLogo} alt="TUP Logo" width={150} height={50} />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Students Access Module
            </h1>
          </div>
          <form
            className="bg-gray-200 p-6 rounded-lg"
            onSubmit={(e) => {
              handleOnSubmit(e);
            }}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              User Authentication
            </h2>

            {modalState.isVisble ? (
              <UniversalModal
                content={modalState.content}
                header={modalState.header}
                redirectUrl={modalState.redirectUrl}
              />
            ) : null}

            <Input
              label="Username"
              type="text"
              placeholder="Enter your username"
              className="input input-bordered"
              onChange={(e) => {
                setCredentials({ ...credentials, username: e.target.value });
              }}
              value={credentials.username}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              onChange={(e) => {
                setCredentials({ ...credentials, password: e.target.value });
              }}
              value={credentials.password}
            />
            <Input
              label="Date of birth"
              type="date"
              className="input input-bordered"
              onChange={(e) => {
                setCredentials({
                  ...credentials,
                  dateOfBirth: e.target.valueAsDate || new Date(Date.now()),
                });
              }}
              value={credentials.dateOfBirth.toISOString().substring(10, 0)}
            />

            <div className="flex justify-between mt-6">
              <button
                className="btn btn-outline btn-red"
                type="button"
                onClick={() => {
                  setCredentials({
                    accessLevel: "VISITOR",
                    email: null,
                    id: uuid(),
                    password: "",
                    username: "",
                    dateOfBirth: new Date(Date.now()),
                  });
                }}
              >
                Clear Entries
              </button>
              <button className="btn btn-red" type="submit">
                Sign Up
              </button>
            </div>
            <div className="text-center mt-4 flex gap-2 justify-center">
              <p>Already have an account?</p>
              <Link
                href="/Login"
                className="underline text-gray-600 hover:text-gray-800"
              >
                Login Here
              </Link>
            </div>

            {error.isError ? (
              <ErrorBanner
                isError={error.isError}
                errorMessage={error.errorMessage}
              />
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
