import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../../test/admin/array.css';

function TopicsList(props) {
    const [topics, setTopics] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [showDropdawon , setShowDropdown] = useState(false);
    const [emptyTopics , setEmptyTopics] = useState(0);
    const navigate = useNavigate();
    const toggleDropdown = (topicId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [topicId] : !prevState[topicId],
        }));
        setShowDropdown(true);
    };
    useEffect(()=>{
        axios
            .get(`http://localhost:3001/topics`)
            .then((response) => {
                setTopics(response.data);
                setEmptyTopics(response.data.length);
                console.log(emptyTopics);
            })
            .catch((error)=> {
                console.log(error)
            })

    },[]);
    const handleDelete = (topicId) => {
        axios
            .delete(`http://localhost:3001/topics/delete/${topicId}`)
            .then(response => {
                console.log(response.data);
                // Update the topics array with the remaining topics
                setTopics(topics.filter(test => test._id !== topicId));
                setEmptyTopics(emptyTopics-1);
            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleRemove = (topicId) => {
        if (window.confirm("Are you sure you want to remove this topic?")) {
            handleDelete(topicId);
        }
    };
    const handleUpdate = (topicId) => {
        // Code to update the test
        navigate(`/dashboard/topics/update/${topicId}`);
    };




    return(
        <>
            <Typography variant="h4" gutterBottom>
                Manage Topics <Link to='/dashboard/topics/add'><AddIcon /></Link> 
            </Typography>           
             {(emptyTopics == 0) ? (
                <div>
                    there is no Topics yet you can add new topics <Link to="/dashboard/topics/add" >here</Link>.
                </div>
            ) : (
            <TableContainer component={Paper} className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-head">Picture</TableCell>
                                    <TableCell className="table-head">Name</TableCell>
                                    <TableCell className="table-head">Description</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {topics.map((topic) => (
                                    <TableRow key={topic._id}>
                                        <TableCell>
                                            <img src={topic.topicImg} alt="Test" className="test-picture" />
                                        </TableCell>
                                        <TableCell>{topic.topicName}</TableCell>
                                        <TableCell>{topic.TopicDesc}</TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[topic._id]} onClick={() => toggleDropdown(topic._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[topic._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(topic._id)} >Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleUpdate(topic._id)} >Update</Dropdown.Item>
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
export default TopicsList;