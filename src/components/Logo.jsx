import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Logo({children}) {
  return <Link to="/" className="flex gap-2 items-baseline">
    <BsFillBuildingsFill className="h-5 w-auto text-teal-500" />
    <span className="text-teal-500">{children}</span>
  </Link>;
}
