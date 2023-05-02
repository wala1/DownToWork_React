import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "./style.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateQuestion() {
    const { id } = useParams();
    const [question, setQuestion] = useState({});
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);
    const [picture, setPicture] = useState(null);
    const [choices, setChoices] = useState([]);
    const [numberOfChoices, setNumberOfChoices] = useState('');
    const [correctChoices, setCorrectChoices] = useState(0);

    const [isValidTitle, setValidTitle] = useState(true);
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [isFeedbackValid, setIsFeedbackValid] = useState(true);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const [isScoreValid, setIsScoreValid] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchQuestion() {
            try {
                const response = await axios.get(`http://localhost:3001/question/getQuestionById/${id}`);

                setQuestion(response.data.question);
                setTitle(response.data.question.title);
                setType(response.data.question.type);
                setFeedback(response.data.question.feedback);
                setCorrectChoices(response.data.question.correctChoices);
                setNumberOfChoices(response.data.question.numberOfChoices);
                setPicture(`http://localhost:3001/${response.data.question.picture.imgUrl}`);
                setScore(response.data.question.score);
                setChoices(response.data.question.choices);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestion();
    }, [id]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setValidTitle(/^[a-zA-Z0-9\s]+$/.test(event.target.value) && /^[^0-9\s]/.test(event.target.value));
    };

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setIsTypeSelected(true);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
        setIsFeedbackValid(event.target.value !== '');
    };

    const handleScoreChange = (event) => {
        setScore(event.target.value);
        setIsScoreValid(event.target.value !== '');
    };

    const handleAddChoice = () => {
        setChoices((prevState) => [...prevState, { text: '', response: false }]);
        setNumberOfChoices((prevState) => prevState + 1);
    };

   const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);

        if (file) {
            setPicture(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidTitle && isTypeSelected && isFeedbackValid && isPictureSelected) {
            try {
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

                // const updatedQuestion = {
                //     title,
                //     type,
                //     feedback,
                //     picture,
                //     score,
                //     correctChoices,
                //     numberOfChoices,
                //     choices,
                //     idQuiz: null
                // };

                await axios.put(`http://localhost:3001/question/updateQuestion/${question._id}`, formData);

                navigate("/dashboard/arrayTest");
            } catch (error) {
                console.error(error);
                // handle error here
            }
        }
    };


    const handleResetForm = () => {
        setTitle('');
        setType('');
        setFeedback('');
        setPicture(null);
    }

    const handleRemoveChoice = (index) => {
        setChoices(choices.filter((choice, i) => i !== index));
    };


    const handleResponseChange = (index, event) => {
        const newChoices = [...choices];
        newChoices[index].response = event.target.value;
        setChoices(newChoices);
    };


    const handleChoiceTextChange = (index, event) => {
        const newChoices = [...choices];
        newChoices[index].text = event.target.value;
        setChoices(newChoices);
    };


    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">Update a Question</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Question Title" fullWidth value={title} onChange={handleTitleChange} error={!isValidTitle} helperText={!isValidTitle && 'Invalid title'} />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={!isTypeSelected}>
                        <InputLabel>Question Type</InputLabel>
                        <Select value={type} onChange={handleTypeChange}>
                            <MenuItem value="multiple">Multiple</MenuItem>
                            <MenuItem value="rating">Rating</MenuItem>
                            <MenuItem value="dropdown">Dropdown</MenuItem>
                            <MenuItem value="likert scale">Likert scale</MenuItem>
                        </Select>
                        {!isTypeSelected && <Typography color="error" variant="caption">Please select a type</Typography>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Question Feedback" fullWidth value={feedback} onChange={handleFeedbackChange} multiline error={!isFeedbackValid} helperText={!isFeedbackValid && 'Feedback cannot be empty'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="number" label="Question Score" fullWidth value={score} onChange={handleScoreChange} error={!isScoreValid} helperText={!isScoreValid && 'Score cannot be empty'} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type="file" fullWidth onChange={handlePictureChange} error={!isPictureSelected} helperText={!isPictureSelected && 'Please select an picture file'} />
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
                    <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Update Question</Button>
                    <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

                </Grid>
            </Grid>
        </form>
    );
}

export default UpdateQuestion;
