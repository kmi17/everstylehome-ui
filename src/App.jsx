import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx";
import TopBar from "./Topbar.jsx";
import ProductCollectionPage from "./ProductCollectionPage";


function App() {

  return (
    <>
    <BrowserRouter>
    <TopBar />
    <Navbar />

      <Routes>

        {/* Dynamic category page */}
        <Route path=":slug" element={<ProductCollectionPage />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<div className="p-4">404 - Not Found</div>} />
      </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
