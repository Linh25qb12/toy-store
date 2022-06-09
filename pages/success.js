import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {useRouter} from 'next/router';
import { useStateContext } from '../context/StateContext';
// import Link from 'next/link';


const Success = () => {
  const {setCartItems, setTotalPrice, setTotalQuantities, setShowCart} = useStateContext();
  const [order, setOrder] = useState(null);  

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className="email-msg">Check your email inbox for the receipt.</p>
            <p className="desciption">
                If you have any question, please mail:  
                <a className="email" href="mailto:tuanlinhdoan2@gmail.com">
                 tuanlinhdoan2@gmail.com
                </a>
            </p>
            <Link href="/">
                <button type="button" onClick={() => setShowCart(false)} className="btn" >
                Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success;