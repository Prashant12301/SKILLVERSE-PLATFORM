import { clsx } from "clsx"; // A small library that helps you conditionally join class names.
import { twMerge } from "tailwind-merge" //Specially made for Tailwind CSS.If two Tailwind classes conflict, it keeps only the last one.

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
/*
cn = custom helper function you made.

It takes any number of class names (...inputs).

First → clsx(inputs) combines them nicely, ignoring falsy values.

Then → twMerge(...) makes sure conflicting Tailwind classes don’t pile up.
*/