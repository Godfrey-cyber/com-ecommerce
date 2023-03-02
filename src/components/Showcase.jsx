import React from 'react'

const Showcase = () => {
	return (
		<section className="grid grid-cols-12 w-full px-4 md:px-8 lg:px-16 xl:px-20 my-2 xl:my-4 xl:gap-6">
			<div className="col-span-12 xl:col-span-8 flex flex-col rounded-sm xl:rounded-md h-[200px] xl:h-[300px]">
				<img className="h-full w-full object-contain xl:object-cover rounded-sm xl:rounded-md" src="https://skygarden.azureedge.net/media/original_images/SG-Home-Page-Banner-2.jpg" alt="" />
			</div>
			<div className="hidden xl:col-span-4 flex flex-col space-y-3 rounded-md h-[400px]">
				<img className="h-1/2 w-full object-cover rounded-md" src="https://skygarden.azureedge.net/media/original_images/Web-Side-Banner-2_1.jpg" alt="" />
				<img className="h-1/2 w-full object-cover rounded-md" src="https://skygarden.azureedge.net/media/original_images/Web-Side-Banner_1.jpg" alt="" />
			</div>
		</section>
	)
}

export default Showcase