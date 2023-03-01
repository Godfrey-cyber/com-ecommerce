import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1
			state.products.push(action.payload)
			state.total += action.payload.price;
		},
		removeFromCart: (state, action) => {
			const index = state.products.findIndex(cartItem => cartItem._id === action.payload.id)
			const newBasket = [...state.products]
			if(index >= 0) {
				newBasket.splice(index, 1)
				state.quantity -= 1 
				} else {
					console.log('cannot remove item');
				}
			state.products = newBasket;
		},
	}
})

export const {addProduct, removeFromCart, deleteAll} = cartSlice.actions
export const selectTotal = (state) => state.cart.products?.reduce((total, product) => total + product.price, 0);
export const items = (state) => state.cart.products
export default cartSlice.reducer