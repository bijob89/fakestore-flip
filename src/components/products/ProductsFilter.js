import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts } from '../../api'
import { selectCategory } from '../../services/slices/categorySlice'
import { insertFilteredProducts } from '../../services/slices/productsSlice'

function ProductsFilter() {

    const dispatch = useDispatch()
	const categories = useSelector((state) => state.category.value)
    const selectedCategory = useSelector((state) => state.category.selectedCategory)

    useEffect(() => {
        getCategoryProducts(selectedCategory)
			.then(res => dispatch(insertFilteredProducts(res)))
			.catch(err => console.log('Error: Failed to fetch filtered products'))
    }, [selectedCategory])

    return (
        <div className='panes left-pane h-100'>
            <h5>Categories</h5>
            <ul className='list-unstyled'>
                <li className={selectedCategory ? '' : 'active'} onClick={() => dispatch(selectCategory(null))}>All</li>
                {
                    categories && 
                    categories.map((category, ind) => 
                        <li className={selectedCategory == category ? 'active' : ''} 
                        key={`prod-cat-${ind}`} onClick={() => dispatch(selectCategory(category))}>{category}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductsFilter