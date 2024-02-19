import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** utility used by shadnc-ui library */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
