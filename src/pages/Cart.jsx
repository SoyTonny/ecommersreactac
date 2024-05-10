import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, setCart } from '../store/slices/cart.slice';
import CartProd from '../components/cart/CartProd.jsx'
import './style/cart.css'
import { postPurchasesThunk } from '../store/slices/purchases.slice.js';

const Cart = () => {



  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartThunk('/cart'))
  }, [])
  

  // console.log(cart);
  const handleBuy = ()=> {
    dispatch(postPurchasesThunk(''));
    dispatch(setCart([]));
  }


  return (
    <>
    <div>
     {
      cart.map(prod => (
        <CartProd
          key={prod.id}
          prod={prod}
        />
      ))
     }
    </div>
    <div className='cart__totals'>
      <p>Total Products: {cart.reduce((ca, pr) => {
        return ca + pr.quantity
      },0)}</p>
      <p>Total Price: ${cart.reduce((ca, pr) => {
        return ca + pr.quantity * pr.product?.price
      }, 0)}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
    </>
  )
};

export default Cart