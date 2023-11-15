import React from 'react'
import {Header, MediaCard} from '../../index'
import Cookies from 'js-cookie'


const Home = () => {
  const token = Cookies.get("accessToken")
  console.log(token)
  
  return (
    <>
        <Header />
        <MediaCard />
    </>
  )
}

export default Home