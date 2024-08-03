import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function hashing(text: string) {
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const hashedText = await bcrypt.hash(text, salt);

  return hashedText;
}
