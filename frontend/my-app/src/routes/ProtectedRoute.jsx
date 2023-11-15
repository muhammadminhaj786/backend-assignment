import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  // return Cookies.get("accessToken") ? (<Outlet />) : (<Navigate to={"/home"} />)
  return (
    <Outlet />
  )
}

export default ProtectedRoute