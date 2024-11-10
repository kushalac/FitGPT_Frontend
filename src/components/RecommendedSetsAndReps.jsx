import React, { useState } from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Drawer,
} from '@mui/material';
import ExerciseDrawer from './ExerciseDrawer';

const RecommendedSetsAndReps = ({ title, subtitle, recommendedSetsAndReps }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedExerciseDetails, setSelectedExerciseDetails] = useState(null);

    const handleLearnMore = (details) => {
        setSelectedExerciseDetails(details);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedExerciseDetails(null);
    };

    return (
        <Box sx={{ padding: 4 }}>
            {/* Title and Subtitle for Workouts Section */}
            <Box sx={{ marginBottom: 4 }}>
                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    {title || 'Workouts'}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', marginBottom: 4 }}>
                    A selection of exercises tailored to help you achieve your fitness goals effectively.
                </Typography>
                {subtitle && (
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {/* Recommended Sets and Reps */}
            {recommendedSetsAndReps.length > 0 ? (
                <Grid container spacing={4}>
                    {recommendedSetsAndReps.map((exercise, index) => (
                        <Grid
                            item
                            xs={12} // 1 column on extra-small screens
                            sm={6} // 2 columns on small and larger screens
                            key={index}
                        >
                            <Card variant="outlined" sx={{ padding: 2 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                                        {exercise.exercise}
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table size="small" aria-label="sets and reps">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Sets/Duration</TableCell>
                                                    <TableCell>Weight</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {exercise.sets_and_reps.map((set, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>{set.split(' x ')[0]}</TableCell>
                                                        <TableCell>{set.split(' x ')[1]}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    {/* Learn More Button */}
                                    <Button
                                        variant="text"
                                        onClick={() => handleLearnMore(exercise.details)}
                                        sx={{ marginTop: 2 }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography variant="body1" sx={{ textAlign: 'center', marginTop: 4 }}>
                    No recommended sets and reps available.
                </Typography>
            )}

            {/* Drawer for additional content */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{
                    sx: { width: '60%' }, // Adjust drawer width
                }}
            >
                <ExerciseDrawer
                    open={drawerOpen}
                    onClose={handleCloseDrawer}
                    exerciseDetails={selectedExerciseDetails}
                />
            </Drawer>
        </Box>
    );
};

export default RecommendedSetsAndReps;
