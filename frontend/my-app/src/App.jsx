import React from 'react'

import AppRoutes from './routes/AppRoutes'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/pages/Home'
import SignUp from './components/SignUp'


const App = () => {
  return (
    <>
     <AppRoutes />
      
    </>
  )
}

export default App