import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "./style.css";
import axios from 'axios';

function QuizzesAdmin() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [numQuestions, setNumQuestions] = useState(0);
    const [picture, setPicture] = useState(null);
    const [isValidName, setValidName] = useState(true);
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = useState(true);
    const [chargeQuestionForm, setChargeQuestionForm] = useState(false);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
        setValidName(/^[a-zA-Z0-9\s]+$/.test(event.target.value) && /^[^0-9\s]/.test(event.target.value));
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setIsTypeSelected(true);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setIsDescriptionValid(event.target.value !== '');
    }

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);
        setPicture(file);
    };

    const handleSubmit  = async (event) => {
        event.preventDefault();

        if (isValidName && setIsTypeSelected && isDescriptionValid && isPictureSelected) {
            try{
                // Create a new quiz object and save it to the database
               
                const formData = new FormData();
                formData.append('name', name);
                formData.append('type', type);
                formData.append('nbrQuestion', 0);
                formData.append('nbrParticipant', 0);
                formData.append('description', description);
                formData.append('picture', picture);
                formData.append('idTest', null);

                await axios.post('http://localhost:3001/quiz/addQuiz', formData);

                navigate("/dashboard/arrayTest");

            } catch (error) {
                console.error(error);
            }
        }
        // submit form data here
    };

    const handleResetForm = () => {
        setName('');
        setType('');
        setDescription('');
        setPicture(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">Create a Quiz</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Quiz Name" fullWidth value={name} onChange={handleNameChange} error={!isValidName} helperText={!isValidName && 'Invalid name'} />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={!isTypeSelected}>
                        <InputLabel>Quiz Type</InputLabel>
                        <Select value={type} onChange={handleTypeChange}>
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="communication">Communication</MenuItem>
                            <MenuItem value="reading">Reading</MenuItem>
                        </Select>
                        {!isTypeSelected && <Typography color="error" variant="caption">Please select a type</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Quiz Description" fullWidth value={description} onChange={handleDescriptionChange} multiline error={!isDescriptionValid} helperText={!isDescriptionValid && 'Description cannot be empty'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField className='form-control' encType="multipart/form-data" type="file" fullWidth onChange={handlePictureChange} error={!isPictureSelected} helperText={!isPictureSelected && 'Please select an picture file'} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Number of Questions is a zero you can navigate to add questions <Link to="/dashboard/questionForm" >here</Link>.</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Create Quiz</Button>
                    <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

                </Grid>
                {/* additional form fields for adding questions would go here */}
            </Grid>



        </form >
    );
}

export default QuizzesAdmin;
