import React from 'react'
import { useNavigate } from "react-router-dom"
import { selectUser } from "../redux/userRedux.js"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../redux/apiCalls.js"
// import { username } from "../requestMethods"

const SmallHeader = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const username = user?.username?.split(" ")[0]
	return (
		<div className="small_header">
			<span className="small_header_span">
				<p className="small_header_list">Return Policy</p>
				<p className="small_header_list hidden md:flex">Contact Us</p>
				<p className="small_header_list hidden md:flex">Updates</p>
			</span>
			<span className="small_header_span">
				<p className="small_header_list hidden md:flex">Track Order</p>
				{/*<p className="small_header_list">News</p>
				<p className="small_header_list">Updates</p>*/}
			</span>
			<span className="small_header_span">
				{!user ? <p onClick={() => navigate('/login')} className="small_header_list hidden md:flex">Login</p> : <p onClick={() => logoutUser(dispatch())} className="small_header_list">{`Hello ${username}`}</p>}
				<p onClick={() => navigate('/how_to_sell')} className="small_header_list ">Sell on Store</p>
			</span>
		</div>
	)
}

export default SmallHeader