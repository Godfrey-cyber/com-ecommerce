import React from 'react'
import Header from "./Header.jsx"
import SmallHeader from "./SmallHeader.jsx"
import Showcase  from "./Showcase.jsx"
import Categories  from "./Categories.jsx"
import Deals  from "./Deals.jsx"
import RecentProducts  from "./RecentProducts.jsx"
const Home = () => {
	return (
		<div className="flex flex-col">
		<div className="sticky top-0 left-0 z-10 w-full">
    		<SmallHeader />
    		<Header />
		</div>
			<Showcase />
	        <Categories />
	        <RecentProducts />
	        <Deals />
		</div>
	)
}

export default Home