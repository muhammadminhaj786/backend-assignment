import Cookies from 'js-cookie'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRoute = () => {
  // return !Cookies.get("accessToken") ? (<Outlet />) : (<Navigate to={"/login"} />)
  return(
    <Outlet />
  )
}

export default AuthRoute