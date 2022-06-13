import React from 'react';
import Link from 'next/link';
import {AiOutlineShopping} from 'react-icons/ai';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';
import {useUser} from '@auth0/nextjs-auth0';

 
const NavBar = () => {
  
  const {user} = useUser();
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  // console.log(user);

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Fancy Toy Store</Link>
      </p>
      <div>
      {!user ?
        <Link href="/api/auth/login">
        <button type="button" className="auth-button">Login</button>
        </Link>
      :
      <Link href="/api/auth/logout">
      <button type="button" className="auth-button">Logout</button>
    </Link>}
      {user && user.email === "tuanlinhdoan2@gmail.com" ?
          <Link href="/studio">
            <button type="button" className="auth-button">Admin</button>
          </Link>
          : <></>
      }
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}> 
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span> 
      </button>
      {showCart && <Cart />}
      </div>

      
    </div>
  )
}

export default NavBar;