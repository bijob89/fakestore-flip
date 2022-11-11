import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCartProducts, getProduct } from '../../api'
import CartPriceDetails from '../../components/cart/CartPriceDetails'
import CartProductDetails from '../../components/cart/CartProductDetails'
import LandingLayout from '../../layouts/layout/LandingLayout'
import { insertCartContent } from '../../services/slices/cartSlices'
import "../../assets/css/cart.css"

function CartPage() {
    const dispatch = useDispatch()

    const handleCartContent = async (res) => {
        dispatch(insertCartContent(res))
        let cartProducts = []
        for (let i in res.products) {
            let product = await getProduct(res.products[i].productId)
            cartProducts = [...cartProducts, product]
        }
        dispatch(insertCartContent(cartProducts))
    }
    useEffect(() => {
        getAllCartProducts()
            .then(res => handleCartContent(res))
            .catch(err => console.log('Failed to load cart details' + err))
    }, [])
  return (
    <LandingLayout>
        <div className='container cart-page'>
            <div className='row my-5'>
                <div className='col-12 col-md-8'>
                    <CartProductDetails />
                </div>
                <div className='col-12 col-md-4'>
                    <CartPriceDetails />
                </div>
            </div>
        </div>
    </LandingLayout>
  )
}

export default CartPage