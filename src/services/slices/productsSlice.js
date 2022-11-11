import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		filteredProducts: []
	},
	reducers: {
		insertProducts: (state, action) => {
			state.products = action.payload
		},
		insertFilteredProducts: (state, action) => {
			state.filteredProducts = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { insertProducts, insertFilteredProducts } = productsSlice.actions

export default productsSlice.reducer