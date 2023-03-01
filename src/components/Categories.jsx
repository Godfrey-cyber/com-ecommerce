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
		<section className="grid grid-cols-5 gap-4 px-20 my-12">
			{products.map(item => (
				<div onClick={() => navigate(`/category_page/${item._id}`)} key={item._id} className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
					<img className="h-4/5 w-4/5 object-fit mx-auto" src={item.image} alt="" />
					<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">{item.name}</p>
				</div>
			))}
			
		</section>
	)
}

export default Categories