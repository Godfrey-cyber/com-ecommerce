import React, { useState, useEffect } from 'react'
import Header from "../components/Header.jsx"
import SmallHeader from "../components/SmallHeader.jsx"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../requestMethods"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, increment, decrement, getCartCount, items, getTotal } from "../redux/cartRedux.js"

const ProductDetails = ({ modal }) => {
	const [product, setProduct] = useState({})
	const dispatch = useDispatch()
	const location = useLocation().pathname.split("/")[2]
	const prods = useSelector(items)
	const [quantity, setQuantity] = useState(0)
	const cartCount = useSelector(state => state.cart.totalCount)
	const cartTotal = useSelector(state => state.cart.total)
	// console.log(cartCount)
	// console.log(cartTotal)
	// console.log(prods)
	const handleQtyInc = () => {
		// if (type === "dec") {
		// 	count > 1 && setCount(count - 1)

		// } else {
		// 	setCount(count + 1)
		// 	dispatch(addProduct({ ...product, count }))
		// }
		setCount(count + 1)
		dispatch(increment({id: product._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	const handleQtyDec = () => {
		count > 1 && setCount(count - 1)
		dispatch(decrement({id: product._id, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	const handleClick = () => {
		setCount(count + 1)
		dispatch(addProduct({ ...product, count }))
		dispatch(getTotal())
		dispatch(getCartCount())
	}
	const [count, setCount] = useState(product.count || 0)

	// FETCH PRODUCT
	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await axios.get(`${BACKEND_URL}/products/getProduct/${location}`)
				setProduct(res.data.data)
				console.log(res.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getProduct()
	}, [location])
	return (
		<div className="flex flex-col w-full h-full relative">
			<SmallHeader />
			<Header />
			<div className="flex flex-col space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-12 px-8 md:px-12 lg:px-20 bg-white py-4">
					<div className="object-cover h-72 w56 md:h-80 md:w-62">
						<img src={product.photo} alt={product.title} className="w-full h-full object-contain cursor-pointer" />
					</div>
					<div className="flex flex-col space-y-4 ">
						<span className="span flex flex-col space-y-1">
							<h2 className="text-lg font-extralight text-gray-800">{product.title}</h2>
							<h2 className="text-lg font-bold text-gray-800">Ksh. {product.price}</h2>
						</span>
						<span className="span flex flex-col space-y-1">
							<h2 className="text-lg font-normal text-gray-800">Brand: {product.brand}</h2>
							<h2 className="text-lg font-semibold text-gray-800">In Stock: {product.quantity}</h2>
						</span>
						<button disabled={count > 1} onClick={handleClick} className="min-w-36 px-3 py-3 hover:bg-orange-600 transition delay-300 bg-orange-400 focus:outline-none rounded-md text-white font-semibold text-lg text-white">Add to Cart</button>
						<div className="flex items-center border border-gray-200 rounded-md w-max">
							<span onClick={() => handleQtyDec()} className="items-center flex text-lg text-gray-500 py-2 px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tl-md rounded-bl-md hover:bg-red-200 bg-gray-200">-</span>
							<span className="items-center flex w-12">
								<p className="text-sm text-gray-500 mx-auto">{ count }</p>
							</span>
							<span onClick={handleQtyInc} className="items-center flex text-lg text-gray-500 py-2 px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tr-md rounded-br-md hover:bg-green-200 bg-gray-200">+</span>
						</div>
					</div>
				</div>
				{/*PRODUCT INFO*/}
				<div className="grid grid-rows-2 px-8 md:px-12 lg:px-20 w-full">
					<span className="flex flex-col space-y-2">
						<h4 className="text-lg font-normal md:font-semibold text-gray-800">Product Info</h4>
						<p className="text-sm font-light text-gray-800">{product.desc}</p>
					</span> 
					{/*reviews*/}
					<div className="flex flex-col space-y-2">
						<h4 className="text-lg font-semibold text-gray-800">REVIEWS</h4>
						<h4 className="text-lg font-semibold text-gray-800">5 Buyers reviewed this product</h4>
						<p className="text-sm font-light text-gray-800">{product.desc}</p>
						<div className="flex flex-col space-y-4">
							<div className="flex space-x-2 items-center my-4">
								<div className="h-20 lg:h-32 w-20 lg:w-32 rounded-full">
									<img src={product.photo} alt={product.title} className="w-4/5 h-4/5 object-cover  rounded-full" />
								</div>
								<span className="flex flex-col space-y-2">
									<div className="text-xs text-gray-800 font-medium">Godfrey Ndiritu</div>
									<div className="text-xs text-gray-600 font-extralight">Nov 23, 2022</div>
								</span>
							</div>
							<span className="text-sm font-light text-gray-900">
								<p className="flex">I liked the product but it had some deffects: some functionalities were not working as described in the description. Delivery was fast</p>
							</span>
						</div>
						<div className="flex flex-col space-y-4">
							<div className="flex space-x-2 items-center my-4">
								<div className="h-20 lg:h-32 w-20 lg:w-32 rounded-full">
									<img src={product.photo} alt={product.title} className="w-4/5 h-4/5 object-cover rounded-full" />
								</div>
								<span className="flex flex-col space-y-2">
									<div className="text-xs text-gray-800 font-medium">Jane Njeri</div>
									<div className="text-xs text-gray-600 font-extralight">Dec 21, 2022</div>
								</span>
							</div>
							<span className="text-sm font-light text-gray-900">
								<p className="flex">I liked the product but it had some deffects: some functionalities were not working as described in the description. Delivery was fast</p>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails