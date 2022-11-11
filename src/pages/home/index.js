import React, { useEffect } from 'react'
import { getAllProductCategories } from '../../api'
import LandingBanner from '../../components/LandingBanner'
import CategoryNavigation from '../../components/navigation/CategoryNavigation'
import LandingLayout from '../../layouts/layout/LandingLayout'
import "../../assets/css/home.css"
import FeaturedCategoryProducts from '../../components/FeaturedCategoryProducts'
import { useDispatch } from 'react-redux'
import { insertCategories } from '../../services/slices/categorySlice'
import ProductsView from '../../components/products/ProductsView'

function HomePage() {
	const dispatch = useDispatch()

	useEffect(() => {
		getAllProductCategories()
			.then(res => dispatch(insertCategories(res)))
			.catch(err => console.log('Error: Failed to fetch product categories'))
	}, [])

	return (
		<LandingLayout>
			<CategoryNavigation />
			<div className='landing-content px-2'>
				<LandingBanner />
				<ProductsView />
				<FeaturedCategoryProducts />
			</div>
		</LandingLayout>
	)
}

export default HomePage