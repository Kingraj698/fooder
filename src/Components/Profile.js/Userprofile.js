import React, { useState } from 'react'
import './user.css';
import Register from '../Register/Register';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";




const Userprofile = () => {

  let [user, Setuser] = useState(JSON.parse(localStorage.getItem('Users')) || null)
  let [Token, settoken] = useState(JSON.parse(localStorage.getItem('Token')) || null)
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();


  const Logout = () => {

    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          localStorage.clear();
          window.location.reload(true);
          toast.success('logged out !');
          navigate('/')
        }
      });
  }

  return (
    <div className='userprofile'>

      {Token !== null ? <div className='userprofilehead'>
        <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='userprofilepic' />
        <div>
          <p> {user.waName}  </p>
          <p> {user.Phoneno} </p>
        </div>
        <button onClick={Logout}> Logout </button>
        <div>
          order history


        </div>
      </div> :
        <div>
          <h2> Login with Whatsappp now to place your order now.</h2>
          <button onClick={() => setModalShow(true)}> Login/register </button>
          {/* <MyVerticallyCenteredModal33
            show={modalShow}
            onHide={() => setModalShow(false)}
          /> */}
          <Register/>
        </div>

      }


    </div>

  )
}

export default Userprofile;



function MyVerticallyCenteredModal33(props) {

  return (
    <div >
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Register />

      </Modal>



    </div>
  );
}

