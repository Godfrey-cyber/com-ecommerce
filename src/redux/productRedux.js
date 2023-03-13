import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
	name: "product",
	initialState: {
		product: null,
		isUploading: false,
		error: false,
		// success: false
	},
	reducers: {
		uploadStart: (state, action) => {
			state.isUploading = true
			state.error = false
			state.product = null
		},
		uploadSuccess: (state, action) => {
			state.isUploading = false
			state.error = false
			state.product = action.payload
		},
		uploadFailure: (state, action) => {
			state.isUploading = false
			state.error = true
			state.product = null
		}
	}
})

export const { uploadFailure, uploadSuccess, uploadStart } = productSlice.actions
export const selectProduct = (state => state.product.product)
export default productSlice.reducer