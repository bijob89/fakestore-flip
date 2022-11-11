import React from 'react'
import ProductsFilter from './ProductsFilter'
import ProductsListing from './ProductsListing'

function ProductsView() {


	return (
		<div className='row mb-2 gx-2'>
			<div className='col-12 col-md-3 col-lg-2'>
				<ProductsFilter />
			</div>
			<div className='col-12 col-md-9 col-lg-10'>
				<ProductsListing />
			</div>
		</div>
	)
}

export default ProductsView