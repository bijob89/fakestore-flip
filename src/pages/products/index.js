import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../../api'
import ProductViewSlider from '../../components/slider/ProductViewSlider';
import LandingLayout from '../../layouts/layout/LandingLayout'
import "../../assets/css/product.css"

function ProductPage() {
	const navigate = useNavigate();
	let productId = useParams();
	const [product, setProduct] = useState({})

	useEffect(() => {
		if(productId && productId.productId) {
			getProduct(productId.productId)
			.then(res => setProduct(res))
			.catch(err => console.log('Error: Failed to fetch product categories'))
		}
	}, [productId])

	console.log("productId: ", productId)

	return (
		<LandingLayout>
			<div className='container'>
				<div className='row py-5'>
					<div className='col-12 col-md-5'>
						{
							product && product.id &&
							<ProductViewSlider
							firstComponent={
								[product, product, product, product].map((prod, ind) => {
									return <div className='product-slider-top' key={`prod-slid-top-${ind}`}>
										<img className='img-fluid' src={prod.image} alt={prod.title} />
									</div>
								})
							}
							secondComponent={
								[product, product, product, product].map((prod, ind) => {
									return <div className='product-slider-bottom' key={`prod-slid-bot-${ind}`}>
										<img className='img-fluid' src={prod.image} alt={prod.title} />
									</div>
								})
							}
							/>
						}
						<div className='d-flex mt-4'>
							<button className='btn btn-add w-100' onClick={() => navigate('/cart')}>Add to Cart</button>
							<button className='btn btn-buy ms-2 w-100'>Buy Now</button>
						</div>
					</div>
					<div className='mt-3 mt-md-0 col-12 col-md-7 product-details'>
						<p>{product && product.category}</p>
						<h4>{product && product.title}</h4>
						<div className='mt-2 rating d-flex align-items-center'>
							<div className='badge'>
							<i className="fa fa-star me-2" aria-hidden="true"></i>
							{product && product.rating && product.rating.rate}
							</div>
							<div className='count ms-1'>
								{product && product.rating && product.rating.count} Ratings
							</div>
						</div>
						<h3 className='pt-2'><strong>{product && product.price}</strong></h3>
						<div className='mt-2 d-flex description'>
							<p>Description</p>
							<span className="ms-3">{product && product.description}</span>
						</div>
					</div>
				</div>
			</div>
		</LandingLayout>

	)
}

export default ProductPage