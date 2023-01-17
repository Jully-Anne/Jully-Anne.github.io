import React from 'react'
import { Box, CssBaseline, Typography, Button } from '@mui/material'
import { useAuth } from 'react-oidc-context'

const AppUnprotected = () => {
  const auth = useAuth()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Typography>
          Bem vindo ao Eye of Sauron
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button variant="contained" color="success" onClick={() => {
          auth.signinRedirect()
        }}>Log in</Button>
      </Box>
    </Box>
  )
}

export default AppUnprotected
