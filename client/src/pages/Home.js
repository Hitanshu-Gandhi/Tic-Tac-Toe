import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Button, Stack, Typography, IconButton, Avatar, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'

// Components
import CustomCard from '../components/CustomCard'

// Constants
import { url } from '../constants/url'

const Home = ({ events }) => {
  const [games, setGames] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${url}/api/game`, { withCredentials: true })
      .then((res) => {
        setGames(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [events])

  return (
    <Stack sx={{ px: 3, height: '100%', bgcolor: '#F0F4F8', overflow: 'auto' }}>
      
      {/* Header Section */}
      <Stack sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, mt: 2 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 600, color: '#2D3A3A' }}>Your Games</Typography>
      </Stack>

      {/* Empty State */}
      {games?.length === 0 ? (
        <Stack sx={{ height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Typography sx={{ fontFamily: 'Arial', fontSize: '3rem', fontWeight: 'bold', color: '#2D3A3A' }}>No Games Found</Typography>
          <Typography sx={{ fontFamily: 'Arial', fontSize: '1.2rem', color: '#757575', mt: 2 }}>It seems like you haven't started any games yet.</Typography>
          <Box sx={{ mt: 4 }}>
            <Link to="/new-game">
              <Button variant="contained" sx={{ px: 5, py: 2, fontSize: '1rem', borderRadius: 5, bgcolor: '#4CAF50', '&:hover': { bgcolor: '#45A049' } }}>
                Start a New Game
              </Button>
            </Link>
          </Box>
        </Stack>
      ) : (
        <Stack sx={{ mt: 3 }}>
          {games && games.map((game) => (
            <CustomCard key={game._id} game={game} />
          ))}
        </Stack>
      )}

      {/* Floating Action Button (New Game) */}
      <Stack sx={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Link to="/new-game">
          <IconButton sx={{
            bgcolor: '#6200EE',
            color: 'white',
            borderRadius: '50%',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#3700B3',
            },
            p: 2,
          }}>
            <AddIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Link>
      </Stack>

    </Stack>
  )
}

export default Home
