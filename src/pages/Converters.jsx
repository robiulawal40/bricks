import React from "react";
import { PiWallFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { GiIonicColumn } from "react-icons/gi";

const className = {
  link:"border-2 shadow p-4 flex flex-col gap-2",
  icon:"mx-auto",
  h2:"font-bold text-lg",
  p:"",
  button:"bg-gray-100 text-gray-700"
}

export default function Converters() {
  return (
    <>
      <div className="pt-8 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <Link to="../wall_calculator" relative="" className={className.link}>
            <PiWallFill size={"50px"} className={className.icon}/>
              <h2 className={className.h2}>Meter to Foot</h2>
              <Button className={className.button}>Calculate</Button>
          </Link>
  
          <Link to="wall_calculator" className={className.link}>
            <GiIonicColumn size={"50px"} className={className.icon}/>
              <h2 className={className.h2}>Kg to Pound</h2>
              <Button className={className.button}>Calculate</Button>
          </Link>
  
          <Link to="wall_calculator" className={className.link}>
            <GiIonicColumn size={"50px"} className={className.icon}/>
              <h2 className={className.h2}>Kmh to MPH</h2>
              <Button className={className.button}>Calculate</Button>
          </Link>
  
        </div>
      </div>
    </>
    );
}
