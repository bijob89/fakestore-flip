import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './slices/cartSlices'
import categoriesSlice from './slices/categorySlice'
import productsSlice from './slices/productsSlice'

export default configureStore({
  reducer: {
    product: productsSlice,
    category: categoriesSlice,
    cart: cartSlice
  },
})