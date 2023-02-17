import logo from './logo.svg';
import './App.css';
import Home from './Components/Homescreen/Home'
import { Routes, Route } from 'react-router-dom'
import Chekoutpopup from './Components/Homescreen/Checkout/Chekoutpopup';
import Checkout from './Components/Homescreen/Checkout/Checkout';
import Navbar from './Components/Homescreen/Navbar/Navbar'
import { useState } from 'react';
import Userprofile from './Components/Profile.js/Userprofile';
import Getlocation from './Components/Getlocation/Getlocation';
import Payment from './Components/Homescreen/Payment/Payment'

function App() {

  const [name, setname] = useState("king")
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/location" element={<Getlocation />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </div>
  );
}

export default App;
