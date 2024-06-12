import { NextAuthOptions, getServerSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { useSession } from "next-auth/react";
import { useRouter, redirect } from "next/navigation";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Log In",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: { label: "Password", type: "password" },
        dateOfBirth: { label: "Date of Birth", type: "date" },
      },

      async authorize(credentials) {
        if (
          !credentials ||
          !credentials.username ||
          !credentials.password ||
          !credentials.dateOfBirth
        ) {
          return null;
        }

        const dbUser = await prisma.user.findFirst({
          where: { username: credentials.username },
        });

        if (
          dbUser &&
          (await bcrypt.compare(credentials.password, dbUser.password || "")) &&
          new Date(credentials.dateOfBirth).getTime() ===
            dbUser.dateOfBirth.getTime()
        ) {
          return {
            email: dbUser.email,
            id: dbUser.id,
            name: dbUser.username,
          } as User;
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/Login",
  },
};
