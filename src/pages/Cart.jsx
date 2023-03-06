import React, {useState} from 'react'
import Header from "../components/Header.jsx"
import { XMarkIcon } from '@heroicons/react/24/outline'
import SmallHeader from "../components/SmallHeader.jsx"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { items, selectTotal, removeFromCart, deleteAll, increment, decrement } from "../redux/cartRedux.js"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { selectUser } from "../redux/userRedux"
const stripePromise = loadStripe('pk_test_51K8P6eBAuY8XODRoZHtY0qruDSMWYS7isKfwfa8NjWrQCEvrC8HbCFx58mSV7kDSp8RSLTojLk3gQk4x80csOTqY00VX3TDeHd')

const KEY = "pk_test_51K8P6eBAuY8XODRoZHtY0qruDSMWYS7isKfwfa8NjWrQCEvrC8HbCFx58mSV7kDSp8RSLTojLk3gQk4x80csOTqY00VX3TDeHd"
const SECRET = "sk_test_51K8P6eBAuY8XODRosWWfFycGoPBx1MvWbUae8dfEA2PZv8ecA6DU2FnIlFtHsjDdnscKA5VzZElo21xyrFDjINZu006lt78eOz"

const ProductDetails = () => {
	const total = useSelector(selectTotal)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const products = useSelector(items)
	const user = useSelector(selectUser)
	const [count, setCount] = useState(0)
// stripe session
	const createCheckoutSession = async () => {
		const stripe = await stripePromise
		const checkoutSession = await axios.post("http://localhost:5000/api/checkout/payment", { 
			headers: { 
				Authorization: `Bearer ${KEY}`,
				"Content-Type": "application/json",
			}, 
			// tokenId: stripeToken.id,
			amount: 2000,
			email: user.email,
			items: products,
			phone: user.phone
		})

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id
		})

		if (result.error) {
			return result.error.message
		}
		// dispatch(deleteAll())
	}
	// !user redirect the user to the login page
	const checkoutFunction = () => {
		if (!user) {
			navigate('/login')
		} else {
			createCheckoutSession()
		}
	}
	const deleteCart = () => {
		dispatch()
	}
	
	//clear cart
	// console.log(JSON.parse(JSON.parse(localStorage.removeItem("persist:root")).cart))
	return (
		<div className="flex flex-col w-full h-full bg-white">
			<SmallHeader />
			<Header />
			<section className="flex flex-col px-2 md:px-12 lg:px-20 mx-auto my-8">
				<p className="text-sm lg:text-lg font-medium lg:font-semibold text-center lg:place-self-start text-gray-800">You have {products.length} products in your cart</p>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-white ">
					{products.length == 0 ? 
                    <div className="h-[80vh] col-span-12 lg:col-span-8 w-full flex flex-col space-y-3 px-4 lg:px-20 my-8 mx-auto justify-center items-center">
                        <span className="h-44 w-44">
                            <img src="https://sky.garden/assets/cart-empty.png" alt="" width={25} height={15} className="w-full h-full object-contain" />
                        </span>
                        <p className="text-sm font-normal text-gray-800 text-center">Already have an account? <span onClick={() => navigate("/register")} className="text-sm text-orange-400 cursor-pointer hover:text-orange-500 transition delay-200">Login</span> to see items in you cart</p>
                        <button onClick={() => navigate("/")} className="bg-orange-400 w-4/5 text-sm text-white font-normal px-4 py-2 lg:w-2/5 rounded-sm hover:bg-orange-500 bg-orange-400 transition delay">Start Shopping</button>
                    </div>
                     : 
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-y-4 rounded-sm w-full">
						{products.map((item, id) => (
						<div key={id} className="cart_div">
	                        <div className="grid grid-cols-12 gap-x-4">
	                            <span onClick={() => navigate(`/product_detail/${item._id}`)} className="col-span-6 lg:col-span-4 h-28 w-28 object-contain cursor-pointer">
	                                <img src={item.photo} alt="alt_image" layout="fill" className="img_tag object-contain"/>
	                            </span>
	                            <span onClick={() => dispatch(removeFromCart({ id: item._id }))} className="cart_icon">
	                                <XMarkIcon className="h-4 lg:h-6 w-4 lg:w-6 text-white" />
	                            </span>
	                            <div className="col-span-6 lg:col-span-8 flex flex-col space-y-2 mb-3 w-full">
	                                <p className="text-sm font-medium text-gray-800 truncate pr-4 ">{item.title}</p>
	                                <p className="text-sm font-normal text-gray-600">Seller: Deals Duka</p>
	                            </div>
                            </div>
                        	{/*butttons*/}
                            <span className="flex items-center justify-between w-full">
                                <span className="flex items-center">
                                    <button onClick={() => count >= 2 && setCount(count - 1)} onClick={() => dispatch(decrement({id: item._id, count }))} className="items-center flex text-lg text-gray-500 py-1 lg:py-2 px-1.5 lg:px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tl-md rounded-bl-md hover:bg-red-200 bg-gray-200">-</button>
                                    <span className="items-center flex text-sm text-gray-500 p-2 px-6">{item.count}</span>
                                    <button onClick={() => setCount(count + 1)} onClick={() => dispatch(increment({id: item._id, count }))} className="items-center flex text-lg text-gray-500 py-1 lg:py-2 px-1.5 lg:px-3 hover:text-white transition delay-300 transition delay-300 cursor-pointer rounded-tr-md rounded-br-md hover:bg-green-200 bg-gray-200">+</button>
                                </span>
                                <p className="text-sm font-semilbold text-gray-500 slashed-zero">KSH: {item.price * item.count}</p>
                            </span> 
                        </div>
							))}
					</div>}
				{/*CART SUMMARY*/}
					{products.length >= 1 && <div className="col-span-12 lg:col-span-4 flex flex-col space-y-12 bg-gray-100 rounded-sm px-4 py-6 h-fit">
						<div className="flex justify-between items-center bg-white p-3">
							<span className="flex flex-col space-y-2">
								<p className="text-lg font-medium text-gray-700">Subtotal</p>
								<p className="text-lg font-medium text-gray-700">Delivery</p>
							</span>
							<span className="flex flex-col space-y-2">
								<p className="text-lg font-medium text-gray-700 justify-self-end slashed-zero">Ksh. {total}</p>
								<p className="text-sm font-light text-gray-600">Depends on location</p>
							</span>
						</div>
						<button onClick={checkoutFunction} className="text-lg font-medium hover:font-semibold px-1 lg:px-2 py-2 lg:py-4 w-full mx-auto bg-orange-400 hover:bg-orange-500 transition delay-300 rounded-sm text-white">CHECKOUT</button>
						<p className="text-sm font-normal text-gray-800 my-4">Got a <span className="text-sm cursor-pointer text-orange-400 font-normal">promo or a discount</span> code?  We've got you covered</p>
					</div>}
				</div>
			</section>
		</div>
	)
}

export default ProductDetails

