import React from 'react'
import {Header, MediaCard} from '../../index'
import Cookies from 'js-cookie'

const Home = () => {
  var sho = Cookies.get('accessToken')
  console.log(sho)
  return (
    <>
        <Header />
        <MediaCard />
    </>
  )
}

export default Home