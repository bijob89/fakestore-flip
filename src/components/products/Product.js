import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
    const navigate = useNavigate()
    return (
        <div className='product-tile p-2' onClick={() => navigate(`/products/${product.id}`)}>
            <div className='d-flex justify-content-center'><img src={product.image} alt={product.title} /></div>
            <div className="title text-center">{product.title}</div>
            <div className="price text-center"><strong>Rs. {product.price}</strong></div>
        </div>
    )
}

export default Product