import React from 'react'

const SmallHeader = () => {
	return (
		<div className="small_header">
			<span className="small_header_span">
				<p className="small_header_list">Return Policy</p>
				<p className="small_header_list">Contact Us</p>
				<p className="small_header_list">Updates</p>
			</span>
			<span className="small_header_span">
				<p className="small_header_list">Track Order</p>
				{/*<p className="small_header_list">News</p>
				<p className="small_header_list">Updates</p>*/}
			</span>
			<span className="small_header_span">
				<p className="small_header_list">Sign Up</p>
				<p className="small_header_list">Sell on Store</p>
			</span>
		</div>
	)
}

export default SmallHeader