import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import  classNames from 'classnames'
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import { FaDownload } from "react-icons/fa";
import {v1 as uuidv1 } from "uuid"
import { GiSettingsKnobs } from "react-icons/gi";
import DropDown from "./input/DropDown";
import { roundUp, totalCalculation } from "./Functions";

export default function Materials({materials, items}) {


  const formatNumber = (num) => ( Number(num).toFixed(2) );

  let Bricks =[];
  let Cement =[];
  let Sand =[];
  let Cost =[];

  const AddBricks = (amount)=>{ 
    Bricks.push(Number(amount));
    return amount;
  };
  const AddCement = (amount)=>{ 
    Cement.push(Number(amount));
    return amount;
  };
  const AddSand = (amount)=>{ 
    Sand.push(Number(amount));
    return amount;
  };

  const AddCost = (amount)=>{ 
    Cost.push(Number(amount));
    return amount;
  };

  const TotalBricks = ()=> Bricks?.reduce((prev, current)=>prev+current, 0);
  const TotalCement = ()=> Cement?.reduce((prev, current)=>prev+current, 0).toFixed(2);
  const TotalSand = ()=> Sand?.reduce((prev, current)=>prev+current, 0).toFixed(2);

  const TotalCost = ()=> Cost?.reduce((prev, current)=>prev+current, 0).toFixed(0);

  const [ brickPrice, setBrickPrice] = useState(14);
  const [ cementPrice, setCementPrice] = useState(550);
  const [ sandPrice, setSandPrice] = useState(7);


const ref = useRef(null);

const onButtonClick = useCallback(() => {
  if (ref.current === null) {
    return
  }

  toJpeg(ref.current, { cacheBust: true, })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'brick_calculation_'+uuidv1()+'.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}, [ref])

const [itemWise, setItemWise] = useState(()=>{
  return JSON.parse(localStorage.getItem('itemWise')) || false;
});

const [addItemList, setAddItemList] = useState(()=>{
  return JSON.parse(localStorage.getItem('addItemList')) || false;
});

const [addCost, setAddCost] = useState(()=>{
  return JSON.parse(localStorage.getItem('addCost')) || false;
});

const calculateMaterial = () => {
  items && items?.map((item)=>{
    AddBricks(item?.materials?.bricks?.amount);
    AddCement(formatNumber(item?.materials?.cement?.amount));
    AddSand(formatNumber(item?.materials?.sand?.amount));
  })
}
calculateMaterial();

// console.log("totalCalculation:", totalCalculation(items));

const className ={
  row:"header-row flex flex-row text-center justify-between px-3 py-0",
  cell:"w-[100px] border-r-2 py-2",
  last_cell:"w-[100px] border-r-0 py-2",
  sl:"w-[50px] py-2",
  description:"w-[200px] border-x-2 py-2",
  td:"border border-teal-800  p-3 ",
  th:"border border-teal-800  p-3",
  table_row:"p-2 border ",
}

  return <>
  <div className={`max-w-screen-sm ${ itemWise && 'overflow-x-scroll'} overflow-y-hidden min-h-[200px]`}>
    <div className="text-right flex justify-end mb-2 p-2">
      <DropDown itemWise={itemWise} setItemWise={setItemWise} addItemList={addItemList} setAddItemList={setAddItemList} addCost={addCost} setAddCost={setAddCost}/>     
    </div>
  <div ref={ref} className="bg-white p-[1px]">
    {itemWise || 
    <table className=" border-collapse w-full">
      <tbody>
      <tr className={classNames(className.table_row, "bg-teal-800 text-white")}>
        <th className={classNames( className.th )}>Item</th>
        <th className={classNames( className.th )}>Amount</th>
        {addCost && <th className={classNames( className.th )}>Cost (Tk)</th>}
      </tr>
      <tr className={classNames(className.table_row)}>
        <th className={classNames( className.th )}>Bricks(nos)</th>
        <td className={classNames( className.td )}>{ roundUp( TotalBricks() )}</td>
        {addCost && <td className={classNames( className.td )}>{ AddCost( Number(roundUp(TotalBricks()) * brickPrice).toFixed(0)) }</td>}

      </tr>
      <tr className={classNames(className.table_row)}>
        <th className={classNames( className.th )}>Cement(cft)</th>
        <td className={classNames( className.td )}>{TotalCement()} { TotalCement()?"( "+Math.ceil(TotalCement()/1.25)+" Bags)":"" }</td>
        {addCost && <td className={classNames( className.td )}>{ AddCost(Number(Math.ceil(TotalCement()/1.25) * cementPrice).toFixed(0)) }</td>}
        
      </tr>
      <tr className={classNames(className.table_row)}>
        <th className={classNames( className.th )}>Sand(cft)</th>
        <td className={classNames( className.td )}>{TotalSand()}</td>
        {addCost && <td className={classNames( className.td )}>{ AddCost(Number( TotalSand() * sandPrice).toFixed(0))}</td>}
      </tr>
      {addCost && <tr className={classNames(className.table_row)}>
        <th colSpan={2} className={classNames( className.th )}>Total Cost</th>
        <td  className={classNames( className.td )}>{TotalCost()}</td>
        </tr>}
        <tr><td colSpan={"100%"}  className={classNames( " border-none shadow-none text-[8px] text-right py-1 text-gray-400" )}>Powered by Bricks(a mobile app)</td></tr>
      </tbody>
    </table>
    }

  </div>
  { itemWise && <div  ref={ref} className="border min-w-[650px] ">
    <div className={classNames( className.row, "bg-teal-500 text-white" )}>
      <div className={classNames( className.sl )}>SL</div>
      <div className={classNames( className.description )} >Item Description</div>
      <div className={classNames( className.cell )} >Bricks(nos)</div>
      <div className={classNames( className.cell )} >Cement(cft)</div>
      <div className={classNames( className.cell, className.last_cell )} >Sand(cft)</div>
    </div>
    {itemWise && items && items.map(
      (item, index) =>(<div key={item.id} className={classNames( className.row, {"border-b-2":items.length !== index+1}, "bg-white" )}>
                        <div className={classNames(  className.sl )} >{index+1}</div>
                        <div className={classNames(  className.description, "px-3" )} >
                          <div className="font-bold mb-1 pb-0">{item?.name}</div>
                          {addItemList && <table className=" w-full text-left mx-0">
                            <tr><td className="pl-2 max-w-[100px] border border-collapse">Length(ft):</td><td className="border border-collapse min-w-[60px]">{item?.length}</td></tr>
                            <tr><td className="pl-2 max-w-[100px] border border-collapse">Height(ft):</td><td className="border border-collapse min-w-[60px]">{item?.height}</td></tr>
                            <tr><td className="pl-2 max-w-[100px] border border-collapse">wall Size(ft):</td><td className="border border-collapse min-w-[60px]">{item?.wall_size}</td></tr>
                            <tr><td className="pl-2 max-w-[100px] border border-collapse break-words"><p>Ratio(Cement:Sand):</p></td><td className="border border-collapse min-w-[60px]">{item?.cement_ratio} : {item?.sand_ratio}</td></tr>
                          </table>}
                           
                          </div>
                        <div className={classNames( className.cell )} >{AddBricks(item?.materials?.bricks?.amount)}</div>
                        <div className={classNames( className.cell )} >{AddCement(formatNumber(item?.materials?.cement?.amount))}</div>
                        <div className={classNames( className.cell, className.last_cell )} >{AddSand(formatNumber(item?.materials?.sand?.amount))}</div>
                      </div>)
    )}
    <div className={classNames( className.row, "bg-gray-400 text-white" )}>
      <div className={classNames( className.sl  )} ></div>
      <div className={classNames(  className.description )} >Total</div>
      <div className={classNames( className.cell )} >{TotalBricks()}</div>
      <div className={classNames( className.cell )} >{TotalCement()} { TotalCement()?"( "+Math.ceil(TotalCement()/1.25)+" Bags)":"" }</div>
      <div className={classNames( className.cell,  className.last_cell )} >{TotalSand()}</div>
    </div>

    { addCost && <>
    <div className={classNames( className.row, "bg-gray-500 text-white" )}>
      <div className={classNames( className.sl )} ></div>
      <div className={classNames(  className.description )} >Cost (TK)</div>
      <div className={classNames( className.cell )} >{ AddCost( Number(TotalBricks() * brickPrice).toFixed(0)) }</div>
      <div className={classNames( className.cell )} >{ AddCost(Number(Math.ceil(TotalCement()/1.25) * cementPrice).toFixed(0)) }</div>
      <div className={classNames( className.cell,  className.last_cell )} >{ AddCost(Number( TotalSand() * sandPrice).toFixed(0))}</div>
    </div>

    <div className={classNames( className.row, "bg-teal-600 text-white" )}>
      <div className={classNames( className.sl )} ></div>
      <div className={classNames(  className.description, "border-x-0" )} >Total Cost (TK)</div>
      <div className={classNames( className.cell,"border-r-0" )} ></div>
      <div className={classNames( className.cell,"border-r-0" )} >{TotalCost()}</div>
      <div className={classNames( className.cell, className.last_cell,"border-r-0" )} ></div>
    </div>
    </> }
  </div>}

  </div>

<div className="flex">
  <div className="relative inline-block float-left" ><a
  className="flex  items-center gap-2 mt-3 px-5 rounded-full border border-teal-600 bg-teal-600 p-3 text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 m-2 cursor-pointer  text-left text-"
  onClick={onButtonClick}
>
<FaDownload size={"15px"} className="inline"/>
<span>Save as Image</span>
</a></div>
<br/>
</div>
<div>
  {/* <pre className="text-left">
    {JSON.stringify(materials, null, 2)}
    <h2>Items</h2>
    {JSON.stringify(items, null, 2)}
  </pre> */}
  </div>
  </>;
}
Materials.propTypes = {
  materials: PropTypes.any
}


