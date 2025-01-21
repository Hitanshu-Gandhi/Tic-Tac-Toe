import React, { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import BackButton from '../components/BackButton';
import { customInput } from '../styles/customInput';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../constants/url';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewGame = () => {
  const navigate = useNavigate();
  const [rival, setRival] = useState('');

  const notifyError = (message) =>
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const notifySuccess = (message) =>
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = () => {
    if (!rival) {
      notifyError('Please enter an email address.');
      return;
    }

    if (!validateEmail(rival)) {
      notifyError('Please enter a valid email address.');
      return;
    }

    axios
      .post(
        `${url}/api/game/new`,
        { rival },
        { withCredentials: true }
      )
      .then((res) => {
        notifySuccess('Game created successfully!');
        navigate('/home');
        console.log(res.data);
      })
      .catch((err) => {
        const error =
          err.response?.data?.message || 'An error occurred. Please try again.';
        notifyError(error);
        console.log(err);
      });
  };

  return (
    <>
      <Stack
        sx={{
          height: '100%',
          backgroundColor: '#F0F4F8',
          px: 3,
          py: 2,
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <BackButton path="/home" />

        <Stack sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600, color: '#333' }}>
            Start a new game
          </Typography>
          <Typography
            sx={{ fontSize: 28, fontWeight: 700, color: '#333', mt: 0.5 }}
          >
            Whom do you want to play with?
          </Typography>
        </Stack>

        <Stack sx={{ mt: 4 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#555' }}>
            Enter Rival's Email
          </Typography>
          <input
            onChange={(e) => setRival(e.target.value)}
            autoComplete="off"
            type="email"
            placeholder="Type their email here"
            style={{
              ...customInput,
              border: '1px solid #CCC',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '16px',
              marginTop: '8px',
            }}
          />
        </Stack>

        <Stack sx={{ mt: 'auto', alignItems: 'center' }}>
          <CustomButton
            onClick={handleClick}
            sx={{
              width: '100%',
              py: 1.5,
              fontSize: '1rem',
              borderRadius: '8px',
              backgroundColor: '#4CAF50',
              '&:hover': { backgroundColor: '#45A049' },
            }}
          >
            Start Game
          </CustomButton>
        </Stack>
      </Stack>

      <ToastContainer />
    </>
  );
};

export default NewGame;
