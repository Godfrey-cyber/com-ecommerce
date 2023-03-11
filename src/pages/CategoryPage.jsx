import React, { useState, useEffect } from 'react'
import Header from "../components/Header.jsx"
import SmallHeader from "../components/SmallHeader.jsx"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

const ProductDetails = () => {
	const [products, setProducts] = useState([])
	const location = useLocation().pathname.split("/")[2]
	const navigate = useNavigate()
	// console.log(location)
	// FETCH Category
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(`https://com-shop.onrender.com/api/category/getByCategory/${location}`)
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
			<section className="product_section">
			<p className="product_title">Crazy March deals</p>
			<div className="product_div group">
				{products?.slice(0, 8).map(item => (
					<div onClick={() => navigate(`/product_detail/${item._id}`)} key={item._id} className="item_div">
						<img className="item_img" src={item.photo} alt={item.title} />
						<p className="item_title">{item.title}</p>
						<span className="flex flex-col space-y-2">
							<p className="item_price">KSH. {item.price}</p>
							<button className="item_button group-hover:bg-orange-400 group-hover:text-white">BUY NOW</button>
						</span>	
					</div>
					))}
			</div>
		</section>
		</div>
	)
}

export default ProductDetails