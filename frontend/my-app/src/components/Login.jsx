import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate("")

    const handleLogin = async (e) => {
        e.preventDefault(e)
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password })
            console.log(response.data)
            if(response.data.status==true){
                console.log('successfuly login')
                navigate('/home')
            }else{
                alert(response.message)
            }
            
        
        } catch (error) {
            console.log(error.message)
        }


    }


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <form onSubmit={handleLogin}>
                <div style={{ width: '50%', margin: '5% auto' }}>

                    <div style={{ border:"2px solid black", width: "50%", margin: '10px auto' }}>
                        <div >
                            <p>Email</p>
                            <TextField style={{width:'100%'}} label="Emter Your Email" variant="outlined" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div>
                            <p>Password</p>
                            <TextField style={{width:'100%'}} label="Enter Your Password" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div>
                            <p>have'nt account Please <Link to='/signup'>Sign Up</Link> </p>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <Button style={{width:'100%'}} type='submit' variant="contained">Login</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login