import React, { useState } from "react";
import InputWrapper from "./InputWrapper";
import PropTypes from "prop-types";
export default function Ratio({title, unit, name, value,item, onChangeItemInput}) {

  const onRationChange = (property, value)=>{

  }

  return <InputWrapper title={title} unit={unit}>
            <div className="w-[150px] rounded-md border border-teal-400 shadow-sm px-0 py-0 focus:border-teal-400 active:border-teal-400 grid grid-cols-[1fr_minmax(10px,_10px)_1fr] gap-0">
              <div>
                  <input type="number" className="input rounded-md w-full h-full pl-2 py-1 focus:outline-teal-400" placeholder="Cement" onChange={(e)=>onChangeItemInput("cement_ratio",e.target.value)} defaultValue={1} value={item?.cement_ratio}/>
              </div>
              <div>:</div>
              <div>
                  <input type="number" className="input rounded-md w-full h-full pl-2 py-1 focus:outline-teal-400" placeholder="Sand" onChange={(e)=>onChangeItemInput("sand_ratio",e.target.value)} defaultValue={5} value={item?.sand_ratio}/>
              </div>
            </div>
        </InputWrapper>;
}

Number.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  item: PropTypes.object,
  onChangeItemInput: PropTypes.func,
}
