import React, { useEffect, useState } from "react";
import InputWrapper from "./InputWrapper";
import PropTypes from "prop-types";
export default function Select({title, unit, name, value, defaultValue, onChangeItemInput, options=[]}) {

  useEffect(()=>{
    
    !value && defaultValue && onChangeItemInput(name,defaultValue);
  });

  return <InputWrapper title={title} unit={unit}>
            <select name={name} value={value} defaultValue={defaultValue} onChange={ e => {onChangeItemInput(name,e.target.value);} } className="w-[200px] rounded-md border border-teal-400 shadow-sm px-3 py-1 focus:border-teal-400 active:border-teal-400 focus:outline-teal-400">
              {options.map((op)=><option key={op.value} value={op.value} >{op.label}</option>)}
            </select>
        </InputWrapper>;
}

Number.propTypes = {
  title: PropTypes.string,
  unit: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChangeItemInput: PropTypes.func,
  options: PropTypes.array,
}
