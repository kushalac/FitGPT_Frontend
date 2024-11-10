import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const Loader = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    const messages = [
        "Analyzing your data...",
        "Looking at your workouts...",
        "Generating your personalized plan...",
        "Crafting suggestions and advice...",
        "Almost ready... hang tight!",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 2000); // Change message every 2 seconds
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <Box
            id="lottie_render"
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
            }}
        >
            {/* Lottie Animation */}
            <iframe
                frameBorder="0"
                style={{
                    width: '300px',
                    height: '300px',
                    marginBottom: '20px',
                }}
                src="https://lottie.host/embed/67405d4e-3b75-49d6-bd54-1d19f9a01f5a/eSgTRHdYvg.json"
                title="Loader Animation"
            ></iframe>

            {/* Dynamic Message */}
            <Typography variant="h6" sx={{ color: '#555', marginBottom: 2, textAlign: 'center' }}>
                {messages[currentMessage]}
            </Typography>

            {/* Optional Loading Indicator */}
            <CircularProgress size={40} />
        </Box>
    );
};

export default Loader;
