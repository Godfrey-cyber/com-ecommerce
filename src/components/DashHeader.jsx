import React from 'react'

const DashHeader = () => {
	return (
		<header className="flex justify-between items-center px-20 py-1 h-[60px] w-full shadow-sm shadow-gray-300 bg-gradient-to-r from-slate-50 to-blue-500">
			<span className="text-xl font-semibold text-emerald-600 cursor-pointer">.Store</span>
			<div className="flex space-x-4 items-center">
				<p className="text-sm text-gray-800 font-semibold bg-emerald rounded-3xl bg-white px-6 cursor-pointer py-2">NEED HELP?</p>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer">Notification</p>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer">My Wallet</p>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer">Godfrey Ndiritu</p>
			</div>
		</header>
	)
}

export default DashHeader