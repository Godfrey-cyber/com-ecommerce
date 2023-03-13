import axios from "axios"
import { useSelector } from "react-redux"
import { selectUser } from "./redux/userRedux.js"

const BASE_URL = "http://localhost:5000/api/"
export const BACKEND_URL = "https://com-shop.onrender.com/api"
// const token = useSelector(selectUser).token

// const GetToken = () => {
// 	return useSelector(selectUser).token
// }
// export const username = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.username.split(" ")[0]
// export const loggedUser = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// console.log(username)
const TOKEN = ""
console.log(TOKEN)
const bearer = "sk_test_51K8P6eBAuY8XODRosWWfFycGoPBx1MvWbUae8dfEA2PZv8ecA6DU2FnIlFtHsjDdnscKA5VzZElo21xyrFDjINZu006lt78eOz"
console.log(TOKEN)
export const publicRequest = axios.create({
	baseURL: BACKEND_URL,
	// Authorization: `Bearer ${bearer}`
})

export const userRequest = axios.create({
	baseURL: BACKEND_URL,
	header: { token: TOKEN },
	Authorization: `Bearer ${bearer}`
})