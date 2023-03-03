import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Categories = () => {
	const [products, setProducts] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await axios.get("http://localhost:5000/api/category/getAll")
				setProducts(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getCategories()
	}, [])
	return (
		<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-x-4 lg:gap-x-8 px-4 lg:px-20 my-12">
			{products.map(item => (
				<div onClick={() => navigate(`/category_page/${item._id}`)} key={item._id} className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-36 md:w-48 lg:w-44">
					<img className="md:h-4/5 h-3/5 w-3/5 md:w-4/5 object-contain lg:object-fit mx-auto" src={item.image} alt="" />
					<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">{item.name}</p>
				</div>
			))}
			
		</section>
	)
}

export default Categories