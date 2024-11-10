import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const PageHeader = ({ workoutName, subtitle, workoutFocus }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            textAlign: 'center',
        }}
    >
        {/* Main Page Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FitnessCenterIcon fontSize="large" sx={{ color: '#1976d2' }} />
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#333' }}>
                {workoutName || 'FitGPT'}
            </Typography>
        </Box>

        {/* Subtitle */}
        {subtitle && (
            <Typography variant="h5" component="h2" sx={{ color: '#555', marginTop: 1 }}>
                {subtitle}
            </Typography>
        )}

        {/* Workout Focus */}
        {workoutFocus && (
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    color: '#1976d2',
                    marginTop: 2,
                    fontWeight: 'medium',
                }}
            >
                {workoutFocus}
            </Typography>
        )}

        {/* Divider */}
        <Divider sx={{ width: '80%', marginY: 2, borderColor: '#ddd' }} />
    </Box>
);

export default PageHeader;
