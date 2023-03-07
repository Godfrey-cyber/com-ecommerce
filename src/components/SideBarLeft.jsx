import React from 'react'
import { useNavigate } from "react-router-dom"
import { ShoppingCartIcon, MegaphoneIcon, TagIcon, WalletIcon, HomeIcon, BanknotesIcon } from '@heroicons/react/24/outline'
const SideBarLeft = () => {
	const navigate = useNavigate()
	return (
		<div className="col-span-2 flex flex-col bg-cyan-900 min-h-screen space-y-2">
			<p className="text-xl text-gray-800 my-4 font-semibold px-3">DASH DEALS</p>
			<div className="flex flex-col space-y-4">
				<span onClick={() => navigate("/dashboard")} className="dash_span">
					<HomeIcon className="cart_icon_dash" />
					<p className="dash_text">Home</p> 
				</span>
				<span onClick={() => navigate("/dash_orders")} className="dash_span">
					<BanknotesIcon className="cart_icon_dash" />
					<p className="dash_text">Orders</p> 
				</span>
				<span onClick={() => navigate("/products")} className="dash_span">
					<TagIcon className="cart_icon_dash" />
					<p className="dash_text">Products</p> 
				</span>
				<span onClick={() => navigate("/wallet")} className="dash_span">
					<WalletIcon className="cart_icon_dash" />
					<p className="dash_text">My wallet</p> 
				</span>
				<span onClick={() => navigate("/marketing")} className="dash_span">
					<MegaphoneIcon className="cart_icon_dash" />
					<p className="dash_text">Marketing</p> 
				</span>
			</div>
		</div>
	)
}

export default SideBarLeft