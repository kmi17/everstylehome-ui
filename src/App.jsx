import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx";
import TopBar from "./Topbar.jsx";
import ProductCollectionPage from "./ProductCollectionPage";
import ProductDetailPage from "./ProductDetailPage.jsx";
import BrandDetailPage from "./brandDetailPage.jsx";
import SpaceDetailPage from "./SpaceDetailPage";
function App() {

  return (
    <>
    <BrowserRouter>
    <TopBar />
    <Navbar />

      <Routes>
        {/* Dynamic category page */}
        <Route path="/products/collections/:slug" element={<ProductCollectionPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/brands/:slug" element={<BrandDetailPage />} />
        <Route path="/spaces/:slug" element={<SpaceDetailPage />} />
        {/* Catch-all 404 */}
        <Route path="*" element={<div className="p-4">404 - Not Found</div>} />
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
