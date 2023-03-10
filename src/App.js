import './App.css';
import Home from './Components/Homescreen/Home'
import { Routes, Route } from 'react-router-dom'
import Checkout from './Components/Homescreen/Checkout/Checkout';
import Navbar from './Components/Homescreen/Navbar/Navbar'
import Userprofile from './Components/Profile.js/Userprofile';
import Getlocation from './Components/Getlocation/Getlocation';
import Payment from './Components/Homescreen/Payment/Payment'
import { Toaster } from 'react-hot-toast';
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';



function App() {

  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    setTimeout(()=>{
      Loader();
    },400 )

  },[]);

  const Loader = () => {
    setLoading(false)
 
}

if(loading) {
  return <div>
<Loading/>
  </div>
}

else{


    return (
      <div className="App">

        
        <Navbar />
        <Toaster
          toastOptions={{
            className: 'toaster',
            style: {
              padding: '8px',
              color: '#713200',
            },
            duration: 1300,
          }}

          position="top-center"
          reverseOrder={false}

        />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/location" element={<Getlocation />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />


        </Routes>
      </div>
    );
}}

export default App;
