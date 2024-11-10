import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const TodayWorkoutMessage = ({ message, LottieComponent }) => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
            width: '100%',
            boxSizing: 'border-box',
        }}
    >
        {/* Message Section */}
        <Card
            variant="outlined"
            sx={{
                flex: '0 1 75%', // Occupies 75% of the width
                padding: 2,
                marginRight: 2,
            }}
        >
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Today's Focus
                </Typography>
                <Typography variant="body1" component="p">
                    {message}
                </Typography>
            </CardContent>
        </Card>

        {/* Lottie Animation Section */}
        <Box
            sx={{
                flex: '0 1 20%', // Occupies 20% of the width
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {LottieComponent && (
                <Box sx={{ width: '100%', height: '100%' }}>
                    {LottieComponent}
                </Box>
            )}
        </Box>
    </Box>
);

export default TodayWorkoutMessage;
