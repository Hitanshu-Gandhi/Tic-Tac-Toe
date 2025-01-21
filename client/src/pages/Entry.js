import { Typography, Stack, Container } from '@mui/material'

// components
import CustomButton from '../components/CustomButton'

// constants
import { blue, yellow } from '../constants/colors'

const LandingPage = () => {
  return (
    <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', px: 2, backgroundColor: '#f9fafb' }}>
      <Stack sx={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        <Typography
          sx={{
            fontFamily: 'Bilbo',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 400,
            color: '#333',
          }}
          color="text.primary"
        >
          Welcome to
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Bilbo',
            fontSize: { xs: '3.5rem', sm: '5rem', md: '6rem' },
            fontWeight: 700,
            color: '#333',
            mt: 1,
          }}
        >
          Tic Tac Toe
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Bilbo',
            fontSize: { xs: '2rem', sm: '3.5rem', md: '4rem' },
            fontWeight: 400,
            color: '#666',
            mt: -1,
          }}
        >
          A Classic Game
        </Typography>

        <Stack sx={{ mt: 4, spacing: 3 }}>
          <CustomButton
            color={yellow}
            path="/login"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              width: { xs: '80%', sm: '70%', md: '60%' },
              py: 1.5,
              borderRadius: 3,
              boxShadow: 3,
              '&:hover': { backgroundColor: yellow, transform: 'scale(1.05)' },
            }}
          >
            Login
          </CustomButton>

          <CustomButton
            color={blue}
            path="/register"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              width: { xs: '80%', sm: '70%', md: '60%' },
              py: 1.5,
              borderRadius: 3,
              boxShadow: 3,
              '&:hover': { backgroundColor: blue, transform: 'scale(1.05)' },
            }}
          >
            Register
          </CustomButton>
        </Stack>
      </Stack>
    </Container>
  )
}

export default LandingPage
