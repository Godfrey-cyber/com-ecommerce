import React from 'react'
import { useNavigate } from "react-router-dom"

const SideBarRight = () => {
	const navigate = useNavigate()
	return (
		<div className="col-span-10 flex flex-col bg-white min-h-screen px-4 md:px-8 lg:px-12 py-10 flex bg-zinc-200 flex-col space-y-3 ">
			<p className="text-sm text-gray-700 font-normal">Hello Godfrey, hope you are doing well</p>
			<div className="grid grid-cols-12 gap-y-4 p-2 w-full">
				<span className="col-span-6 flex flex-col space-y-4 px-20 py-8 rounded-md shadow shadow-gray-200 bg-white mx-auto">
					<p className="text-xl font-semibold text-black">Upload Product & Activate Your Shop</p>
					<p className="text-sm font-light text-black">Upload first product and get visible on the Marketplace.</p>
					<button onClick={() => navigate("/products")} className="rounded-md bg-cyan-600 px-4 py-3 text-white text-sm font-medium w-fit">ADD A PRODUCT</button>
				</span>
				<span className="col-span-6 flex flex-col space-y-4 px-20 py-8 rounded-md shadow shadow-gray-200 bg-white mx-auto">
					<p className="text-xl font-semibold text-black">You are a Premium Seller</p>
					<p className="text-sm font-light text-black">Your plan will be automatically renewed on</p>
					<button className="rounded-md bg-cyan-600 px-4 py-3 text-white text-sm font-medium w-fit">MY PREMIUM PLAN</button>
				</span>
			</div>
		</div>
	)
}

export default SideBarRight