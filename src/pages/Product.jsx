import { useState, useEffect } from 'react'
import DashHeader from "../components/DashHeader.jsx"
import SideBarRight from "../components/SideBarRight.jsx"
import SideBarLeft from "../components/SideBarLeft.jsx"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../redux/apiCalls.js"
import { apiCatFetch } from "../redux/apiCalls"
import { BACKEND_URL } from "../requestMethods"
import axios from "axios"
import { categoryFailure, categorySuccess, categoryStart } from "../redux/categoryRedux.js"
const Product = () => {
	const [productData, setProductData] = useState({ title: "", desc: "", brand: "", model: "", category: "", subcategory: "", photo: "" })
	const [condition, setCondition] = useState("")
	const [categories, setCategories] = useState([])
	const [catId, setCatId] = useState("")
	const dispatch = useDispatch()
	const error = useSelector(state => state.category)
	const uploading = useSelector(state => state.category)
	//
	useEffect(() => {
        const addProduct = async () => {
		dispatch(categoryStart())
		try {
	    	const res = await axios.get(`${BACKEND_URL}/category/getAll`)
	    	dispatch(categorySuccess(res.data))
	    	setCategories(res.data.data)
	    	console.log(res.data.data)
	    	console.log(categories)
		} catch (err) {
			dispatch(categoryFailure())
			console.log(error)
		}
	}
	addProduct()
    }, [])
	
	const onChange = (event) => {
        setProductData(prev => ({...prev, [event.target.name]: event.target.value}))
        console.log(productData)
    }
    //buttons
    const handleChange = (event) => {
    	const checked = event.target.checked
    	if (event.target.name = "catId") {
    		setCatId(event.target.value)
    	} else {
    		setCondition(event.target.value)
    	}
    	console.log(checked)
    }
    // const handleCategory = (event) => {
    // 	// const checked = event.target.checked
    // 	if (event.target.name = "catId") {
    // 		setCatId(event.target.value)
    // 	} else {
    // 		setCondition(event.target.value)
    // 	}
    // 	console.log(checked)
    // }
    const data = {...productData, condition, catId}
    console.log(data)
    //submit
    const { title, desc, brand, model, subcategory, photo, category } = data
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!title || !desc || !brand || !model || !category || !subcategory || !category || !condition || !photo || !catId) return
        addProduct(dispatch, { title, desc, brand, model, category, subcategory, condition, photo })
        productData({title: "", desc: "", brand: "", model: "", category: "", subcategory: "", condition: "", photo: "", catId: ""})

    }

	return (
		<section className="w-full h-full relative">
			<DashHeader />
			<div className="grid grid-cols-12">
				<SideBarLeft />
				<form className="col-span-12 lg:col-span-10 flex flex-col space-y-4 w-full bg-green-50 p-4 md:p-12 lg:p-20">
				{/**/}
					<div className="flex flex-col h-36 w-full p-4 rounded-sm bg-white">
						<p className="text-sm text-gray-600 ">Product Images</p>
						<input onChange={onChange} value={photo} name="photo" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-10 md:h-12 " />
					</div>
					{/**/}
					<div className="flex flex-col space-y-4 bg-white rounded-sm p-4 w-full">
						<span className="flex flex-col space-y-3">
						<p className="text-sm font-medium text-gray-600">Product Details</p>
							<div className="flex flex-col space-y-3">
								<label className="text-sm text-gray-600" htmlFor="title">Product title</label>
								<input onChange={onChange} value={title} name="title" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-10 md:h-12 " />
							</div>
						</span>
						<span className="flex flex-col w-full">
							<p className="text-sm font-medium text-gray-600">Product Description</p>
							<div className="flex flex-col space-y-3">
								{/*<label className="text-sm text-gray-600" htmlFor="title">Product title</label>*/}
								<textarea onChange={onChange} value={desc} name="desc" cols="4" rows="12" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-10 md:h-12 " />
							</div>
						</span>
						<span className="flex flex-col w-full">
							<p className="text-sm font-medium text-gray-600">Product Category</p>
							<div className="flex flex-col space-y-3">
								{/*CATEGORIES*/}
								<select onChange={handleChange} name="catId" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-10 md:h-12 w-4/5 lg:w-full" placeholder="Add a category">
									{categories.map(cat => (
										<option className="text-sm font-normal cursor-pointer w-full overflow-x-hidden" key={cat._id} value={cat._id}>{cat.name}</option>
										))}
								</select>
							</div>
						</span>
						{/*PRODUCT CONDITION*/}
						<span className="flex flex-col space-y-2">
							<p className="text-sm font-medium text-gray-600">Product Condition</p>
							<div className="grid grid-rows-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 gap-y-3 lg:gap-x-4">
								{/*<label className="text-sm text-gray-600" htmlFor="title">Product title</label>*/}
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" onClick={handleChange} value="New" name="condition" id="new" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">New</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" onClick={handleChange} value="Custom" name="condition" id="custom" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Custom</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" onClick={handleChange} value="Refurblished" name="condition" id="refurblished" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Refurblished</p>
								</span>
								<span className="flex space-x-3 items-center rounded-sm shadow-sm p-3 shadow-gray-300 hover:shadow-gray-400 transition delay-300 hover:bg-cyan-50">
									<input type="radio" onClick={handleChange} value="Used" name="condition" id="used" className="cursor-pointer" placeholder="Add a category" />
									<p className="text-sm font-medium text-gray-600">Used</p>
								</span>
							</div>
							{/*<span className="flex flex-col">*/}
							<div className="grid grid-rows-2 gap-4 md:grid-cols-2 my-3 w-full">
								<span className="flex flex-col space-y-3 w-full lg:w-1/2">
									<label className="text-sm text-gray-600" htmlFor="title">Brand</label>
									<input onChange={onChange} name="brand" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-12" placeholder="Brand" />
								</span>
								<span className="flex flex-col space-y-3 w-full lg:w-1/2">
									<label className="text-sm text-gray-600" htmlFor="title">Model</label>
									<input onChange={onChange} name="model" className="text-sm font-medium text-gray-500 border border-gray-300 rounded-sm focus:outline-none px-2 py-2 w-full my-4 h-12" placeholder="Model" />
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