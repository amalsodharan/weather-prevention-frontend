import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import HealthIssues from "./HealthIssues";
import Preventions from "./Preventions";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import SafeIcon from '../assests/safe.svg';
import WbSunnyIcon from '../assests/cloud.svg';
import dangerIcon from '../assests/danger.svg';

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: 1200, gap: 5 }}>
        <Box sx={{ width: 550 }}>
            <Card sx={{  
                mx: "auto", 
                boxShadow: 4, 
                bgcolor: '#1E1E1E', 
                color: 'whitesmoke', 
                borderRadius: '40px',
                px: 1,
                py: 1, 
                height: 'auto',
            }}>
            <CardContent>
                <Box sx={{ width: '40%', height: '46px', bgcolor: '#742bec', borderRadius: '35px' }}>
                    <Typography variant="h5" gutterBottom sx={{ p: 1.3, fontWeight: '300', margin: 'auto',display: 'flex', alignItems: 'center', justifyContent: 'left', fontSize: '20px', fontFamily: 'Alan Sans',  }}>
                        <LocationPinIcon></LocationPinIcon> {weather.city}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h3" gutterBottom sx={{ paddingTop: 2, marginBottom : 0, fontWeight: '500',  fontFamily: 'Alan Sans', }}>
                            {weather.day}
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: '20px' }}>{weather.datetime}</Typography>
                        <Typography variant="h2" sx={{ paddingTop: 2, marginBottom : 0, fontWeight: '600',  fontFamily: 'Alan Sans', }}>
                            32.9 °C
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: '20px' }}>Humidity: {weather.humidity}</Typography>
                    </Box>
                    <Box>
                        <Box sx={{ width: '150px', height: '150px', margin: 'auto' }}>
                            <img src={WbSunnyIcon} alt="Weather Icon" style={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Typography variant="h5" gutterBottom sx={{ fontSize: '20px', textAlign: 'center' }}>Wind Speed: {weather.wind_speed}</Typography>
                    </Box>
                </Box>
            </CardContent>
            </Card>
            <Box sx={{ height: '20px' }}></Box>
             <Card sx={{  
                mx: "auto", 
                boxShadow: 4, 
                bgcolor: '#1E1E1E', 
                color: 'whitesmoke', 
                borderRadius: '40px',
                px: 1,
                py: 1, 
                height: 'auto', 
            }}>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography variant="h4" sx={{ marginBottom : 3, fontWeight: '300',  fontFamily: 'Alan Sans', }}>
                                Possible Health Issues
                            </Typography>
                        </Box>
                        <Box>
                            <Box sx={{ width: '100px', height: '100px', margin: 'auto' }}>
                                <img src={dangerIcon} alt="Weather Icon" style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Box>
                    </Box>
                    <HealthIssues issues={weather.possible_health_issues} />
                </CardContent>
            </Card>
        </Box>
        <Box sx={{ width: 600 }}>
            <Card sx={{  
                mx: "auto", 
                boxShadow: 4, 
                bgcolor: '#1E1E1E', 
                color: 'whitesmoke', 
                borderRadius: '40px',
                px: 1,
                py: 1, 
                height: 'auto'
            }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h4" sx={{ marginBottom : 3, fontWeight: '300',  fontFamily: 'Alan Sans', }}>
                            Remedies / Preventions
                        </Typography>
                    </Box>
                    <Box>
                        <Box sx={{ width: '100px', height: '100px', margin: 'auto' }}>
                            <img src={SafeIcon} alt="Weather Icon" style={{ width: '100%', height: '100%' }} />
                        </Box>
                    </Box>
                </Box>
                <Preventions items={weather.preventions} />
            </CardContent>
            </Card>
        </Box>
    </Box>
  );
}

export default WeatherCard;
