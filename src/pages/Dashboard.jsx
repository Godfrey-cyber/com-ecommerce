import React from 'react'
import DashHeader from "../components/DashHeader.jsx"
import SideBarRight from "../components/SideBarRight.jsx"
import SideBarLeft from "../components/SideBarLeft.jsx"
const Dashboard = () => {
	return (
		<section className="w-full h-full relative">
			<DashHeader />
			<div className="grid grid-cols-12">
				<SideBarLeft />
				<SideBarRight />
			</div>	
		</section>
	)
}

export default Dashboard