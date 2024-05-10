import React from 'react'
import './style/purchasescart.css'

const PurchasesCart = ({prod}) => {
    console.log(prod);
  return (
  <article className='purchasescart'>
    <h3 className='purchasescart__title'>{prod.product?.title}</h3>
    <figure className='purchasescart__img'>
        <img src={prod.product?.images[0].url} alt="product img" />
    </figure>
    <p className='purchasescart__date'>{prod.updatedAt.slice(0, 10)}</p>
    <span className='purchasescart__quantity'>{prod.quantity}</span>
    <span className='purchasescart__price'>Total price: $ {prod.product?.price * prod.quantity}</span>
  </article>
  )
}

export default PurchasesCart