import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate("")

    const handleLogin = async (e) =>{
        e.preventDefault(e)
        const response = await axios.post('http://localhost:3001/api/login',{email,password})
        console.log(response)
        navigate("/dashboard")


    }
   

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Login</h1>
        <form onSubmit={handleLogin}>
        <div style={{width:'50%',border:'1px solid black',margin:'5% auto'}}>
        <div>
            <p>Email</p>
            <TextField  label="Emter Your Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} />   
        </div>
            <div>
                <p>Password</p>
                <TextField label="Enter Your Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div>
                <p>have'nt account Please <Link to='/signup'>Sign Up</Link> </p>
            </div>
            <div style={{marginTop:'5%'}}>
                <Button type='submit' variant="outlined">Login</Button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Login