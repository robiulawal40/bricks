import React, { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import PropTypes from "prop-types";

export default function DropDown({itemWise, setItemWise, addItemList, setAddItemList, addCost, setAddCost}) {

  const [open, setOpen] = useState(false);


  const onChangeItemWise = (val)=>{
    setItemWise(val);
    localStorage.setItem('itemWise',val);
  }

  const onChangeList = (val)=>{
    setAddItemList(val);
    localStorage.setItem('addItemList',val);
  }

  const onChangeCost = (val)=>{
    setAddCost(val);
    localStorage.setItem('addCost',val);
  }

  return <div>
<div className="bg-gray-100 flex items-center justify-center">
        <div className="relative inline-block text-left">
            <button id="dropdown-button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-teal-500 cursor-pointer" onClick={()=>setOpen(op => !op)}>
                Settings
                <GiSettingsKnobs size={"20px"} className=" ml-2"/>
            </button>
            <div id="dropdown-menu" className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${ open?"":"hidden"}`}>
                <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">

                <div className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100" role="menuitem">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600"
                            defaultChecked={itemWise}
                            onChange={(e)=>onChangeItemWise( e.target.checked)}
                          />
                          <span className="ml-2 text-gray-700">Display Item Wise</span>
                        </label>                      
                    </div>

                    <div className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100" role="menuitem">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600"
                            defaultChecked={addItemList}
                            onChange={(e)=>onChangeList( e.target.checked)}
                          />
                          <span className="ml-2 text-gray-700">List of Items</span>
                        </label>                      
                    </div>

                    <div className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100" role="menuitem">
                        <label className="inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600"
                            defaultChecked={addCost}
                            onChange={(e)=>onChangeCost( e.target.checked)}
                          />
                          <span className="ml-2 text-gray-700">Include Cost</span>
                        </label>                      
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>;
}
DropDown.propTypes = {
  materials: PropTypes.any,
  itemWise:PropTypes.bool, 
  setItemWise:PropTypes.func, 
  addItemList:PropTypes.bool, 
  setAddItemList:PropTypes.func, 
  addCost:PropTypes.bool, 
  setAddCost:PropTypes.func
}