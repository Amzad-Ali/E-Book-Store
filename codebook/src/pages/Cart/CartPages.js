import React from 'react'
import CartEmpty from './Components/CartEmpty';
import CartList from './Components/CartList';
import { useCart } from '../../context/CartContext';

export default function CartPages() {
    
    const {cartList} = useCart(); 

  return (
    <main>
      {cartList.length ? <CartList/> : <CartEmpty/>}
    </main>
  )
}
