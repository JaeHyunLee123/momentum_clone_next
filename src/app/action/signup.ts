"use server";

import { db } from "@/lib/db";
import { hashing } from "@/lib/utils";
import { Prisma } from "@prisma/client";

export const postSignUp = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ status: number; error?: string }> => {
  try {
    if (username.length > 20) {
      return { status: 400 };
    }

    if (password.length < 11) {
      return { status: 400 };
    }

    const hashedPassword = await hashing(password);

    try {
      await db.user.create({
        data: {
          userName: username,
          password: hashedPassword,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return { status: 400, error: "Username already exist" };
        }
      }
    }

    return { status: 200 };
  } catch (error) {
    return { status: 500, error: "Unknown server error" };
  }
};
