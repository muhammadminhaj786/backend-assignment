import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from'./components/SignUp'
import {Dashboard} from './components'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/dashboard' element={<Dashboard />}/>

    </Routes>
  )
}

export default App