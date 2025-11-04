import React from "react";
import Number from "./input/Number";
import PropTypes from "prop-types";
import Item from "./Item"
import {v1 as uuidv1 } from "uuid"

export default function Items({items, setItems}) {

  return <div className="space-y-2">
          {/* <Item itemName="item-1:brickwall" items={items} setItems={setItems}/> */}
          {items.map((value, index, array) => value?.name && <Item key={value.id} item={value} items={items} setItems={setItems}/> )}
        </div>;
}

export function RenameItemNameItemNo(items){
return items?.map((val, index) =>{
  val.item_no=index+1;
  // val.name="Item-"+val.item_no+": "+val.type;
  return val;
});
}

export function RemoveItemFunc(removeItem, items, setItems) {
  // const name = 'Item '+(items.length+1)+': Brick Wall';
  setItems([...RenameItemNameItemNo(items.filter(i=> i?.item_no != removeItem?.item_no))]);
}

export function AddItemFunc(itemName, itemType, items, setItems, mode="" ){
  const name = 'Item-'+(items.length+1)+': '+itemName;
  setItems([...items, { id:uuidv1(), item_no:items.length+1, name: name, mode:mode?mode:"", type: itemType, length: 1, height: 1, wall_size:5, cement_ratio:1, sand_ratio:5}]);
}

export function AddMaterialToItem(item, materials, setItems){
  item['materials']= {...materials};
  setItems(items=>{ return [...items.filter(it=> it.item_no != item.item_no), {...item} ];});
}

Items.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
}
