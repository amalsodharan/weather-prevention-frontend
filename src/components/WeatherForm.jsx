import React from "react";
import { Box, TextField, Button, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SiteLogo from '../../public/weather.svg';

function WeatherForm({ city, setCity, onSubmit, loading }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: "flex", gap: 2, justifyContent: "left", height: '20%' }}
    >
        <Paper
            elevation={0}
            sx={{
            p: '3px 6px',
            display: 'flex',
            alignItems: 'center',
            width: 550,
            height: 70,
            bgcolor: '#1E1E1E',
            borderRadius: '35px',
            }}
        >
            <IconButton sx={{ p: '10px', color: '#9E9E9E' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            <InputBase
            sx={{ 
                ml: 1, 
                flex: 1, 
                color: 'white',
                fontFamily: 'Poppins',
                fontWeight: '600'
            }}
            placeholder="Search City..."
            inputProps={{ 'aria-label': 'search city' }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            />
        </Paper>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ width: '60px', height: '60px', margin: 'auto' }}>
            <img src={SiteLogo} alt="Weather Icon" style={{ width: '100%', height: '100%' }} />
        </Box>
        <Typography
            variant="h5"
            sx={{
            marginBottom: 0,
            fontWeight: "600",
            fontFamily: "Alan Sans",
            textAlign: "center",
            }}
        >
            AuraCare
        </Typography>
    </Box>
    </Box>
  );
}

export default WeatherForm;
