import React, { useEffect, useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "../../test/admin/style.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function VideoAdd(){
    const [nameVideo , setNameVideo] = useState('');
    const [descriptionVideo , setDescriptionVideo] = useState('');
    const [level , setLevel] = useState('');
    const [videoUrl , setVideoUrl] = useState('');
    const [topics, setTopics] = useState([]);
    const [topic, setTopic] = useState('');
    const [isValidNameVideo, setIsValidNameVideo] = useState(true);
    const [isValidDescriptionVideo, setIsValidDescriptionVideo] = useState(true);
    const [isValidVideoUrl, setIsValidVideoUrl] = useState(true);
    const [isLevelSelected, setIsLevelSelected] = useState(true);
    const [isTopicSelected, setIsTopicSelected] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:3001/topics`)
        .then((response) => {
            setTopics(response.data);
            console.log(response.data);
        })
        .catch((error)=> {
            console.log(error)
        });

    },[]);
    useEffect(()=>{
        console.log("level : " + level);
    },[level]);
    useEffect(()=>{
        console.log("topic : " + topic);
    },[topic]);
    const handleNameChange = (event) => {
        setNameVideo(event.target.value);
        setIsValidNameVideo(/^[a-zA-Z0-9\s]+&/);
    };
    const handleDescriptionChange = (event) => {
        setDescriptionVideo(event.target.value);
        setIsValidDescriptionVideo(event.target.value !== '');
    };
    const handleLevelChange = (event) => {
        setLevel(event.target.value);
        setIsLevelSelected(true);
    };
    const handleTopicChange = (event) => {
        setTopic(event.target.value);
        setIsTopicSelected(true);
    };
    const handleVideoUrlChange = (event) => {
        setVideoUrl(event.target.value);
        setIsValidVideoUrl(true);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidNameVideo && setIsValidDescriptionVideo ) {
            try {
                // Create a new topic object and save it to the database
                const video = {
                    nameVideo: nameVideo,
                    descriptionVideo: descriptionVideo,
                    level : level,
                    videoUrl : videoUrl,
                    topic : topic
                };
                const createResponse = await axios.post('http://localhost:3001/videosCourses/add-video', video);

                console.log('course object created:', createResponse.data);
                console.log('course : ', video);
                console.log('\n');
                navigate("/dashboard/videos");

                // ... other code ...
            } catch (error) {
                console.error(error);
            }
        }
    };
     const handleResetForm = () => {
        setNameVideo('');
        setDescriptionVideo('');
        setTopic([]);
    }
    return(

        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">Add Video</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Video Name" fullWidth value={nameVideo} onChange={handleNameChange} error={!isValidNameVideo} helperText={!isValidNameVideo && 'Invalid name'} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Video Description" fullWidth value={descriptionVideo} onChange={handleDescriptionChange} multiline error={!setIsValidDescriptionVideo} helperText={!setIsValidDescriptionVideo && 'Description cannot be empty'} />
            </Grid>
            <Grid item xs={12}>
                    <FormControl fullWidth error={!isLevelSelected}>
                        <InputLabel>Level</InputLabel>
                        <Select value={level} onChange={handleLevelChange}>
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="beginner">Beginner</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                        {!isLevelSelected && <Typography color="error" variant="caption">Please select a Level</Typography>}
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Video Url" fullWidth value={videoUrl} onChange={handleVideoUrlChange} multiline error={!setIsValidVideoUrl} helperText={!setIsValidVideoUrl && 'Video Url cannot be empty'} />
            </Grid>
            <Grid item xs={12}>
                    <FormControl fullWidth error={!isTopicSelected}>
                        <InputLabel>Topic</InputLabel>
                        <Select id="topic" value={topic} onChange={handleTopicChange}>
                             <MenuItem value="">Select a topic</MenuItem>
                              {topics.map((topic) => (
                                    <MenuItem key={topic._id} value={topic.topicName}>{topic.topicName}</MenuItem>
                              ))}
                        </Select>
                        {!isTopicSelected && <Typography color="error" variant="caption">Please select a Topic</Typography>}
                    </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="outlined" style={{ width: 'auto', 'background-color': '#0069D9', color: 'white' }}>Save</Button>
                <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

            </Grid>
        </Grid>
    </form>
    );






}
export default VideoAdd;