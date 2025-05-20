import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from './pages/Card/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './PlaceOrder/PlaceOrder';
import Navbar from './Components/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import LoginPopUP from './Components/LoginPopUp/LoginPopUP';
import { StoreContext } from './Context/StoreContext';



const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUP setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar  setShowLogin={setShowLogin}/>
      
       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Card />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
