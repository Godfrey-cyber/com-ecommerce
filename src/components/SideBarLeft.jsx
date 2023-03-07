import React from 'react'

const SideBarLeft = () => {
	return (
		<div className="col-span-2 flex flex-col bg-cyan-900 min-h-screen space-y-2">
			<p className="text-xl text-gray-800 my-4 font-semibold px-3">DASH DEALS</p>
			<div className="flex flex-col space-y-4">
				<span className="dash_span">Home</span>
				<span className="tdas_span">Orders</span>
				<span className="tdas_span">Products</span>
				<span className="tdas_span">My wallet</span>
				<span className="tdas_span">Marketing</span>
			</div>
		</div>
	)
}

export default SideBarLeft