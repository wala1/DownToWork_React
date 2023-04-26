import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "./style.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateQuiz() {

    const { id } = useParams();
    const [quiz , setQuiz] = useState({});
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState(null);
    const [isValidName, setValidName] = useState(true);
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = useState(true);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const response = await axios.get(`http://localhost:3001/quiz/getQuizById/${id}`);
                
                setQuiz(response.data.quiz);
                setName(response.data.quiz.name);
                setType(response.data.quiz.type);
                setDescription(response.data.quiz.description);
                setPicture(`http://localhost:3001/${response.data.quiz.picture.imgUrl}`);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuiz();
    }, [id]);
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        setValidName(/^[a-zA-Z0-9\s]+$/.test(event.target.value) && /^[^0-9\s]/.test(event.target.value));
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setIsTypeSelected(true);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setIsDescriptionValid(event.target.value !== '');
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);
        setPicture(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidName && isTypeSelected && isDescriptionValid && isPictureSelected) {
            try {
                // Create a new quiz object and save it to the database
                const formData = new FormData();
                formData.append('name', name);
                formData.append('type', type);
                formData.append('nbrQuestion', quiz.nbrQuestion);
                formData.append('description', description);
                formData.append('picture', picture);
                    
                await axios.put('http://localhost:3001/quiz/updateQuiz/'+quiz._id, formData);

                navigate("/dashboard/arrayTest");

                // ... other code ...
            } catch (error) {
                console.error(error);
            }
        }
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
                    <Typography variant="h5">Update a Quiz</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Quiz Name" fullWidth value={name} onChange={handleNameChange} error={!isValidName} helperText={!isValidName && 'Invalid name'} />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={!isTypeSelected}>
                        <InputLabel>Quiz Type</InputLabel>
                        <Select value={type} onChange={handleTypeChange}>
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="communication">communication</MenuItem>
                            <MenuItem value="reading">reading</MenuItem>
                        </Select>
                        {!isTypeSelected && <Typography color="error" variant="caption">Please select a type</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Quiz Description" fullWidth value={description} onChange={handleDescriptionChange} multiline error={!isDescriptionValid} helperText={!isDescriptionValid && 'Description cannot be empty'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="file" fullWidth onChange={handlePictureChange} error={!isPictureSelected} helperText={!isPictureSelected && 'Please select an picture file'} />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Update Quiz</Button>
                    <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

                </Grid>
            </Grid>
        </form>
    );
}

export default UpdateQuiz;
