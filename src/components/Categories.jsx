import React from 'react'

const Categories = () => {
	return (
		<section className="grid grid-cols-5 gap-4 px-20 my-12">
			<div className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
				<img className="h-4/5 w-4/5 object-fit mx-auto" src="https://skygarden.azureedge.net/media/original_images/smartphones_EZ8eMfR.png" alt="" />
				<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">Smartphones</p>
			</div>
			<div className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
				<img className="h-4/5 w-4/5 object-fit mx-auto" src="https://skygarden.azureedge.net/media/original_images/laptop_FDcFYvJ.png" alt="" />
				<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">Computing</p>
			</div>
			<div className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
				<img className="h-4/5 w-4/5 object-fit mx-auto" src="https://skygarden.azureedge.net/media/original_images/Categories3.png" alt="" />
				<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">Appliances</p>
			</div>
			<div className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
				<img className="h-4/5 w-4/5 object-fit mx-auto" src="https://skygarden.azureedge.net/media/original_images/televisions_mX7PUyv.png" alt="" />
				<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">Electronics</p>
			</div>
			<div className="flex flex-col space-y-1 cursor-pointer group rounded-md bg-white max-h-40 min-h-32 w-48">
				<img className="h-4/5 w-4/5 object-fit mx-auto" src="https://skygarden.azureedge.net/media/original_images/Categories4.png" alt="" />
				<p className="text-sm font-semibold my-4 text-gray-800 group-hover:text-orange-400 transition delay-400 text-center">Furniture</p>
			</div>
		</section>
	)
}

export default Categories