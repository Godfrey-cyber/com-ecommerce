import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutFailure, logoutSuccess } from "../redux/userRedux.js"
import { publicRequest }  from "../requestMethods.js"

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await publicRequest.post("users/auth/login", user)
		dispatch(loginSuccess(res.data))
		console.log(res.data)
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const register = async (dispatch, formData) => {
	dispatch(registerStart())
	try {
		const res = await publicRequest.post("users/auth/register", formData)
		dispatch(registerSuccess(res.data))
		console.log(res.data)
	} catch (err) {
		dispatch(registerFailure())
	}
}

export const logoutUser = async (dispatch) => {
	dispatch(logoutStart())
	try {
		const res = await publicRequest.post("users/auth/logout")
		dispatch(logoutSuccess())
	} catch (err) {
		dispatch(logoutFailure())
	}
}