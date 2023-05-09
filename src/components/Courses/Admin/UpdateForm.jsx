import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography } from '@mui/material';
import "../../test/admin/style.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateForm() {
    const {id}= useParams();
    const [topic , setTopic] = useState({});
    const [topicName, setTopicName] = useState('');
    const [TopicDesc, setTopicDesc] = useState('');
    const [topicImg , setTopicImg] = useState(null);
    const [isValidTopicName, setIsValidTopicName] = useState(true);
    const [isValidTopicDesc, setIsValidTopicDesc] = useState(true);
    const [isPictureSelected, setIsPictureSelected] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3001/topics/find/${id}`)
             .then((response) => {
                setTopic(response.data);
                setTopicName(response.data.topicName);
                setTopicDesc(response.data.TopicDesc);
                setTopicImg(response.data.topicImg);
                console.log("image :" + response.data.topicImg);


             })  
             .catch((err)=>{
                console.log(err);
             })
    },[id])
    const handleNameChange = (event) => {
        setTopicName(event.target.value);
        setIsValidTopicName(/^[a-zA-Z0-9\s]+&/);
    };
    const handleDescriptionChange = (event) => {
        setTopicDesc(event.target.value);
        setIsValidTopicDesc(event.target.value !== '');
    };
    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setIsPictureSelected(!!file);

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setTopicImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValidTopicName && isValidTopicDesc && isPictureSelected) {
            try {
                // Create a new topic object and save it to the database
                const topic = {
                    topicName: topicName,
                    TopicDesc: TopicDesc,
                    topicImg: topicImg,
                };
                const createResponse = await axios.post(`http://localhost:3001/topics/update/${id}`, topic);

                console.log('Topic object updated:', createResponse.data);
                console.log('topic : ', topic);
                console.log('\n');
                navigate("/dashboard/topics");

                // ... other code ...
            } catch (error) {
                console.error(error);
            }
        }
    };
     const handleResetForm = () => {
        setTopicName('');
        setTopicDesc('');
        setTopicImg(null);
    }
    return(
        <>
            <h1>hello</h1>
            <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">Update Topic</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Topic Name" fullWidth value={topicName} onChange={handleNameChange} error={!isValidTopicName} helperText={!isValidTopicName && 'Invalid name'} />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Topic Description" fullWidth value={TopicDesc} onChange={handleDescriptionChange} multiline error={!isValidTopicDesc} helperText={!isValidTopicDesc && 'Description cannot be empty'} />
            </Grid>
            <Grid item xs={12}>
                <TextField type="file" fullWidth defaultValue={topicImg} onChange={handlePictureChange} error={!isPictureSelected} helperText={!isPictureSelected && 'Please select an picture file'} />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="outlined" style={{ width: 'auto', 'backgroundColor': '#0069D9', color: 'white' }}>Save</Button>
                <Button type="reset" variant="outlined" onClick={handleResetForm} style={{ width: 'auto' }}>Reset</Button>

            </Grid>
        </Grid>
    </form>
        </>
    );


}
export default UpdateForm;