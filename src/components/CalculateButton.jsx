import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddMaterialToItem } from "./Items";
import { CiCalculator1 } from "react-icons/ci";
import Button from "./Button";

export default function CalculateButton({initialMaterial, materials, setMaterials, items, setItems, setShowModal}) {

  const calculateItems = ()=>{

    console.log("items", items);

    setMaterials({...initialMaterial});

    for(let i = 0; i < items.length; i++){
       calculate(items[i]);
    }
    console.log("materials", materials);
  }

  const calculate = (item)=>{
    switch(item.type){
      case "brick-wall":{

        // https://www.youtube.com/watch?v=9w0kAHhkBjk
        // https://www.youtube.com/watch?v=YY9tv7_bGRw
        // Dry Volume of mortar = .35 * Volume of bricks wall ( for 5" wall width 4.5" )

        let Length = Number(item?.length?item.length:0);
        let TotalBricksLong = (Length * 12) /10;

        let Height = Number(item?.height?item.height:0);
        let TotalBricksHight = (Height * 12) /4;

        let WallSize = Number(item?.wall_size?item.wall_size:5);
        let BricksWallFactor = (WallSize / 5);

        let CementRatio = Number(item?.cement_ratio?item.cement_ratio:1);

        let SandRatio = Number(item?.sand_ratio?item.sand_ratio:5);

        let Bricks = TotalBricksLong * TotalBricksHight;

        let TotalBricks = Bricks * ( BricksWallFactor );

        let DryMortarVolume = 0.35 * (Length * Height * (WallSize - 0.5) /12 );
        let Cement = (DryMortarVolume * CementRatio)/ ( CementRatio + SandRatio);
        let Sand = (DryMortarVolume * SandRatio)/ ( CementRatio + SandRatio);

        console.table({TotalBricks, DryMortarVolume, Cement, Sand, WallSize});

        AddMaterialToItem(item, {
          "bricks": {"amount":TotalBricks, "unit":"nos" },
          "cement": {"amount":Cement, "unit":"cft" },
          "sand": {"amount":Sand, "unit":"cft" },
        }, setItems);

      //   setMaterials({
      //  ...materials,
      //     bricks:[
      //    ...materials.bricks.filter(i=>i.id !== item.name),
      //    {
      //     ...item,
      //     id:item.name,
      //     amount: TotalBricks,
      //     unit:"nos"
      //   }
      //     ]
      //   })
        break;
      }
      case "cement":{
        setMaterials({
       ...materials,
          cement:{
         ...materials.cement,
            amount: materials.cement.amount + item.amount
          }
        })
        break;
      }
      case "sand":{
        setMaterials({
       ...materials,
          sand:{
         ...materials.sand,
            amount: materials.sand.amount + item.amount
          }
        })
        break;
      }
      case "reinforcement":{
        setMaterials({
       ...materials,
          reinforcement:{
         ...materials.reinforcement,
            amount: materials.reinforcement.amount + item.amount
          }
        })
        break;
      }
  
  }
}

  return <div className="relative inline-block" id="calculate">
  <Button className={""} onClick={()=>{setShowModal(false); calculateItems()}}>
    <CiCalculator1 size={"20px"} className=""/>
    Calculate
  </Button>
</div>
;
}

CalculateButton.propTypes = {
  initialMaterial: PropTypes.object,
  materials: PropTypes.object,
  items: PropTypes.array,
  setItems: PropTypes.func,
  setMaterials: PropTypes.func
}
