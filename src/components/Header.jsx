import React from 'react'
import { ShoppingCartIcon, MagnifyingGlassIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTotal } from "../redux/cartRedux.js"

const Header = () => {
    const navigate = useNavigate()
    const total = useSelector(selectTotal)
    const products = useSelector(state => state.cart.products)
    // console.log(total)
	return (
		<header className="lg_header">
            <span className="flex space-x-4 items-center">
                <p onClick={() => navigate("/home")} className="font-bold text-2xl text-black cursor-pointer">.Store</p>
                <p className="font-semibold text-lg text-gray-800 cursor-pointer px-2 py-1 border-2 border-amber-400 rounded-md">Categories</p>
            </span>
            <form className="form">
            	<span className="form_span_2">
	                <MagnifyingGlassIcon className="h-5 text-gray-600"/>
	            </span>
	            <input type="text" className="form_input" placeholder="Search products" />
	            <span className="form_span_1">
              		<p className="text-sm text-white font-semibold cursor-pointer">Search</p>
              		{/*<ChevronDownIcon className="h-4 text-gray-700"/>*/}
            	</span>
            </form>
            <div className="header_span">
                {/*<p className="header_list">Products</p>*/}
                <span className="header_list">
                	<ArchiveBoxArrowDownIcon className="h-6 w-6 text-gray-800 cursor-pointer"/>
                </span>
                <div className="header_list flex space-x-5 items-center">
                    <span onClick={() => navigate("/products_cart")} className="cursor-pointer relative">
                    	<ShoppingCartIcon className="h-6 w-6 text-gray-800"/>
                        <span className="cart">{ products?.length > 9 ? "9+" : products?.length }</span>
                    </span>
                	<span className="flex flex-col space-y-0.25 cursor-pointer group">
                		<p className="text-xs font-normal text-gray-600 group-hover:text-orange-400 transition delay-300">Total</p>
                		<p className="text-xs font-normal text-gray-600 group-hover:text-orange-400 transition delay-300">Ksh. {total}</p>
            	   </span>
                </div>
            </div>
        </header>
	)
}

export default Header