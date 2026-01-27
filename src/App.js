import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import Brands from './Components/Brands';
import PhoneInfo from './Components/PhoneInfo';
import ProductDetails from './Components/ProductDetails';
import Error from './Components/Error';
import { useState,useEffect } from 'react';
import CartItems from './Components/CartItems';
import phoneSpecs from './Components/PhoneData';
import { ToastContainer,toast } from 'react-toastify';
function App() {
  const [cartProduct,setCartProduct]=useState([]);
  const [allProducts, setAllProducts] = useState(phoneSpecs)||[];
  const [filteredProducts, setFilteredProducts] = useState(phoneSpecs);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    console.log(cartProduct);
    console.log(cartProduct.length);
    },[cartProduct]);
  const addToCart = (item) => {
          let isPresent = false;
          cartProduct.forEach((product)=>{
            if(product.id === item.id){
              isPresent = true;
            }})
          if(!isPresent) {
            setCartProduct((cartItems)=>([...cartItems,item]))            
            toast.success('Added to cart!')                    
          }
          else{
            toast.error('Already added')
            return;
          }
  };
  const handleChange = (item, d) =>{
		let ind = -1;
		cartProduct.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cartProduct;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCartProduct([...tempArr])
	}
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cartCount={cartProduct.length} products={allProducts} setFiltered={setFilteredProducts}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/:brand' element={<PhoneInfo/>}/>
          <Route path="/:brand/:model" element={<ProductDetails isLoggedIn={isLoggedIn} onAddToCart={addToCart}/>} />
          <Route path='/cart-items' element={<CartItems addedItems={cartProduct} setAddedItems={setCartProduct} quantity={handleChange}/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
        <ToastContainer style={{marginTop:'5rem',marginRight:'1rem'}} autoClose={2000} />
      </BrowserRouter>
    </>
  );
}

 export default App;
