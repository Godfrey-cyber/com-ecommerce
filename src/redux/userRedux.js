import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
		},
		loginFailure: (action, state) => {
			state.isFetching = false
			state.error = true
		},
		//register user
		registerStart: (state) => {
			state.isFetching = true
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
		},
		registerFailure: (action, state) => {
			state.isFetching = false
			state.error = true
		},
		logout: (state) => {
			state.currentUser = null
		}
	}
})

export const { loginFailure, loginSuccess, loginStart, registerStart, registerSuccess, registerFailure, logout } = userSlice.actions
export const selectUser = (state => state.user.currentUser)
export default userSlice.reducer