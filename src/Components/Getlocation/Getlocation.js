import React, { useEffect, useState } from 'react';


const Getlocation = () => {

     const [ltt,setltt]=useState([]) 
     const [lgt,setlgt]=useState([]) 
     const[prefix,setprefix]=useState([])

     const Getlocationnow = () =>
     {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          setlgt(position.coords.longitude);
          setltt(position.coords.latitude); 
          console.log(ltt,lgt);
        });
      }
    }

    useEffect(()=> {
      const getprefix = window.location.host.split('.')[0];
    console.log(getprefix,"prefix");
    setprefix(getprefix)

    })
     
  return (
    <div>Getlocation

<div>
 
 
  {prefix}
        <h4>Using geolocation JavaScript API in React</h4>
        <h5> {ltt}</h5>
        <h5> {lgt} </h5>

        
       <button onClick={Getlocationnow}> Get location  </button> 
      </div>
    </div>
    
  )
}

export default Getlocation