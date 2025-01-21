import React, { useState } from 'react'
import { Stack, Typography, TextField, Button, Container } from '@mui/material'
import BackButton from '../components/BackButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../constants/url'

const Login = () => {
  const navigate = useNavigate()
  const notifyError = (message) => toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  })

  const notifySuccess = (message) => toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    axios.post(`${url}/api/auth/login`, {
      email: email,
      password: password
    }, {
      withCredentials: true
    }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('auth', true)
        navigate('/home')
        notifySuccess("Login Successful")
      }
      console.log(res)
    }).catch((err) => {
      console.log(err.response.data.message)
      notifyError(err.response.data.message || "Enter details correctly")
    })
  }

  return (
    <>
      <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack sx={{ width: '100%', maxWidth: 450, bgcolor: 'white', borderRadius: 3, p: 4, boxShadow: 3 }}>
          <BackButton path="/" />

          <Stack sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 28, fontWeight: 600, color: '#333' }}>Login</Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#777', mt: 1 }}>Please enter your details to continue.</Typography>
          </Stack>

          <Stack sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#333' }}>Email</Typography>
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="false"
              variant="outlined"
              placeholder="Enter your email"
              sx={{ mb: 2 }}
            />
          </Stack>

          <Stack sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#333' }}>Password</Typography>
            <TextField
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
              type="password"
              variant="outlined"
              placeholder="Enter your password"
              sx={{ mb: 2 }}
            />
          </Stack>

          <Stack sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                color: 'white',
                fontWeight: 600,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(to left, #ff7e5f, #feb47b)',
                }
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>

          <Stack sx={{ mt: 2, textAlign: 'center' }}>
            <Typography sx={{ fontSize: 14, color: '#777' }}>Don't have an account? <a href="/register" style={{ color: '#2575fc', textDecoration: 'none' }}>Sign Up</a></Typography>
          </Stack>
        </Stack>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Login
