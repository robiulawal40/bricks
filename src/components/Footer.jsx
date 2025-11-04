import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaCalculator } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function Footer({sideMenu, setSideMenu}) {

const className ={
  a:"flex flex-col items-center align-middle justify-center cursor-pointer p-2 w-1/5 min-w-[90px]",
  icon:"text-teal-600",
  p:"text-teal-600 font-light text-[10px] sm:text-sm"
}
  return <div>
<nav className="h-14 bg-white border-t border-gray-300 fixed w-full z-10 bottom-0 shadow-[1px_2px_5px_0px_rgba(0,0,0,0.9)] py-8">
  <div className="h-full w-full  mx-auto flex items-center justify-between flex-shrink  max-w-screen-sm px-5">      
    <div className="flex justify-center flex-grow ">
      <div className="flex justify-between text-gray-800 w-full ">
          <NavLink to="/" className={({ isActive, isPending, isTransitioning })=>[ isActive ? "bg-gray-200  text-white rounded-md" : "", className.a].join(" ")}>
            <IoMdHome size={"18px"} className={className.icon}/>
            <h2 className={className.p}>Home</h2>
          </NavLink>

          <NavLink to="/calculators" className={({ isActive, isPending, isTransitioning })=>[ isActive ? "bg-gray-200  text-white rounded-md" : "", className.a].join(" ")}>
          <FaCalculator size={"18px"} className={className.icon}/>
          <h2  className={className.p}>Calculators</h2>
          </NavLink>

          <NavLink to="/converters" className={({ isActive, isPending, isTransitioning })=>[ isActive ? "bg-gray-200  text-white rounded-md" : "", className.a].join(" ")}>
          <IoPersonSharp size={"18px"} className={className.icon}/>
          <h2  className={className.p}>Converters</h2>
          </NavLink>

          <a className={className.a} onClick={()=>setSideMenu(prev=>!prev)}>
          {/* <TbHelp size={"18px"} className={className.icon}/> */}
          <IoMdMenu size={"18px"} className={className.icon}></IoMdMenu>
          <h2  className={className.p}>Menu</h2>
          </a>
      </div>
    </div>

  </div>
</nav>
<div className="h-14 bottom-0 w-full bg-transparent"></div>

  </div>;
}

Footer.propTypes = {
  sideMenu: PropTypes.bool,
  setSideMenu: PropTypes.func
}