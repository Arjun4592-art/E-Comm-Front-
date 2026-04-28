import React from 'react'
import About from './components/About'
import Error from './components/Error'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './index.css'
import { Route, Routes } from 'react-router'
import ProductPage from './components/ProductPage'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/:productId' element={<ProductPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
