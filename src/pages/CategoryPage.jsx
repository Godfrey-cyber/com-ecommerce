import React, { useState, useEffect } from 'react'
import Header from "../components/Header.jsx"
import SmallHeader from "../components/SmallHeader.jsx"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const ProductDetails = () => {
	const [products, setProducts] = useState([])
	const location = useLocation().pathname.split("/")[2]
	const navigate = useNavigate()
	console.log(location)
	// FETCH Category
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(`http://localhost:5000/api/products/getByCategory/${location}`)
				setProducts(res?.data?.data)
			} catch (error) {
				console.log(error)
			}
		}
		getProducts()
	}, [location])
	// console.log(products)
	return (
		<div className="flex flex-col w-full h-full">
			<SmallHeader />
			<Header />
			<section className="flex flex-col scrollbar-hide overflow-y-hidden mx-auto px-20">
			<p className="text-xl font-semibold my-5 text-gray-800 text-center">Top deals of the day</p>
			<div className="grid grid-cols-4 scrollbar-hide gap-8">
				{products?.slice(0, 8).map(item => (
					<div onClick={() => navigate(`/product_detail/${item._id}`)} key={item._id} className="flex group  flex-col space-y-1 cursor-pointer rounded-md bg-white h-96 w-64 px-2 py-6">
						<img className="h-4/5 w-4/5 object-contain mx-auto" src={item.photo} alt="" />
						<p className="text-sm font-semibold my-4 text-gray-800 truncate">{item.title}</p>
						<span className="flex flex-col space-y-2">
							<p className="text-lg font-semibold text-gray-600">KSH. {item.price}</p>
							<button className="px-2 py-1 group-hover:bg-orange-400 group-hover:text-white transition delay-300 bg-white text-gray-500 border border-orange-300 rounded-md">BUY NOW</button>
						</span>	
					</div>
					))}
			</div>
		</section>
		</div>
	)
}

export default ProductDetails