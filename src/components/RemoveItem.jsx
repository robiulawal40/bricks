import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { AddItemFunc } from "./Items";
import Button from "./Button";
import { GoPlus } from "react-icons/go";

export default function RemoveItem({items, setItems, showModal, setShowModal}) {

  const addItem = (itemName, itemType, mode="")=>{
    AddItemFunc(itemName, itemType, items, setItems, mode);
  }
  return <div className="relative inline-block">
<Button className={" bg-red-500 border-red-600"} onClick={()=>addItem("brick-wall", "brick-wall", "subtract")}>
    <GoPlus size={"20px"} className=""/>
    <span className="hidden md:flex">Negative Item</span>
  </Button>
</div>;
}

RemoveItem.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
  itemName: PropTypes.string,
}
