import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCategoryProducts } from '../api'
import CategoryWiseFeaturedProducts from './CategoryWiseFeaturedProducts'

function FeaturedCategoryProducts() {
    const [categoriesProductData, setCategoriesProductData] = useState({})
    const categories = useSelector((state) => state.category.value)

    const getAllCategoriesProducts = async () => {
        let _categoriesProductData = {}
        for (let categoryInd in categories) {
            try {
                let categoryProducts = await getCategoryProducts(categories[categoryInd])
                _categoriesProductData[categories[categoryInd]] = categoryProducts
            } catch(e) {
                console.log(`Failed to fetch ${categories[categoryInd]} products`)
            }
        }
        setCategoriesProductData(_categoriesProductData)
    }

    useEffect(() => {
        if(categories && categories.length > 0) {
            getAllCategoriesProducts()
        }
    }, [categories])

    return (
        <div >
            {
                Object.keys(categoriesProductData).map((category, ind) => <CategoryWiseFeaturedProducts 
                    key={`cat-wise-feat-${ind}`}
                    category={category}
                    products={categoriesProductData[category]}
                    />
                )
            }
        </div>
    )
}

export default FeaturedCategoryProducts