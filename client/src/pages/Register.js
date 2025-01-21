import React, { useState } from 'react'
import { Stack, Typography, TextField, Button, Container } from '@mui/material'
import BackButton from '../components/BackButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../constants/url'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')

  const notifyError = (message) => toast.error(message, {
    position: toast.POSITION.TOP_RIGHT
  })

  const notifySuccess = (message) => toast.success(message, {
    position: toast.POSITION.TOP_RIGHT
  })

  const handleRegister = () => {
    axios.post(`${url}/api/auth/register`, {
      email: email,
      password: password,
      name: name,
      username: username
    }, {
      withCredentials: true
    }).then((res) => {
      notifySuccess("Account created")
      navigate('/login')
    }).catch((err) => {
      notifyError(err.response.data.message || "Registration failed")
    })
  }

  return (
    <>
      <Container sx={{ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginY: '2rem' }}>
        <Stack sx={{ width: '100%', maxWidth: 550, bgcolor: 'white', borderRadius: 5, p: 4, boxShadow: 3 }}>
          <BackButton path="/" />

          <Stack sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 28, fontWeight: 600, color: '#333' }}>Create Account</Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 400, color: '#777', mt: 1 }}>Let's get to know you better!</Typography>
          </Stack>

          <Stack sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#333' }}>Your name</Typography>
            <TextField
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="false"
              variant="outlined"
              placeholder="Enter your name"
              sx={{ mb: 2 }}
            />
          </Stack>

          <Stack sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#333' }}>Username</Typography>
            <TextField
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="false"
              variant="outlined"
              placeholder="Enter your username"
              sx={{ mb: 2 }}
            />
          </Stack>

          <Stack sx={{ mb: 1 }}>
            <Typography sx={{ fontSize: 17, fontWeight: 500, color: '#333' }}>Email</Typography>
            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="false"
              type="email"
              variant="outlined"
              placeholder="Enter your email"
              sx={{ mb: 2 }}
            />
          </Stack>

          <Stack sx={{ mb: 1 }}>
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

          <Stack sx={{ mb: 1 }}>
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
              onClick={handleRegister}
            >
              Register
            </Button>
          </Stack>

          <Stack sx={{ mt: 2, textAlign: 'center' }}>
            <Typography sx={{ fontSize: 14, color: '#777' }}>Already have an account? <a href="/login" style={{ color: '#2575fc', textDecoration: 'none' }}>Login</a></Typography>
          </Stack>
        </Stack>
      </Container>
      <ToastContainer />
    </>
  )
}

export default Register
