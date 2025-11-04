import React, { useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PiWallFill } from "react-icons/pi";
import { GiWoodBeam } from "react-icons/gi";
import { TbColumnInsertLeft } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { AddItemFunc } from "./Items";


export default function Modal( {items, setItems, showModal, setShowModal} ) {

  // useEffect(()=>{
  //   document.addEventListener("mousedown",()=>{
  //     showModal && setShowModal(false);
  //     console.log("Modal donwn");
  //   })
  // },[]);

  const addItem = (itemName, itemType)=>{
    AddItemFunc(itemName, itemType, items, setItems);
  }
  


  return  <div id="dropdown-menu" className={classNames("origin-top-left absolute left-[-110px] mt-3 w-[220px] rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5",{"hidden":!showModal})}>
    <div className="absolute bg-teal-800 text-white shadow right-[-15px] top-[-15px] rounded-full p-2 cursor-pointer" onClick={()=>setShowModal(false)}>
      <RxCross2 size={"20px"} className="m-auto" /> 
    </div>
  <div className="grid grid-cols-2 gap-4 p-4 pt-8" role="menu">
    <div className="flex flex-col justify-center align-middle border text-center p-5 shadow-md rounded-lg hover:bg-gray-100 active:bg-blue-100 cursor-pointer" onClick={()=> addItem("brick-wall", "brick-wall")}>
      <PiWallFill size={"20px"} className="m-auto " /> 
      <a className=" rounded-md text-sm text-gray-700 " role="menuitem" >
         Wall
      </a>
    </div>
    <div className="flex flex-col justify-center align-middle border text-center p-5 shadow-md rounded-lg hover:bg-gray-100 active:bg-blue-100 cursor-pointer"  onClick={()=> addItem("beam", "beam")}>
      <GiWoodBeam size={"20px"} className="m-auto"/> 
      <a className=" rounded-md text-sm text-gray-700 " role="menuitem" >
         Beam
      </a>
    </div>
    <div className="flex flex-col justify-center align-middle border text-center p-5 shadow-md rounded-lg hover:bg-gray-100 active:bg-blue-100 cursor-pointer" onClick={()=> addItem("Column", "Column")}>
      <TbColumnInsertLeft size={"20px"} className="m-auto"   /> 
      <a className=" rounded-md text-sm text-gray-700 " role="menuitem">
         Column
      </a>
    </div>
  </div>
</div>;
}

Modal.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
  showModal: PropTypes.any,
  setShowModal: PropTypes.func
}
