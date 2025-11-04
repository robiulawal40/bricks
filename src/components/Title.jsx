import React from "react";

export default function Title({children}) {
  return <div className="mx-auto max-w-screen-sm font-lg text-left mb-[-4px] mt-12"><h2 className="font-bold text-2xl text-teal-600 border-b-2 border-teal-500 block">{children}</h2></div>;
}
