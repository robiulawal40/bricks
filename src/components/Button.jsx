import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { twMerge } from 'tailwind-merge'


export default function Button({ className, onClick, children}) {
  return <button
  className={twMerge('flex items-center justify-center gap-1 rounded-full border border-teal-600 bg-teal-600 py-2 px-4 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 m-2 cursor-pointer', className)}
  onClick={onClick}
>
{children}
</button>;
}
