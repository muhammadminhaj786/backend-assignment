import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const [name,setName] = useState('')
    const [phoneNo,setPhoneNo] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

  const handleSignUp = async (e) =>{
      e.preventDefault(e)
      const response = await axios.post("http://localhost:3001/api/createuser",{name,phoneNo,email,password})
      console.log(response)
      navigate('/')


  }


return (
  <div>
      <h1 style={{textAlign:'center'}}>Sign Up</h1>
      <form onSubmit={handleSignUp}>
      <div style={{width:'50%',border:'1px solid black',margin:'5% auto'}}>
      <div>
          <p>Name</p>
          <TextField  label="Emter Your Email" variant="outlined" onChange={(e)=>{setName(e.target.value)}} />   
      </div>
      <div>
          <p>Phone No</p>
          <TextField  label="Emter Your Email" variant="outlined" onChange={(e)=>{setPhoneNo(e.target.value)}} />   
      </div>
      <div>
          <p>Email</p>
          <TextField  label="Emter Your Email" variant="outlined" onChange={(e)=>{setEmail(e.target.value)}} />   
      </div>
          <div>
              <p>Password</p>
              <TextField label="Enter Your Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}} />
          </div>
          <div>
              <p>Alerady have account Please <Link to='/'>Login</Link> </p>
          </div>
          <div style={{marginTop:'5%'}}>
              <Button type='submit' variant="outlined">Sign Up</Button>
          </div>
      </div>
      </form>
  </div>
)
}

export default SignUp