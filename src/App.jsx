import { useState } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    
    </>
  )
}

export default App
