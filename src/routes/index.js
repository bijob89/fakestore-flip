import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import CartPage from '../pages/cart';
import HomePage from '../pages/home';
import ProductPage from '../pages/products';

function MainRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<ProductPage />} /> */}
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}

export default MainRoutes