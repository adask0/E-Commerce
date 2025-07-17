import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="lista-produktów" element={<ProductList/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
