import React from 'react'
import CategoryCard from '../card/CategoryCard'
import { useSelector } from 'react-redux'

function CategoryNavigation() {
  const categories = useSelector((state) => state.category.value)
  return (
    <div className='d-none category-navigation d-md-flex justify-content-center p-2'>
        {
            categories && categories.map((category, ind) => <CategoryCard key={`cat-nav-${ind}`} category={category} />) 
        }
    </div>
  )
}

export default CategoryNavigation