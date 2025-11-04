import { useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import AddItem from '../components/AddItem'
import CalculateButton from '../components/CalculateButton'
import RemoveItem from '../components/RemoveItem'
import Materials from '../components/Materials'
import Items from '../components/Items'
import Modal from '../components/Modal'
import {v1 as uuidv1 } from "uuid"
import Footer from '../components/Footer'
import Logo from '../components/Logo'

import {
  Routes,
  Route
} from "react-router-dom";

function Home() {
  return <div>Home</div>
}


export default function WallCalculator() {

  const [items, setItems] = useState([{
    id:uuidv1(),
    name: "Item-1: brick-wall",
    type: "brick-wall",
    length: 1,
    height: 1,
    wall_size: 5,
    cement_ratio: 1,
    sand_ratio: 5,
    item_no: 1
  }]);

  const initialMaterial = {
    bricks:[
    //   {
    //   id:"default",
    //   amount: 0,
    //   unit:"nos"
    // }
  ],
    cement:[],
    sand:[],
    reinforcement:[]
  };

  const [materials, setMaterials] = useState(initialMaterial);

  const [ showModal, setShowModal ] = useState(false);

  const [ sideMenu, setSideMenu ] = useState(false);

  return (
<>

  <div className="mx-auto max-w-screen-sm px-4 py-8 pb-0">
    <Items items={items} setItems={setItems}/>
    <div className='flex items-center justify-center pt-5'>

    <div className='relative flex items-center'>
      <CalculateButton initialMaterial={initialMaterial} materials={materials} setMaterials={setMaterials} items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}></CalculateButton>
      <AddItem items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/>
      <RemoveItem items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/>
      {/* <Modal items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/> */}
    </div>
    </div>
  </div>

  <div className="mx-auto max-w-screen-sm px-4 my-4 ">
    <Materials materials={materials} items={items}/>
  </div>

</>);
}
