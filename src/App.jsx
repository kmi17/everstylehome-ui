import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx";
import TopBar from "./Topbar.jsx";
import ProductCollectionPage from "./ProductCollectionPage";
import ProductDetailPage from "./ProductDetailPage.jsx";
import ProductBrandDetailPage from "./ProductBrandDetailPage.jsx";
import SpaceDetailPage from "./SpaceDetailPage";
import { QuoteProvider } from "./QuoteContext.jsx";
import QuoteCartPage from "./QuoteCartPage.jsx";
import QuoteRequestForm from "./QuoteRequestForm.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
    <QuoteProvider>
    <TopBar />
    <Navbar />

      <Routes>
        {/* Dynamic category page */}
        <Route path="/products/collections/:slug" element={<ProductCollectionPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/brands/:slug" element={<ProductBrandDetailPage />} />
        <Route path="/spaces/:slug" element={<SpaceDetailPage />} />
        <Route path="/quote-cart" element={<QuoteCartPage />} />
        <Route path="/request-quote" element={<QuoteRequestForm />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<div className="p-4">404 - Not Found</div>} />
      </Routes>
      </QuoteProvider>
      </BrowserRouter>
    </>
    
  )
}

export default App
