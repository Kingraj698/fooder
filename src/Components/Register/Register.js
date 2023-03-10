import React, { useEffect, useState } from 'react';
import './Register.css'
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
  

  // useEffect(() => {
    
  //   window.otpless =  (otplessUser) => {
  //     // Retrieve the user's details after successful login
  //     const waName = otplessUser.waName;
  //     const waNumber = otplessUser.waNumber;    
  //     let Phoneno = waNumber.substring(2, 12);
  //    if(otplessUser){
  //     localStorage.setItem("Users", JSON.stringify({waName,Phoneno})); 
  //     Registeruserindb(waName,Phoneno);
  //    }
  //   }
    
  // },[]);

  const Registeruserindb = (waName,Phoneno) => {
      axios.post('https://stage.hellomenu.in/users/login', {
          name: waName,
          phone: Phoneno
        })
          .then(function (response) {
            localStorage.setItem("Token", JSON.stringify(response.data.token));
            toast.promise(waName, {
              success: 'Registered Successfully !',
            });
            window.location.reload(true);
          })

}


  return (
    <div className='registernow'>

      <h5> Continue </h5>

      <span> Login is mandatory to place your order
      </span>
    
      < img width={200} alt='Register' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1677845571~exp=1677846171~hmac=0a24efcf4539e6b0cc189819d7881fe418d7785db571605e327789438aef1ef3' />
      {/* <div style={{ width: '50' }} id="otpless"></div> */}

    </div>

  );
}

export default Register;