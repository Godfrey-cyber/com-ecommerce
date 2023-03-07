import React from 'react'
import Header from "../components/Header.jsx"
import SmallHeader from "../components/SmallHeader.jsx"
import { useNavigate } from "react-router-dom"

const HowToSell = () => {
	const navigate = useNavigate()
	return (
		<div className="w-full h-full">
		<SmallHeader />
		<Header />
		<section className="flex flex-col">
			<div className="h-[60vh] w-full">
				<img src="https://skygarden.azureedge.net/media/original_images/SG-Home-Page-Banner-2.jpg" alt="" className="h-full object-cover w-full" />
			</div>
			<div className="px-4 md:px-10 lg:px-20 grid grid-cols-12 gap-x-4 my-8">
				<div className="flex flex-col space-y-3 col-span-8">
					<h3 className="text-3xl font-bold text-gray-900">Showcase your products</h3>
					<p className="text-sm font-normal text-gray-800">The moment you create your shop and your first product upload is approved, you appear on the Sky.Garden Markeplace for customers to start buying from you!</p>
					<span className="flex flex-col space-y-3">
						<p className="text-sm font-semibold text-gray-800">Unlimited product upload</p>
						<p className="text-sm font-semibold text-gray-800">Discounts</p>
						<p className="text-sm font-semibold text-gray-800">Products variants</p>
						<p className="text-sm font-semibold text-gray-800">Videos</p>
					</span>
				</div>
				<div className="h-[300px] w-[200px] col-span-4">
					<img src="https://sky.garden/assets/sell-on-sky/desktop-office-chair-poster.jpg" alt="" className="h-full object-contain w-full" />
				</div>
			</div>
			{/**/}
			<div className="px-4 md:px-10 lg:px-20 grid grid-cols-12 gap-x-4 my-8">
				<div className="h-[400px] w-[300px] col-span-4">
					<img src="https://sky.garden/assets/sell-on-sky/secure-online-payments.png" alt="" className="h-full object-contain w-full" />
				</div>
				<div className="flex flex-col space-y-3 col-span-8">
					<h3 className="text-3xl font-bold text-gray-900">Secure Online Payments</h3>
					<h3 className="text-sm font-bold text-gray-900">Mpesa, Mastercard & Visa</h3>
					<p className="text-sm font-normal text-gray-800">Instantly get access to various online payment options that your customers can use to pay you. All payments are secure are fraud-proof</p>
					<h3 className="text-sm font-bold text-gray-900">Get a Sky.Wallet</h3>
					<p className="text-sm font-normal text-gray-800">All your payments sent to you digitally via a pin-secured Sky.Wallet. You can safely hold these funds in the wallet or withdraw to your bank account, mobile money account and more.</p>
					<button onClick={() => navigate('/dashboard')} className="text-lg text-white bg-orange-400 font-semibold rounded-md hover:bg-white hover:text-orange-400 w-4/5 lg:w-72 px-3 py-2 hover:border hover:border-2 transition delay-300">GET STARTED</button>
				</div>
			</div>
		</section>
		</div>
	)
}

export default HowToSell