import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'

const AppRoutes = () => {
  return (
    <>
    <Routes element={<ProtectedRoute />}>
        <Route path='/Home' element={<Home />}/>
    </Routes>
    <Routes element={<AuthRoute />}>
        <Route path='/' element={<Login />}/>
        <Route path='signup' element={<SignUp />}/>
    </Routes>
    </>
    
  )
}

export default AppRoutes