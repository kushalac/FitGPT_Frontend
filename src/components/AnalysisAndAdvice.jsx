import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const AnalysisAndAdvice = ({ analysis, insights, advices }) => (
    <Box sx={{ padding: 4 }}>
        {/* Title and Subtitle for Analysis Section */}
        <Box sx={{ marginBottom: 4 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Health and Performance Insights
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                A detailed overview of your recent activity, body metrics, and areas to focus on for better performance and recovery.
            </Typography>
        </Box>

        {/* Grid for Analysis and Insight */}
        <Grid container spacing={3}>
            {/* Analysis Section */}
            <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            Overall Analysis
                        </Typography>
                        <Typography variant="body1">{analysis}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* Insights Section */}
            <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                            Body Measurement Insight
                        </Typography>
                        <Typography variant="body1">{insights}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        {/* Advice Section */}
        {advices?.length > 0 && (
            <Box sx={{ marginTop: 6 }}>
                {/* Section Title */}
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    Personalized Advice
                </Typography>
                {/* Section Subtitle */}
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', marginBottom: 4 }}>
                    Tailored recommendations to optimize your progress and help with recovery.
                </Typography>
                {/* Advice Cards */}
                <Grid container spacing={3}>
                    {advices.map((advice, index) => (
                        <Grid item xs={12} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                        Advice #{index + 1}
                                    </Typography>
                                    <Typography variant="body1">{advice}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        )}
    </Box>
);

export default AnalysisAndAdvice;
