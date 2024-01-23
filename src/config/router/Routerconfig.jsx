import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/home'
import Login from '../../screens/login/login'
import Register from '../../screens/register/register'
import ResponsiveAppBar from '../../components/Navbar'

const Routerconfig = () => {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

    </Routes>
    </BrowserRouter>
  
  )
}


export default Routerconfig