import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Cart from './pages/Card'

export default function MinhaRoutes() {
  return (

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" element={<Cart />} /> {/**Para poder mostrar o elemento na tela, utilize < /> */}
    </Routes>
  )
}
