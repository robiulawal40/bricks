import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddItem from './components/AddItem'
import CalculateButton from './components/CalculateButton'
import RemoveItem from './components/RemoveItem'
import Materials from './components/Materials'
import Items from './components/Items'
import Modal from './components/Modal'
import {v1 as uuidv1 } from "uuid"
import Footer from './components/Footer'
import Logo from './components/Logo'

import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Calculators from './pages/Calculators'
import Converters from './pages/Converters'
import WallCalculator from './pages/WallCalculator'
import SingIn from './pages/SingIn'
import SignUp from './pages/SignUp'
import Inbox from './pages/Inbox'
import FindPeople from './pages/FindPeople'
import Shop from './pages/Shop'
import Notifications from './pages/Notifications'

function App() {
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
    <Header sideMenu={sideMenu} setSideMenu={setSideMenu}/>

    {/* <section>
      <div className="mx-auto max-w-screen-sm px-4 py-8 pb-0">
        <Items items={items} setItems={setItems}/>
        <div className='flex items-center justify-center pt-5'>

        <div className='relative flex items-center'>
          <CalculateButton initialMaterial={initialMaterial} materials={materials} setMaterials={setMaterials} items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}></CalculateButton>
          <AddItem items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/>
          <RemoveItem items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/>
           <Modal items={items} setItems={setItems} showModal={showModal} setShowModal={setShowModal}/> 
        </div>
        </div>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-screen-sm px-4 my-4 ">
        <Materials materials={materials} items={items}/>
      </div>
    </section>

    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
        <Logo>Bricks</Logo>
        </div>
        <p className="mx-auto mt-2 max-w-md text-center leading-relaxed text-gray-500">
          Accurate Construction Material Calculator.
        </p>
      </div>
    </footer> */}
  <section className='mx-auto max-w-screen-sm px-4 md:px-0'>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/calculators' element={<Calculators/>} />
        <Route path='/wall_calculator' element={<WallCalculator/>} />
        <Route path='/inbox' element={<Inbox/>} />
        <Route path='/find_people' element={<FindPeople/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/sign_in' element={<SingIn/>} />
        <Route path='/sign_up' element={<SignUp/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/converters' element={<Converters/>} />
    </Routes>
  </section>

    <Footer sideMenu={sideMenu} setSideMenu={setSideMenu}></Footer>
  </>
  )
}

export default App
