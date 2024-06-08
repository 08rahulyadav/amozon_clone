import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import Register from './components/Register'
import Fetch from './components/Fetch'
import Update from './components/Update'
import AdminRegister from './components/Admin/AdminRegister'
import AdminLogin from './components/Admin/AdminLogin'
import Private from './components/Admin/Private'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<Private/>}>
              <Route path='/fetch' element={<Fetch/>}></Route>
              <Route path='/update/:id' element={<Update/>}></Route>
          </Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/contact' element={<h1>Contact Us</h1>}></Route>
          <Route path='/admin-register' element={<AdminRegister/>}></Route>
          <Route path='/admin-login' element={<AdminLogin/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App