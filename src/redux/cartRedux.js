import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		totalCount: 0,
		total: 0
	},
	reducers: {
		addProduct: (state, action) => {
			let cartIndex = state.products.findIndex(item => item._id === action.payload.id,)
			if (cartIndex >= 0) {
				state.products[cartIndex].count += 1
			} else {
				let tempProduct = { ...action.payload, count: 1 }
          		state.products.push(tempProduct)
			}
			// state.count += 1
			// state.products.push(action.payload)
			state.total += action.payload.price;
		},
		getTotal: (state, action) => {
			state.total = state.products.reduce((acc, item) => {
	        return acc + item.price * item.count
	      }, 0)
		},
		increment: (state, action) => {
	      	let index = state.products.findIndex((item) => item._id === action.payload.id)
	      	state.products[index].count += 1
	    },
	    decrement: (state, action) => {
		    let index = state.products.findIndex((item) => item._id === action.payload.id)
		    if (state.products[index].count <= 0) {
		        state.products[index].count = 0
		    } else {
		        state.products[index].count -= 1
		    }
	    },
	    getCartCount: (state, action) => {
	      	let cartCount = state.products.reduce((total, item) => {
	        return item.count + total
	     }, 0)
	      	state.totalCount = cartCount
	    },
		removeFromCart: (state, action) => {
			const index = state.products.findIndex(cartItem => cartItem._id === action.payload.id)
			const newBasket = [...state.products]
			if(index >= 0) {
				newBasket.splice(index, 1)
				state.count -= 1 
				} else {
					console.log('cannot remove item');
				}
			state.products = newBasket;
		},
		resetCart: (state) => {
			state.products = []
			state.totalCount = 0
			state.total = 0
		}
	}
})

export const {addProduct, removeFromCart, resetCart, deleteAll, getTotal, increment, decrement, getCartCount} = cartSlice.actions
export const selectTotal = (state) => state.cart.products?.reduce((total, product) => total + product.price * product.count, 0);
export const cartItems = (state) => state.cart.products.reduce((total, item) => total + item.count, 0)
export const items = (state) => state.cart.products
export const totalCartCount = (state => state.cart.totalCount)
export default cartSlice.reducer