import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from'./components/SignUp'
import {Home} from './components/pages'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/home' element={<Home />}/>

    </Routes>
  )
}

export default App