import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'


function MyVerticallyCenteredModal(props) {
  return (
    <div >
      <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Menu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='Menudisplay'>
        <a href='#'> Dinner </a>
        <a href='#'> Chinese </a>
        <a href='#'> Starter </a>
        <a href='#'> Main course </a>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

function Menu(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className={props.cart.length > 0 ? "Menubutton" : "Menutwobutton" } variant="primary" onClick={() => setModalShow(true)}>
        Menu
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </>
  );
}

export default Menu;