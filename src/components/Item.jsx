import React, { useState } from "react";
import Number from "./input/Number";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { RemoveItemFunc } from "./Items";
import Select from "./input/Select";
import Ratio from "./input/Ratio";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Item({itemName, item, items, setItems}) {



  const onChangeItemInput = (inputName, value)=>{
    let newItemDetails = (items?.find(i=>i?.name == itemName)) || console.log("No item found, itemName, item", itemName, item) ;   

    let newItem = { ...item, ...{[inputName]: value}};

    setItems([...items.filter( i => i?.name != item.name), {...newItem}]);
  }

  const [ showMoreOptions, setShowMoreOptions] = useState(false);
  const [ blink, setBlink] = useState(false);

  return <div className={`space-y-2`}>    
  <details
    className={`overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden ${item.mode === 'subtract'?"border-red-300":""} `}
    open={true}
  >
    <summary
      className={`flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition`}
    >
      <span className="transition group-open:-rotate-180 border p-2 border-teal-400 hover:border-red-400">
       <RxCross2 size={"15px"} className="m-auto hover:text-red-800"  onClick={(event)=>{          
          RemoveItemFunc(item, items, setItems); 
          event.stopPropagation();
        }}/> 
      </span>
      <span className="text-sm font-medium">{item?.name}</span>
      <input type="text" name="label" placeholder="Enter Label" id="" value={item.label} onChange={(event)=>onChangeItemInput("label", event.target.value)} />
      
      <div className="grid grid-cols-2 gap-2 items-center justify-center">


      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      </div>
    </summary>

    <div className="border-t border-gray-200 bg-white">

      <div className="border-t border-gray-200 p-4">
        <div className="flex flex-col gap-4">
            <Number title="Length" value={item?.length} name="length" onChangeItemInput={onChangeItemInput}/>
            <Number title="Height" value={item?.height} name="height" onChangeItemInput={onChangeItemInput}/>

        </div>
      </div>
      <div className="">
        <button className="text-center border m-auto px-4 py-2 mb-4 rounded-md flex items-center justify-center gap-2" onClick={()=>setShowMoreOptions(!showMoreOptions)}><p>{showMoreOptions?"Hide Options":"More Options"}</p><MdKeyboardArrowDown size={"15px"}/></button>
        {showMoreOptions && <div className="">
          
        <div className="border-gray-200 p-4">
        <div className="flex flex-col gap-4">
            <Select 
            title="Wall Size" 
            unit={"Inch"} 
            name="wall_size" 
            value={item['wall_size']} 
            onChangeItemInput={onChangeItemInput} 
            options={[
              {value:5, label:"5 Inch"},
              {value:10, label:"10 Inch"},
              {value:15, label:"15 Inch"},
              {value:20, label:"20 Inch"},
              {value:25, label:"25 Inch"},
              {value:30, label:"30 Inch"},
              {value:35, label:"35 Inch"},
              {value:40, label:"40 Inch"},
              {value:45, label:"45 Inch"},
              {value:50, label:"50 Inch"},
              {value:55, label:"55 Inch"},
              {value:60, label:"60 Inch"},
              {value:'custom', label:"Custom"},
            ]}
            />
            <Ratio title="Mortar Ratio" unit={"Cement : Sand"} name="ratio" value={item['ratio']} onChangeItemInput={onChangeItemInput}/>
        </div>
      </div>

          </div>}
      </div>
    </div>
  </details>
</div>;
}

Item.propTypes = {
  item: PropTypes.object,
  items: PropTypes.array,
  setItems: PropTypes.func,
  itemName: PropTypes.string,
}
