import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Ordersum.css'
import { Link } from 'react-router-dom'
import Payment from '../Payment/Payment'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';




const Ordersummery = (props) => {


    const [orderpreference, setorderpreference] = useState("Delivery")
    const [Deliverycharge, setDeliverycharge] = useState(40)
    const [activebtn, setactivebtn] = useState("deliver")

    const [modalShow, setModalShow] = React.useState(false);

    const ChangedeliveryCharge = () => {
        setDeliverycharge(40)
        setorderpreference("Delivery")
        setactivebtn("deliver")
    }

    const ChangedeliveryDinein = () => {
        setDeliverycharge(0)
        setorderpreference("Dine-in")
        setactivebtn("Dinein")
    }

    const ChangedeliveryTakeaway = () => {
        setDeliverycharge(0)
        setorderpreference("Take away")
        setactivebtn("Takeaway")
    }

    return (
        <div >
            {/* Order total  */}
            <div className='ordersummary' >
                <h5 className='ordersummaryheader'> Order summery </h5>


                <div className='ordersummarytotal'>
                    <p> Item Total  [ {props.cart.length} ] </p> <p> ₹ {props.result} </p>

                    {orderpreference === 'Delivery' &&
                        <p className='deliverychargesanimation'> Delivery Charges</p>
                    }
                    {orderpreference === 'Delivery' && <p className='deliverychargesanimation' > ₹ {Deliverycharge}</p>}

                    <p className='TotalAmount'> Total payable </p> <p className='TotalAmount1'>₹ {props.result + Deliverycharge}</p>
                </div>
            </div>

            {/* Delivery order Type */}
            <div className='Deliverybtn' >
                <button onClick={ChangedeliveryCharge} className={activebtn === "deliver" ? "activedeliverbtns" : "inactivedeliverbtn"} > Deliver </button>
                <button onClick={ChangedeliveryDinein} className={activebtn === "Dinein" ? "activedeliverbtns" : "inactivedeliverbtn"} > Dine-in </button>
                <button onClick={ChangedeliveryTakeaway} className={activebtn === "Takeaway" ? "activedeliverbtns" : "inactivedeliverbtn"} > Take-away </button>
            </div>

            <div className='addressandall'>
                {orderpreference === "Delivery" &&
                    <div> <input className='addressbar' placeholder='📍 Enter your address here' /> <br>
                    </br> <h4 className='delivermsg'> Your order will be confirmed after payment and It will be delivered withiin 30 minutes or we will refund 50% of Total amount. <br></br>
                            Happy Fooding with us ! </h4> </div>}
                {orderpreference === "Dine-in" && <h4 className='delivermsg'> Your order will be served on your table within 30 minutes.<br></br> Thanks! </h4>}
                {orderpreference == "Take away" && <h4 className='delivermsg'> Your order will be ready in 30 minutes please make sure you reach before that to pick up.
                    <br></br> Happy fooding with us !</h4>}
            </div>


            {/* order summary pop up */}
            <div className='checkoutpopup1'>
                <div className='itemprice1'>
                    <div>
                        <span className='priceincheckout1'>
                            ₹{props.result + Deliverycharge}
                        </span>
                        <span className='space'>
                            ||
                        </span>
                        <span>
                            {props.cart?.length}  items
                        </span>
                    </div>
                    <a href='' className='viewdetailedbill' > View Detailed Bill </a>


                </div>
                <div className='checkoutbtn11' >
                    <Link onClick={() => setModalShow(true)} className='checkoutbtn12' > Procced to Pay </Link>

                </div>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

            </div  >






        </div>
    )
}

export default Ordersummery;




// Payment method option 

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
                       <h5>  Select Payment option </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='Menudisplay'>
                    <Payment/>
                    

                </Modal.Body>
                
            </Modal>
        </div>
    );
}

