import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure, logoutStart, logoutFailure, logoutSuccess } from "../redux/userRedux.js"
import { uploadFailure, uploadSuccess, uploadStart } from "./productRedux.js"
import { publicRequest, userRequest }  from "../requestMethods.js"
import { categoryFailure, categorySuccess, categoryStart } from "./categoryRedux.js"

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
//upload product
export const addProduct = async (dispatch, data) => {
	dispatch(uploadStart())
	try {
		const res = await userRequest.post("products/create", data)
		dispatch(uploadSuccess(res.data))
	} catch (err) {
		dispatch(uploadFailure())
	}
	
}
// export const apiCatFetch = async (dispatch) => {
// 	dispatch(categoryStart())
// 	try {
//     	 const res = await publicRequest.get("category/getAll")
//     	dispatch(categorySuccess(res.data))
// 	} catch (err) {
// 		dispatch(categoryFailure())
// 		console.log(error)
// 	}
// }
// reset password
// const resetPassword = async () => {
// 	const res = await userRequest.post("users/auth/resetPassword", oldPassword, password)
// }
//forgot password
// const forgotPassword = async () => {
// 	const res = await publicRequest.post("users/auth/forgotPassword", email)
// }
