import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
	name: "category",
	initialState: {
		category: null,
		uploading: false,
		error: false,
		// success: false
	},
	reducers: {
		categoryStart: (state, action) => {
			state.uploading = true
			state.error = false
			state.category = null
		},
		categorySuccess: (state, action) => {
			state.uploading = false
			state.error = false
			state.category = action.payload
		},
		categoryFailure: (state, action) => {
			state.uploading = false
			state.error = true
			state.category = null
		}
	}
})

export const { categoryFailure, categorySuccess, categoryStart } = categorySlice.actions
export const selectCategory = (state => state.category.category)
export default categorySlice.reducer