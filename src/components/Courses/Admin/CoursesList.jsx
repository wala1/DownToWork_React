import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../../test/admin/array.css';

function CoursesList(props) {
    const [courses, setCourses] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [showDropdawon , setShowDropdown] = useState(false);
    const [emptyCourses , setEmptyCourses] = useState(0);
    const navigate = useNavigate();
    const toggleDropdown = (courseId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [courseId] : !prevState[courseId],
        }));
        setShowDropdown(true);
    };
    useEffect(()=>{
        axios
            .get(`http://localhost:3001/courses`)
            .then((response) => {
                setCourses(response.data);
                setEmptyCourses(response.data.length);
                console.log(emptyCourses);
            })
            .catch((error)=> {
                console.log(error)
            })

    },[]);
    const handleDelete = (coursId) => {
        axios
            .delete(`http://localhost:3001/courses/delete/${coursId}`)
            .then(response => {
                console.log(response.data);
                // Update the course array with the remaining courses
                setCourses(courses.filter(cours => cours._id !== coursId));
                setEmptyCourses(emptyCourses-1);
            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleRemove = (courseId) => {
        if (window.confirm("Are you sure you want to remove this course?")) {
            handleDelete(courseId);
        }
    };
    const handleUpdate = (courseId) => {
        // Code to update the test
        navigate(`/dashboard/courses/update/${courseId}`);
    };




    return(
        <>
            <Typography variant="h4" gutterBottom>
                Manage Courses <Link to='/dashboard/courses/add'><AddIcon /></Link> 
            </Typography>           
             {(emptyCourses == 0) ? (
                <div>
                    there is no courses yet you can add new course <Link to="/dashboard/courses/add" >here</Link>.
                </div>
            ) : (
            <TableContainer component={Paper} className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-head">Picture</TableCell>
                                    <TableCell className="table-head">Name</TableCell>
                                    <TableCell className="table-head">Description</TableCell>
                                    <TableCell className="table-head">Level</TableCell>
                                    <TableCell className="table-head">Topic</TableCell>
                                    <TableCell className="table-head">Type</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {courses.map((course) => (
                                    <TableRow key={course._id}>
                                        <TableCell>
                                            <img src={course.imageCourse} alt="Test" className="test-picture" />
                                        </TableCell>
                                        <TableCell>{course.nameCourse}</TableCell>
                                        <TableCell>{course.descriptionCourse}</TableCell>
                                        <TableCell>{course.Level}</TableCell>
                                        <TableCell>{course.topic.topicName}</TableCell>
                                        <TableCell>{course.type}</TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[course._id]} onClick={() => toggleDropdown(course._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[course._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(course._id)} >Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleUpdate(course._id)} >Update</Dropdown.Item>
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
export default CoursesList;