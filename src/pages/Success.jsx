import React from 'react'
import { useNavigate } from "react-router-dom"

const Success = () => {
	const navigate = useNavigate()
	return (
		<div className="w-full h-full px-20">
			<p className="text-lg font-light text-purple-600 ">Hello you paid successfully via stripe</p>
			<p className="text-sm font-semibold text-black">You will receive an order confirmation email</p>
			<p onClick={() => navigate("/")} className="text-sm font-semibold hover:font-bold hover:underline text-purple-500 cursor-pointer">Home</p>
		</div>
	)
}

export default Success