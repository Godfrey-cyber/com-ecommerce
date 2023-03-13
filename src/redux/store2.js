import { combineReducers } from "@reduxjs/toolkit"
import productReducer from "./productRedux.js"
import categoryReducer from "./categoryRedux.js"

export const store2 = combineReducers({
	product: productReducer,
	category: categoryReducer
})