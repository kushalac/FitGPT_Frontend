import React, { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    List,
    ListItem,
    ListItemText,
    Divider,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ExerciseDrawer = ({ open, onClose, exerciseDetails }) => {
    const [imagePopupOpen, setImagePopupOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setImagePopupOpen(true);
    };

    const handleCloseImagePopup = () => {
        setImagePopupOpen(false);
        setSelectedImage('');
    };

    if (!exerciseDetails) return null;

    return (
        <Box
            sx={{
                width: '90%',
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {/* Title */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                {exerciseDetails.name}
            </Typography>

            {/* Equipment, Force, and Mechanic */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    alignItems: 'center',
                }}
            >
                <Chip label={`Equipment: ${exerciseDetails.equipment}`} variant="outlined" />
                <Chip
                    label={exerciseDetails.category}
                    color="primary"
                    sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
                />
                <Chip
                    label={`Force: ${exerciseDetails.force}`}
                    sx={{ backgroundColor: '#ab47bc', color: 'white', textTransform: 'capitalize' }}
                />
                <Chip
                    label={`Mechanic: ${exerciseDetails.mechanic}`}
                    sx={{ backgroundColor: '#66bb6a', color: 'white', textTransform: 'capitalize' }}
                />
            </Box>

            {/* Instructions */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                Instructions
            </Typography>
            <Box sx={{ textAlign: 'justify', marginTop: 1 }}>
                <List dense>
                    {exerciseDetails.instructions.map((instruction, index) => (
                        <ListItem key={index} sx={{ display: 'list-item', paddingLeft: 2 }}>
                            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                                {`${index + 1}. ${instruction}`}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Primary and Secondary Muscles */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Primary Muscles
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 2 }}>
                {exerciseDetails.primaryMuscles.map((muscle, index) => (
                    <Chip key={index} label={muscle} color="primary" />
                ))}
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Secondary Muscles
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {exerciseDetails.secondaryMuscles.length > 0 ? (
                    exerciseDetails.secondaryMuscles.map((muscle, index) => (
                        <Chip key={index} label={muscle} color="secondary" />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        None
                    </Typography>
                )}
            </Box>

            <Divider sx={{ marginY: 3 }} />

            {/* Images */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                Exercise Images
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {exerciseDetails.images.map((image, index) => (
                    <img
                        key={index}
                        src={`https://testhealthdatahacksc.s3.us-west-2.amazonaws.com/images/${image}`} // Replace with actual base URL
                        alt={`Exercise Step ${index + 1}`}
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the drawer close logic
                            handleImageClick(`https://testhealthdatahacksc.s3.us-west-2.amazonaws.com/images/${image}`);
                        }}
                    />
                ))}
            </Box>

            {/* Dialog for Image Popup */}
            <Dialog open={imagePopupOpen} onClose={handleCloseImagePopup} maxWidth="md" fullWidth>
                <DialogTitle>
                    <Typography variant="h6">Exercise Image</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseImagePopup}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={selectedImage}
                        alt="Exercise Full View"
                        style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ExerciseDrawer;
