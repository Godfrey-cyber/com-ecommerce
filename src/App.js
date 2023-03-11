import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home.jsx"
import CategoryPage from "./pages/CategoryPage.jsx"
import SubCategoryPage from "./pages/SubCategoryPage.jsx"
import Pay from "./pages/Pay.jsx"
import Success from "./pages/Success.jsx"
import Failure from "./pages/Failure.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Cart from "./pages/Cart.jsx"
import { useSelector } from "react-redux"
import { selectUser } from "./redux/userRedux.js"
import HowToSell from "./pages/HowToSell.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Product from "./pages/Product.jsx"
import { useEffect } from "react"
// import { loggedUser } from "./requestMethods"
function App() {
    const user = useSelector(selectUser)
    let online = 'true'
    let checkOnline = online ? 'font-[Montserrat]' : 'font-serif'
    // console.log(user)
    const ScrollToTop = () => {
        const { pathname } = useLocation()
        useEffect(() => {
            window.scrollTo(0,0)
        }, [pathname])
        return null
    }
  return (
    <div className={`min-h-screen w-full ${checkOnline} bg-zinc-100 text-sm text-semibold relative pb-4 overlow-x-hidden`}>
    
    <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category_page/:id" element={<CategoryPage />} />
                <Route path="/product_detail/:id" element={<ProductDetails />} />
                <Route path="/subcategory_page/:id" element={<SubCategoryPage />} />
                <Route path="/products_cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/success" element={<Success />} />
                <Route path="/failure" element={<Failure />} />
                <Route path="/how_to_sell" element={<HowToSell />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Product />} />
            </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
