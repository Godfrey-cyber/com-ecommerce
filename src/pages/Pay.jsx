import React, { useState, useEffect } from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { useSelector, useDispatch } from "react-redux"
import { items, resetCart } from "../redux/cartRedux"
import { selectUser } from "../redux/userRedux"
const stripePromise = loadStripe('pk_test_51K8P6eBAuY8XODRoZHtY0qruDSMWYS7isKfwfa8NjWrQCEvrC8HbCFx58mSV7kDSp8RSLTojLk3gQk4x80csOTqY00VX3TDeHd')

const KEY = "pk_test_51K8P6eBAuY8XODRoZHtY0qruDSMWYS7isKfwfa8NjWrQCEvrC8HbCFx58mSV7kDSp8RSLTojLk3gQk4x80csOTqY00VX3TDeHd"
const SECRET = "sk_test_51K8P6eBAuY8XODRosWWfFycGoPBx1MvWbUae8dfEA2PZv8ecA6DU2FnIlFtHsjDdnscKA5VzZElo21xyrFDjINZu006lt78eOz"
const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null)
	const products = useSelector(items)
	const user = useSelector(selectUser)
	// const { resetCart } = useSelector(state => state.cart)
	const dispatch = useDispatch()
	const onToken = (token) => {
		setStripeToken(token)
		console.log(token)
	}

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
			items: products
		})

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id
		})

		if (result.error) {
			return result.error.message
		}
		// dispatch(resetCart())
	}

	// useEffect(() => {
	// 	const paymentRequest = async () => {
	// 		try {
	// 			const response = await axios.post("http://localhost:5000/api/checkout/payment", { 
	// 				headers: { 
	// 					Authorization: `Bearer ${KEY}`,
	// 					"Content-Type": "application/json",
	// 				}, 
	// 				tokenId: stripeToken.id,
	// 				amount: 2000,
	// 				items
	// 			});
	// 			console.log(response.data)
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	};
	// 	stripeToken && paymentRequest()
	// }, [stripeToken])
	return (
		<div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
			{/*<StripeCheckout
				name=".Store"
				image="https://imgs.search.brave.com/K4aHvvjS58W9H666dh_lbaIJy0hYCpcm0UJnp3ZjssY/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/WXF6V1doOUxfejdG/YXVZdVhRZWR3SGFI/YSZwaWQ9QXBp"
				shippingAddress
				billingAddress
				amount={2000}
				token={onToken}
				stripeKey={KEY}
			>
				<button className="bg-orange-400 text-sm font-normal text-white rounded-sm px-4 py-2">Pay</button>
			</StripeCheckout>*/}
			<button onClick={createCheckoutSession} className="bg-orange-400 text-sm font-normal text-white rounded-sm px-4 py-2">Pay</button>
		</div>
	)
}

export default Pay