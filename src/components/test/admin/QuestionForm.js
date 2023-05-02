import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "./style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuestionForm() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [feedback, setFeedback] = useState('');
    const [picture, setPicture] = useState(null);
    const [score, setScore] = useState('');
    const [correctChoices, setCorrectChoices] = useState(0);
    const [numberOfChoices, setNumberOfChoices] = useState(0);
    const [isValidTitle, setValidTitle] = useState(true);
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [isFeedbackValid, setIsFeedbackValid] = useState(true);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setValidTitle(/^[a-zA-Z0-9\s]+$/.test(event.target.value) && /^[^0-9\s]/.test(event.target.value));
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setIsTypeSelected(true);
    }

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
        setIsFeedbackValid(event.target.value !== '');
    }

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);
        setPicture(file);
    };

    const handleScoreChange = (event) => setScore(event.target.value);

    const [choices, setChoices] = useState([]);

    const handleAddChoice = () => {
        const newChoice = { text: '', response: false };
        setChoices([...choices, newChoice]);
        setNumberOfChoices(numberOfChoices + 1);
    };

    const handleRemoveChoice = (index) => {
        setChoices(choices.filter((choice, i) => i !== index));
    };


    const handleChoiceTextChange = (index, event) => {
        const newChoices = [...choices];
        newChoices[index].text = event.target.value;
        setChoices(newChoices);
    };

    const handleResponseChange = (index, event) => {
        const newChoices = [...choices];
        newChoices[index].response = event.target.value;
        setChoices(newChoices);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValidTitle && isTypeSelected && isFeedbackValid && isPictureSelected) {
            try {
                // Create a new test object and save it to the database
                const formData = new FormData();
                formData.append('title', title);
                formData.append('type', type);
                formData.append('feedback', feedback);
                formData.append('picture', picture);
                formData.append('score', score);
                formData.append('correctChoices', correctChoices);
                formData.append('numberOfChoices', numberOfChoices);
                choices.forEach((choice, index) => {
                    formData.append(`choices[${index}][text]`, choice.text);
                    formData.append(`choices[${index}][response]`, choice.response);
                });
                formData.append('idQuiz', null);
                formData.append('idCourse', null);

                await axios.post('http://localhost:3001/question/addQuestion', formData);

                navigate("/dashboard/arrayTest");

            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleResetForm = () => {
        setTitle('');
        setType('');
        setFeedback('');
        setScore('');
        setPicture(null);
        setChoices([]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">Create a Question</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Question Title" fullWidth value={title} onChange={handleTitleChange} required />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Question Type</InputLabel>
                        <Select value={type} onChange={handleTypeChange} required>
                            <MenuItem value="multiple">Multiple Choice</MenuItem>
                            <MenuItem value="rating">Rating</MenuItem>
                            <MenuItem value="dropdown">Dropdown</MenuItem>
                            <MenuItem value="likert">Likert Scale</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Question Feedback" fullWidth value={feedback} onChange={handleFeedbackChange} multiline />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="number" label="Question Score" fullWidth value={score} onChange={handleScoreChange} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="file" fullWidth onChange={handlePictureChange} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Choices:</Typography>
                    {choices.map((choice, index) => (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={6}>
                                <TextField label={`Choice ${index + 1}`} fullWidth value={choice.text} onChange={(event) => handleChoiceTextChange(index, event)} required />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Choice Response</InputLabel>
                                    <Select value={choice.response} onChange={(event) => handleResponseChange(index, event)} required>
                                        <MenuItem value="true">True</MenuItem>
                                        <MenuItem value="false">False</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <button onClick={() => handleRemoveChoice(index)} style={{ width: 'auto', backgroundColor: 'red', color: 'white' }}>Remove</button>

                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={3}>
                    <button onClick={handleAddChoice} style={{ width: 'auto', color: 'white' }}>Add Choice</button>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Create Question</Button>
                    <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

                </Grid>
            </Grid>
        </form>
    )
}

export default QuestionForm;