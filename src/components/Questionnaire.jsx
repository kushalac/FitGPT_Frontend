import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button, Typography, Paper, Slider } from '@mui/material';

const Questionnaire = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fitnessGoal: '',
        feelingToday: '',
        energyNeeds: '',
        workoutTime: 30, // Default time in minutes
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSliderChange = (e, newValue) => {
        setFormData((prev) => ({ ...prev, workoutTime: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass form data to the parent component
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                padding: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                {/* Title */}
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Tell Us About Yourself
                </Typography>

                {/* Form */}
                <form onSubmit={handleSubmit}>

                    {/* Fitness Goal Select */}
                    <TextField
                        label="Fitness Goal"
                        name="fitnessGoal"
                        select
                        value={formData.fitnessGoal}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    >
                        <MenuItem value="lose_weight">Lose Weight</MenuItem>
                        <MenuItem value="build_muscle">Build Muscle</MenuItem>
                        <MenuItem value="improve_endurance">Improve Endurance</MenuItem>
                    </TextField>

                    {/* How Are You Feeling Today? */}
                    <TextField
                        label="How are you feeling today?"
                        name="feelingToday"
                        value={formData.feelingToday}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        multiline
                        rows={2}
                    />

                    {/* Energy Needs / Schedule Today */}
                    <TextField
                        label="Energy Needs for the Day"
                        name="energyNeeds"
                        select
                        value={formData.energyNeeds}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="low_energy">Low Energy Day</MenuItem>
                        <MenuItem value="moderate_energy">Moderate Energy Day</MenuItem>
                        <MenuItem value="high_energy">High Energy Day</MenuItem>
                    </TextField>

                    {/* Workout Time Slider */}
                    <Box sx={{ marginY: 3 }}>
                        <Typography id="workout-time-slider" gutterBottom>
                            How much time do you have for your workout? (Minutes)
                        </Typography>
                        <Slider
                            value={formData.workoutTime}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            step={5}
                            min={10}
                            max={120}
                            aria-labelledby="workout-time-slider"
                        />
                    </Box>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            marginTop: 3,
                            padding: 1,
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Questionnaire;
