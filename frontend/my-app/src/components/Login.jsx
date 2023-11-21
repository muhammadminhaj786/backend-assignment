import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../store/slices/authSlice';
import CircularIndeterminate from './CircularIndeterminate';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate("")
    const dispatch = useDispatch();
    const { loading} = useSelector((state)=>state.authSlice);
    console.log(loading)
    


    const handleLogin = async (e) => {

        const objToSend = {
            email,
            password
        }
        e.preventDefault(e)
        try {
            dispatch(loginAction({objToSend,navigate}))
            console.log("login")
            
        
        } catch (error) {
            console.log(error.message)
        }


    }


    return (
        loading ? <CircularIndeterminate /> : 
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