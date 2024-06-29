import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function onScrollToTop() {
  const isBrowser = () => typeof window !== "undefined";
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
