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
		<section className="product_section">
			<p className="product_title">Recent Products</p>
			<div className="product_div">
				{products?.slice(16, 24).map(item => (
					<div onClick={() => navigate(`/product_detail/${item._id}`)} key={item._id} className="item_div group">
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
	)
}

export default RecentProducts