import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Section from './components/Section'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Shop from './components/Shop'
import Savings from './components/Savings'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './Login'
import Search from './components/Search'
import Cart from './components/Cart'
import Signup from './components/Signup'
import DropDown from './components/ProductList'
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import { productProvider } from './components/ProductsContext'

function App() {

  const [isSidebar, setIsSidebar] = useState(true);
  const [currentPath, setCurrentPath] = useState("");

  return (
    <>
      <Router>
        <LocationSetter setCurrentPath={setCurrentPath} />
        {currentPath !== "/login" && currentPath !== "/" && <Header isSidebar={isSidebar} />}
        <productProvider>
        <MainRoutes />
        </productProvider>
        <Footer />
      </Router>
    </>
  );

  function LocationSetter({ setCurrentPath }) {
    const location = useLocation();

    React.useEffect(() => {
      setCurrentPath(location.pathname);
    }, [location, setCurrentPath]);

    return null;
  }


  function MainRoutes() {
    return (
      <>
          <Routes>
            <Route path='/' element={<Signup />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/savings' element={<Savings />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/footer' element={<Footer />}></Route>
            <Route path='/search' element={<Search />}></Route>
           <Route path='/add' element={<ProductList/>}></Route>
           <Route path='/list' element={<CartList/>}></Route>
          </Routes>
      </>
    )
  }
}

export default App
