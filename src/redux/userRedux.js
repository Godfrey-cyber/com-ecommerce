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
		logoutStart: (state) => {
			state.isFetching = true
			// state.currentUser = null
		},
		logoutSuccess: (state) => {
			state.isFetching = false
			state.currentUser = null
		}
		,
		logoutFailure: (state) => {
			state.isFetching = false
			state.currentUser = null
		}
	}
})

export const { loginFailure, loginSuccess, loginStart, registerStart, registerSuccess, registerFailure, logoutStart, logoutFailure, logoutSuccess } = userSlice.actions
export const selectUser = (state => state.user.currentUser)
export default userSlice.reducer