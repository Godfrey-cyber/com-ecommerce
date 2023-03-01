import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
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
// import { loggedUser } from "./requestMethods"
function App() {
    const user = useSelector(selectUser)
    
    // console.log(user)
  return (
    <div className="min-h-screen w-full font-['Montserrat'] bg-zinc-100 text-sm text-semibold relative pb-4">
    
    <BrowserRouter>
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
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
