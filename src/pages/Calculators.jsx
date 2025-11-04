import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { PiWallFill } from "react-icons/pi";
import { GiIonicColumn } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";
import slab from "../assets/slab.jpeg";
import plaster from "../assets/plaster.jpeg";
import rod from "../assets/rod.jpg";
import { BsBoxFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { FaPaintRoller } from "react-icons/fa";

const className = {
  link:"border-2 shadow p-4 flex flex-col gap-2",
  icon:"mx-auto",
  h2:"font-bold text-lg",
  p:"",
  button:"bg-gray-100 text-gray-700"
}

export default function Calculators() {
  return (
  <>
    <div className="pt-8 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <Link to="../wall_calculator" relative="" className={className.link}>
          <PiWallFill size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Wall Calculator</h2>
            {/* <p>Calculate the material require for constricting a wall</p> */}
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          <GiIonicColumn size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Column Calculator</h2>
            {/* <p>Calculate the material require for constricting a wall</p> */}
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          {/* <PiWallFill size={"50px"} className={className.icon}/> */}
          <img src={slab} width={"60px"} className="mx-auto" alt="" />
            <h2 className={className.h2}>Slab Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          <GiWoodBeam size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Beam Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          <BsBoxFill size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Floor Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          <IoLayers size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Tiles Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
            <img src={plaster} width={"60px"} className="mx-auto" alt="" />
            <h2 className={className.h2}>Plaster Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>

        <Link to="wall_calculator" className={className.link}>
          <FaPaintRoller size={"50px"} className={className.icon}/>
            <h2 className={className.h2}>Paint Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>
        
        <Link to="wall_calculator" className={className.link}>
        <img src={rod} width={"60px"} className="mx-auto" alt="" />
            <h2 className={className.h2}>Rod Calculator</h2>
            <Button className={className.button}>Calculate</Button>
        </Link>
      </div>
    </div>
  </>
  );
}
