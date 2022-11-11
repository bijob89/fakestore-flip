import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function CartPriceDetails() {
    const cartContent = useSelector((state) => state.cart.cartContent)
    const [totalPrice, setTotalPrice] = useState(0)

    function calculateTotalPrice() {
        let total = 0;
        for (let i in cartContent) {
            total += cartContent[i].price
        }
        setTotalPrice(total)
    }

    useEffect(() => {
        if (cartContent && cartContent.length > 0) {
            calculateTotalPrice()
        }
    }, [cartContent])

    return (
        <div className='cart-prices p-2'>
            <div className='price-header p-2'>
                <p >Price Details</p>
            </div>

            <div className='p-3'>
            <div className='price-breakup py-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Price ({cartContent && cartContent.length}items)</p>
                    <h5>{totalPrice}</h5>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Discount</p>
                    <h5>0</h5>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Delivery Charges</p>
                    <span>Free</span>
                </div>
            </div>

            <div className='total-amount d-flex justify-content-between align-items-center py-3'>
                <h4>Total Amount</h4>
                <h4>{totalPrice}</h4>
            </div>
            </div>
        </div>
    )
}

export default CartPriceDetails