import React from "react";
import PropTypes from "prop-types";
import InputWrapper from "./InputWrapper";

export default function Number({title,value, unit, name, onChangeItemInput}) {
  return <InputWrapper title={title} unit={unit}>
            <input
              type="number"
              placeholder={title}
              defaultValue={value}
              className=" w-[200px] rounded-md border border-teal-400 shadow-sm px-3 py-1 focus:border-teal-400 active:border-teal-400 focus:outline-teal-400"
              onChange={(e)=>{onChangeItemInput(name, e.target.value)}}
            />
          </InputWrapper>;
}

Number.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.any,
  unit: PropTypes.string,
  name: PropTypes.string,
  onChangeItemInput: PropTypes.func,
}
