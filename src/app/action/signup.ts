"use server";

import { db } from "@/lib/db";
import { hashing } from "@/lib/utils";

export const postSignUp = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const hashedPassword = await hashing(password);

  await db.user.create({
    data: {
      userName: username,
      password: hashedPassword,
    },
  });

  try {
    return { status: 200 };
  } catch (error) {
    console.error("hi");
    return { status: 500 };
  }
};
