import React from 'react'
import { useSelector } from 'react-redux'

function CartProductDetails() {
    const cartContent = useSelector((state) => state.cart.cartContent)
    return (
        <div className='cart-content p-3'>

            {
                cartContent && cartContent.length > 0 &&
                cartContent.map((cartItem, ind) => {
                    return <div key={`cart-item-${ind}`} className='cart-item row p-3 mb-2'>
                        <div className='col-5 col-md-3'>
                            <img src={cartItem.image} className='img-fluid' alt={cartItem.title} />
                        </div>
                        <div className='col-7 col-md-5 product-details'>
                            <p>{cartItem.title}</p>
                            <span>{cartItem.category}</span>
                            <h4>{cartItem.price}</h4>
                            <a className='remove-item'>REMOVE</a>
                        </div>
                        <div className='col-12 col-md-4 delivery mt-2 mt-md-0'>
                            <p>Delivery by 2 PM, Tomorrow</p>
                        </div>
                    </div>
                })
            }
            <div className='p-3 d-flex justify-content-end'>
                <button className='btn btn-add w-50'>Place Order</button>
            </div>
        </div>
    )
}

export default CartProductDetails