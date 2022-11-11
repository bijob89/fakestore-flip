import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartContent: [],
	},
	reducers: {
		insertCartContent: (state, action) => {
			state.cartContent = action.payload
		}
	},
})

// Action creators are generated for each case reducer function
export const { insertCartContent } = cartSlice.actions

export default cartSlice.reducer