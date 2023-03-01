import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { register } from "../redux/apiCalls"
// import { reset } from "../slices/authService.js"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({email: "", username: "", password: ""})
    const [toggle, setToggle] = useState(false)
    const handlePass = () => {
        setToggle(prev => !prev)
    }
    const onChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
        console.log(formData)
    }
    const { username, password, email } = formData
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!password || !email || !username) return
            checkPassword(password)
        console.log(username, email)
        register(dispatch, { username, email, password })
        setFormData({email: "", username: "", password: ""})
        navigate('/login')
    }
    const checkPassword = (password) => {
        if (password.length < 6) {
            return 'Password must be greater than 6!'
        }
    }
    return (
        <div className="head_section">
            <main className="main">
                <section className="register_grid">
                     {/*grid - 1*/}
                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-4 max-h-fit max-w-4/5">
                        <div className="flex space-x-2">
                            <span className="flex p-2">
                                <CheckCircleIcon className="icon_grid"/>
                            </span>
                            <span className="flex flex-col space-y-2">
                                <p className="register_header">Get started quickly</p>
                                <p className="text-sm font-normal text-grey-500">Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</p>
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <span className="flex p-2">
                                <CheckCircleIcon className="icon_grid"/>
                            </span>
                            <span className="flex flex-col space-y-2">
                                <p className="register_header">Support any business model</p>
                                <p className="text-sm font-normal text-grey-500">E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all within a unified platform.</p>
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <span className="flex p-2">
                                <CheckCircleIcon className="icon_grid"/>
                            </span>
                            <span className="flex flex-col space-y-2">
                                <p className="register_header">Join millions of businesses</p>
                                <p className="text-sm font-normal text-grey-500">Wave is trusted by ambitious startups and enterprises of every size.</p>
                            </span>
                        </div>
                    </div>  
                {/*grid 2*/}
                    <div className="flex flex-col col-span-12 md:col-span-6 space-y-6 shadow-md shadow-white rounded-md bg-white lg:px-20 px-10 py-10">
                        <p className="md:text-lg lg:font-bold font-semibold text-black ">
                            Create your Wave account
                        </p>
                        <form className="flex flex-col space-y-4 w-full max-h-fit">
                            <label className="label_text">Email:</label>
                            <span className="form_span border">
                                <input onChange={onChange} value={email} type="text" name="email" placeholder="example@gmail.com" className="form_input" id="email" />
                            </span>
                            <label className="label_text">Full Name:</label>
                            <span className="form_span border">
                                <input onChange={onChange} value={username} type="text" name="username" placeholder="John Doe" className="form_input" id="fullName" />
                            </span>
                            <label className={`label_text ${checkPassword ? 'text-red' : ""}`}>Password: </label>
                            <span className="form_span flex items-center justify-between border">
                                <input onChange={onChange} value={password} name="password" type={toggle ? "text" : "password"} name="password" placeholder="" className="form_input" id="password" />
                                { !toggle ? <EyeIcon onClick={handlePass} className="icon_grid cursor-pointer" /> : <EyeSlashIcon onClick={handlePass} className="icon_grid cursor-pointer" />}
                            </span>
                        </form>
                        <div className="flex flex-col space-y-6 my-12 items-center">
                    {/*check-box*/}
                            <div className="flex space-x-2">
                                <span className="flex p-2">
                                    <CheckCircleIcon className="icon_grid"/>
                                </span>
                                <span className="flex flex-col space-y-2">
                                    <p className="register_text">Get emails from Wave about product updates, industry news, and events. If you change your mind, you can unsubscribe at any time.</p>
                                    <p className="text-sm font-normal text-orange-400 cursor-pointer">Privacy Policy</p>
                                </span>
                            </div>
                            <button onClick={handleSubmit} type="submit" className="sign_up_button">Create account</button>
                            <p className="text-sm font-normal text-gray-800">Have an account? <span onClick={() => navigate("/login")} className="text-orange-400 cursor-pointer">Sign in</span></p>
                        </div>
                        {/*</form>*/}
                    </div>
                </section>
            </main>
          {/*<Footer />*/}
        </div>
    )
}

export default Register