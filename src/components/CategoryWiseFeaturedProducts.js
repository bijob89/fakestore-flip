import React from 'react'
import Product from './products/Product'
import ProductSlider from './slider/ProductSlider'

function CategoryWiseFeaturedProducts({ category, products }) {
	return (
		<div className='category-wise-featured mb-3 p-2'>
			<div className='row'>
				<div className='col-12 col-md-3 col-lg-2 category-heading d-flex justify-content-center align-items-center'>
					<div className='p-3'>
						<h2 className='text-center'>Best of {category}</h2>
						<div className='d-flex justify-content-center'>
							<button>VIEW ALL</button>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-9 col-lg-10'>
					<ProductSlider slidesToShow={4}>
						{
							products.map((product) => <Product key={`prod-tile-${product.id}`} product={product} />)
						}
					</ProductSlider>
				</div>
			</div>
		</div>
	)
}

export default CategoryWiseFeaturedProducts