import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function ProductsListing() {
    const filteredProducts = useSelector((state) => state.product.filteredProducts)
    return (
        <div className='panes right-pane'>
            {/* <div className='sort'>
                <ul className='d-flex list-unstyled'>
                    <li>Sort By</li>
                    <li>Ascending</li>
                    <li>Descending</li>
                </ul>
            </div> */}
            <div className='row'>
                {
                    filteredProducts && filteredProducts.length > 0 &&
                    filteredProducts.map((product, ind) => <div className='col-12 col-md-6 col-lg-3'><Product product={product} /></div>)
                }
            </div>
        </div>
    )
}

export default ProductsListing