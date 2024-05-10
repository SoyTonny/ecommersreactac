import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../store/slices/purchases.slice'
import PurchasesCart from '../components/purchases/PurchasesCart';
import './style/purchases.css'

const Purchases = () => {

  const purchases = useSelector(store => store.purchases);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk())
  }, [])
  

  return (
    <div className='purchases'>
      {
        purchases.map(prod => (
          <PurchasesCart
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
  )
}

export default Purchases