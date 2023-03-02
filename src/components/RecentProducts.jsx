import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const RecentProducts = () => {
	const [products, setProducts] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get("http://localhost:5000/api/products/getAll")
				setProducts(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getProducts()
	}, [])
	return (
		<section className="flex flex-col px-10 lg:px-20 mx-auto ">
			<p className="text-xl font-semibold my-5 text-gray-800 text-center">Recent Products</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md-gap-4 lg:gap-8">
				{products?.slice(16, 24).map(item => (
					<div onClick={() => navigate(`/product_detail/${item._id}`)} key={item._id} className="flex group  flex-col space-y-1 cursor-pointer  rounded-md bg-white h-64 md:h-72 md:w-52 lg:h-96 w-36 lg:w-64 px-2 py-6">
						<img className="h-3/5 lg:h-4/5 w-3/5 lg:w-4/5 object-contain mx-auto" src={item.photo} alt="" />
						<p className="text-sm font-normal md:font-medium my-4 text-gray-800 truncate">{item.title}</p>
						<span className="flex flex-col space-y-2">
							<p className="text-sm md:text-lg font-normal md:font-light text-gray-600">KSH. {item.price}</p>
							<button className="px-2 py-1 group-hover:bg-orange-400 group-hover:text-white transition delay-300 bg-white text-sm text-orange-500 border border-orange-300 rounded-md">BUY NOW</button>
						</span>	
					</div>
					))}
			</div>
		</section>
	)
}

export default RecentProducts