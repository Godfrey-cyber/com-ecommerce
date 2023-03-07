import { CheckCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectUser, loginSuccess } from "../redux/userRedux.js"
import { login } from "../redux/apiCalls"

const Login = () => {
    const [formData, setFormData] = useState({email: "", password: ""})
	const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(prev => !prev)
    }
    const { password, email } = formData
    const onChange = (event) => {
        setFormData(prev => ({...prev, [event.target.name]: event.target.value}))
    }
    const { isFetching, error } = useSelector(state => state.cart)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (loginSuccess) {
            login(dispatch, { password, email })
            setFormData({email: "", password: ""})
            navigate('/')
        } else {
            console.log("error occured")
        }
        
    }
    const user = useSelector(selectUser)
    // console.log(user)
    return (
        <div className="head_section">
            <main className="main">
                <section className="login_grid">
                    <div className="flex flex-col space-y-6 shadow-md shadow-white rounded-md bg-white px-6 lg:px-20 py-10 md:w-1/2 w-4/5 mx-auto">
                        <p className="register_header">
                            Sign in to your Wave account
                        </p>
                        <form  className="flex flex-col space-y-4 w-full max-h-fit">
                            <label className="label_text">Email:</label>
                            <span className="form_span border">
                                <input onChange={onChange} value={email} type="text" name="email" placeholder="example@gmail.com" className="form_input" id="email" />
                            </span>
                            <label className="label_text">Password:</label>
                            <span className="form_span flex items-center justify-between border">
                                <input onChange={onChange} value={password} type={ toggle ? "text" : "password" } name="password" placeholder="" className="form_input" id="password" />
                                { !toggle ? <EyeIcon onClick={handleToggle} className="icon_grid cursor-pointer" /> : <EyeSlashIcon onClick={handleToggle} className="icon_grid cursor-pointer" />}
                            </span>
                        </form>
                        <div className="flex flex-col space-y-6 my-12 items-center">
                    {/*check-box*/}
                            <div className="flex space-x-2">
                                <span className="flex">
                                    <CheckCircleIcon className="icon_grid"/>
                                </span>
                                <span className="flex flex-col space-y-2">
                                    <p className="register_text">Get emails from Wave about product updates, industry news, and events. If you change your mind, you can unsubscribe at any time.</p>
                                    <p className="text-sm font-normal text-orange-400 cursor-pointer">Privacy Policy</p>
                                </span>
                            </div>
                            <button disabled={isFetching} onClick={handleSubmit} type="submit" className="sign_up_button">Login</button>
                            <p className="text-sm font-normal text-orange-400 cursor-pointer">Forgot Password?</p>
                            <p className="text-sm font-normal text-gray-800">Don't have an account? <span onClick={() => navigate("/register")} className="text-orange-400 cursor-pointer">Sign Up</span></p>
                        </div>
                        
                    </div>
                </section>
            </main>
          {/*<Footer />*/}
        </div>
    )
}

export default Login