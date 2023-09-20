import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./pages/login.jsx"
import Home from './pages/home.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthDetails from './components/auth/AuthDetails'

//<AuthDetails />
function App() {


  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />} />
     <Route path="/SignUp" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
