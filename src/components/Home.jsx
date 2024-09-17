import React from 'react'
import Header from './Header'
import Section from './Section'
import Products from './Products'
import Savings from './Savings'
import Shop from './Shop'
import Gift from './ProductList'
import Contact from './Contact'
import Footer from './Footer'
import Cart from './Cart'
import ProductList from './ProductList'
import CartList from './CartList'


const Home = () => {
    return (
        <div>
            <>
                <div className="hero_area">
                    
                   
                    <Section/>
                    <Products/>
                    <Savings/>
                    <Shop/>
                    <Gift/>
                    <Contact/>
                    <Cart/>
                    <ProductList/>
                    <CartList/>
                   
                    
                 
                    
                </div>
            </>

        </div>
    )
}

export default Home
