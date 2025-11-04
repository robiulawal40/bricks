import React from "react";
import PropTypes from "prop-types";

export default function InputWrapper({title="", unit="", children}) {
  return <div className="flex items-center gap-2 text-base">
          <div className=" text-gray-600 w-[200px] grow-0">{ title?title:"Default Title"} {unit?"("+unit+")":"(ft)"}</div>
          <div className=" w-[200px] rounded-md shadow-sm"> 
          {children}
          </div>
        </div>;
}

Number.propTypes = {
  title: PropTypes.string.isRequired,
  unit: PropTypes.string,
  name: PropTypes.string,
  onChangeItemInput: PropTypes.func,
}