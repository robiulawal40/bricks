import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { AddItemFunc } from "./Items";
import Button from "./Button";
import { CiCalculator1 } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

export default function AddItem({items, setItems, showModal, setShowModal}) {

  const addItem = (itemName, itemType)=>{
    AddItemFunc(itemName, itemType, items, setItems);
  }


  return <div className="relative inline-block text-center">
  <Button className={""} onClick={()=>addItem("brick-wall", "brick-wall")}>
    <GoPlus size={"20px"} className=""/>
    <span className="hidden md:flex">Add Item</span>
  </Button>
</div>;
}

AddItem.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func,
  itemName: PropTypes.string,
}
