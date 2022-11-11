import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
	name: 'category',
	initialState: {
		value: [],
		selectedCategory: null
	},
	reducers: {
		insertCategories: (state, action) => {
			state.value = action.payload
		},
		selectCategory: (state, action) => {
			state.selectedCategory = action.payload
		}
	},
})

// Action creators are generated for each case reducer function
export const { insertCategories, selectCategory } = categoriesSlice.actions

export default categoriesSlice.reducer