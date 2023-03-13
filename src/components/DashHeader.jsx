import React from 'react'
import { selectUser } from "../redux/userRedux.js"
import { useSelector } from "react-redux"
import { BellIcon, UserCircleIcon, WalletIcon } from '@heroicons/react/24/outline'

const DashHeader = () => {
	const user = useSelector(selectUser)
	return (
		<header className="flex justify-between items-center px-4 md:px-12 lg:px-20 xl:px-25 py-1 h-[60px] w-full shadow-sm shadow-gray-300 bg-gradient-to-r from-slate-50 to-blue-500 top-0 left-0 right-0 sticky">
			<span className="text-xl font-semibold text-emerald-600 cursor-pointer">.Store</span>
			<div className="flex space-x-4 items-center">
				<p className="text-xs md:text-sm text-gray-800 nowrap font-medium md:font-semibold bg-emerald rounded-3xl bg-white px-6 cursor-pointer py-2">NEED HELP?</p>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer hidden lg:flex">Notification</p>
				<span className="header_list flex md:hidden">
                    <BellIcon className="h-6 w-6 text-white cursor-pointer"/>
                </span>
                <span className="header_list flex md:hidden">
                    <WalletIcon className="h-6 w-6 text-white cursor-pointer"/>
                </span>
                <span className="header_list flex md:hidden">
                    <UserCircleIcon className="h-6 w-6 text-white cursor-pointer"/>
                </span>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer hidden lg:flex">My Wallet</p>
				<p className="text-sm text-gray-100 font-semibold cursor-pointer hidden lg:flex">{user?.username}</p>
			</div>
		</header>
	)
}

export default DashHeader