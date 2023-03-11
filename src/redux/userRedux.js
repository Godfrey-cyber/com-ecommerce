import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
		// success: false
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true
			state.error = false
			// state.success = false
		},
		loginSuccess: (state, action) => {
			state.isFetching = false
			state.error = false
			state.currentUser = action.payload
		},
		loginFailure: (action, state) => {
			state.isFetching = false
			state.error = true
		},
		//register user
		registerStart: (state) => {
			state.isFetching = true
			state.error = true
		},
		registerSuccess: (state, action) => {
			state.isFetching = false
			state.error = true
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