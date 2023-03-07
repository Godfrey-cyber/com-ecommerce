import React from 'react'
import DashHeader from "../components/DashHeader.jsx"
import SideBarRight from "../components/SideBarRight.jsx"
import SideBarLeft from "../components/SideBarLeft.jsx"
const Product = () => {
	return (
		<section className="w-full h-full relative">
			<DashHeader />
			<div className="grid grid-cols-12">
				<SideBarLeft />
				<form className="col-span-10 flex flex-col space-y-4 w-full bg-green-50 p-20">
				{/**/}
					<div className="flex flex-col h-36 w-full p-4 rounded-sm bg-white">
						<p className="text-sm text-gray-600 ">Product Images</p>
					</div>
					{/**/}
					<div className="flex flex-col space-y-4 bg-white rounded-sm p-4">
						<span className="flex flex-col space-y-3">
						<p className="text-sm font-medium text-gray-600">Product Details</p>
							<div className="flex flex-col space-y-3">
								<label className="text-sm text-gray-600" htmlFor="title">Product title</label>
								<input className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-4/5 my-4 h-12 " />
							</div>
						</span>
						<span className="flex flex-col">
							<p className="text-sm font-medium text-gray-600">Product Description</p>
							<div className="flex flex-col space-y-3">
								{/*<label className="text-sm text-gray-600" htmlFor="title">Product title</label>*/}
								<textarea cols="4" rows="12" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-4/5 my-4 h-12 " />
							</div>
						</span>
						<span className="flex flex-col">
							<p className="text-sm font-medium text-gray-600">Product Category</p>
							<div className="flex flex-col space-y-3">
								{/*<label className="text-sm text-gray-600" htmlFor="title">Product title</label>*/}
								<input className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-4/5 my-4 h-12" placeholder="Add a category" />
							</div>
						</span>
						<span className="flex flex-col space-y-4">
							<p className="text-sm font-medium text-gray-600">Product Condition</p>
							<div className="grid grid-cols-4 gap-x-4">
								{/*<label className="text-sm text-gray-600" htmlFor="title">Product title</label>*/}
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" id="new" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">New</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" id="custom" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Custom</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" id="refurblished" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Refurblished</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" id="used" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Used</p>
								</span>
							</div>
							{/*<span className="flex flex-col">*/}
							<div className="flex items-center space-x-3 my-6 w-full">
								<span className="flex flex-col space-y-3 w-full">
									<label className="text-sm text-gray-600" htmlFor="title">Brand</label>
									<input className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-1/2 my-4 h-12" placeholder="Brand" />
								</span>
								<span className="flex flex-col space-y-3 w-full">
									<label className="text-sm text-gray-600" htmlFor="title">Model</label>
									<input className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-1/2 my-4 h-12" placeholder="Model" />
								</span>
							</div>
						{/*</span>*/}
						</span>
						
					</div>
				</form>
			</div>	
		</section>
	)
}

export default Product