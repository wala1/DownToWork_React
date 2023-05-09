import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../../test/admin/array.css';
import ReactPlayer from 'react-player';
function VideoList(props){
    const [videos, setVideos] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [showDropdawon , setShowDropdown] = useState(false);
    const [emptyVideos , setEmptyVideos] = useState(0);
    const navigate = useNavigate();
    const toggleDropdown = (videoId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [videoId] : !prevState[videoId],
        }));
        setShowDropdown(true);
    };
    useEffect(()=>{
        axios
            .get(`http://localhost:3001/videosCourses/`)
            .then((response) => {
                setVideos(response.data);
                setEmptyVideos(response.data.length);
                console.log(emptyVideos);
            })
            .catch((error)=> {
                console.log(error)
            })

    },[]);
    const handleDelete = (videoId) => {
        axios
            .delete(`http://localhost:3001/videosCourses/deleteVideo/${videoId}`)
            .then(response => {
                console.log(response.data);
                // Update the course array with the remaining courses
                setVideos(videos.filter(video => video._id !== videoId));
                setEmptyVideos(emptyVideos-1);
            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleRemove = (videoId) => {
        if (window.confirm("Are you sure you want to remove this video?")) {
            handleDelete(videoId);
        }
    };
    const handleUpdate = (videoId) => {
        // Code to update the test
        navigate(`/dashboard/videosCourses/update-video/${videoId}`);
    };


    return(
        <>
            <Typography variant="h4" gutterBottom>
                Manage Video Learning <Link to='/dashboard/videos/add'><AddIcon /></Link> 
            </Typography>           
             {(emptyVideos == 0) ? (
                <div>
                    there is no Videoss yet you can add new topics <Link to="/dashboard/videos/add" >here</Link>.
                </div>
            ) : (
            <TableContainer component={Paper} className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-head">Video</TableCell>
                                    <TableCell className="table-head">Name</TableCell>
                                    <TableCell className="table-head">Description</TableCell>
                                    <TableCell className="table-head">Topic</TableCell>
                                    <TableCell className="table-head">Level</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {videos.map((video) => (
                                    <TableRow key={video._id}>
                                        <TableCell>
                                            <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
                                                <ReactPlayer url={video.videoUrl} width='100%' height='auto' />
                                            </div>
                                        </TableCell>
                                        <TableCell>{video.nameVideo}</TableCell>
                                        <TableCell>{video.descriptionVideo}</TableCell>
                                        <TableCell>{video.topic.topicName}</TableCell>
                                        <TableCell>{video.level}</TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[video._id]} onClick={() => toggleDropdown(video._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[video._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(video._id)}  >Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleRemove(video._id)}  >Update</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    )}
                                                </Dropdown>
                                            </div>
                                        </TableCell>

                                    </TableRow>

                                ))}
                            </TableBody>

                        </Table >
                    </TableContainer >)}
        </>
    );

}
export default VideoList;