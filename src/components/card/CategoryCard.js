import React from 'react'

function CategoryCard({category}) {
  return (
    <div className='category-card px-4'>
        <span>{category}</span>
    </div>
  )
}

export default CategoryCard