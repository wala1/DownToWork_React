import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "../../test/admin/style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Form(){
    const [nameCourse, setNameCourse] = useState('');
    const [descriptionCourse, setDescriptionCourse] = useState('');
    const [imageCourse , setImageCourse] = useState(null);
    const [type , setType] = useState('');
    const [Level , setLevel] = useState('');
    const [topic , setTopic] = useState('');
    const [isValidNameCourse, setIsValidNameCourse] = useState(true);
    const [isValidDescriptionCourse, setIsValidDescriptionCourse] = useState(true);
    const [isImageCourseSelected, setIsImageCourseSelected] = useState(true);
    const [isTypeSelected, setIsTypeSelected] = useState(true);
    const [isLevelSelected, setIsLevelSelected] = useState(true);
    const navigate = useNavigate();
    const handleNameChange = (event) => {
        setNameCourse(event.target.value);
        setIsValidNameCourse(/^[a-zA-Z0-9\s]+&/);
    };
    const handleDescriptionChange = (event) => {
        setDescriptionCourse(event.target.value);
        setIsValidDescriptionCourse(event.target.value !== '');
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
        setIsTypeSelected(true);
    };
    const handleLevelChange = (event) => {
        setLevel(event.target.value);
        setIsLevelSelected(true);
    };
    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsImageCourseSelected(!!file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageCourse(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidNameCourse && isValidDescriptionCourse && isImageCourseSelected) {
            try {
                // Create a new topic object and save it to the database
                const course = {
                    nameCourse: nameCourse,
                    descriptionCourse: descriptionCourse,
                    imageCourse: imageCourse,
                    type : type,
                    Level : Level,
                    topic : null
                };
                const createResponse = await axios.post('http://localhost:3001/courses/add', course);

                console.log('course object created:', createResponse.data);
                console.log('course : ', course);
                console.log('\n');
                navigate("/dashboard/courses");

                // ... other code ...
            } catch (error) {
                console.error(error);
            }
        }
    };
     const handleResetForm = () => {
        setNameCourse('');
        setDescriptionCourse('');
        setImageCourse(null);
    }
    return(

        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">Add Course</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Topic Name" fullWidth value={nameCourse} onChange={handleNameChange} error={!isValidNameCourse} helperText={!isValidNameCourse && 'Invalid name'} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Topic Description" fullWidth value={descriptionCourse} onChange={handleDescriptionChange} multiline error={!setIsValidDescriptionCourse} helperText={!setIsValidDescriptionCourse && 'Description cannot be empty'} />
            </Grid>
            <Grid item xs={12}>
                    <FormControl fullWidth error={!isTypeSelected}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={handleTypeChange}>
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="pdf">PDF</MenuItem>
                            <MenuItem value="video">VIDEO</MenuItem>
                            <MenuItem value="game">GAME</MenuItem>
                        </Select>
                        {!isTypeSelected && <Typography color="error" variant="caption">Please select a type</Typography>}
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
                    <FormControl fullWidth error={!isLevelSelected}>
                        <InputLabel>Level</InputLabel>
                        <Select value={Level} onChange={handleLevelChange}>
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="beginner">Beginner</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                        {!isLevelSelected && <Typography color="error" variant="caption">Please select a Level</Typography>}
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField type="file" fullWidth onChange={handlePictureChange} error={!isImageCourseSelected} helperText={!isImageCourseSelected && 'Please select an picture file'} />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Save</Button>
                <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

            </Grid>
        </Grid>
    </form>
    );



}
export default Form;