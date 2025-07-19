import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { CheckoutProvider } from "./context/Context";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CheckoutProvider>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="lista-produktów" element={<ProductList/>}/>
                <Route path="koszyk" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    </CheckoutProvider>
  )
}

export default App
