import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "./style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TestsAdmin() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState(null);
    const [isValidName, setValidName] = useState(true);
    const [isCategorySelected, setIsCategorySelected] = useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = useState(true);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const navigate = useNavigate();
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        setValidName(/^[a-zA-Z0-9\s]+$/.test(event.target.value) && /^[^0-9\s]/.test(event.target.value));
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setIsCategorySelected(true);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setIsDescriptionValid(event.target.value !== '');
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidName && isCategorySelected && isDescriptionValid && isPictureSelected) {
            try {
                // Create a new test object and save it to the database
                const test = {
                    name: name,
                    category: category,
                    nbrQuiz: 0,
                    nbrParticipant: 0,
                    description: description,
                    picture: picture,
                    creator: null
                };
                const createResponse = await axios.post('http://localhost:3001/test/addTest', test);

                console.log('Test object created:', createResponse.data);
                console.log('test', test);
                console.log('\n');
                navigate("/dashboard/arrayTest");

                // ... other code ...
            } catch (error) {
                console.error(error);
            }
        }
    };



    const handleResetForm = () => {
        setName('');
        setCategory('');
        setDescription('');
        setPicture(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">Create a Test</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Test Name" fullWidth value={name} onChange={handleNameChange} error={!isValidName} helperText={!isValidName && 'Invalid name'} />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={!isCategorySelected}>
                        <InputLabel>Test Category</InputLabel>
                        <Select value={category} onChange={handleCategoryChange}>
                            <MenuItem value="">Select a category</MenuItem>
                            <MenuItem value="level">Level Test</MenuItem>
                            <MenuItem value="diagnostic">Diagnostic Test</MenuItem>
                        </Select>
                        {!isCategorySelected && <Typography color="error" variant="caption">Please select a category</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Test Description" fullWidth value={description} onChange={handleDescriptionChange} multiline error={!isDescriptionValid} helperText={!isDescriptionValid && 'Description cannot be empty'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="file" fullWidth onChange={handlePictureChange} error={!isPictureSelected} helperText={!isPictureSelected && 'Please select an picture file'} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Create Test</Button>
                    <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

                </Grid>
            </Grid>
        </form>
    );
}

export default TestsAdmin;
