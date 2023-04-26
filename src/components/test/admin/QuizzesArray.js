import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@mui/material';
import './array.css';

function QuizzesArray() {
    const [quizzes, setQuizzes] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    let totalQuizzes = quizzes.length;
    const [dropdown, setDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [emptyQuizzes, setEmptyQuizzes] = useState(0);
    const navigate = useNavigate();

    const toggleDropdown = (quizId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [quizId]: !prevState[quizId],
        }));
        setShowDropdown(true);
    };


    useEffect(() => {
        axios
            .get(`http://localhost:3001/quiz/getQuizzesPagination?page=${currentPage}&perPage=${perPage}`)
            .then((response) => {
                setQuizzes(response.data.quizzes);
                setEmptyQuizzes(response.data.quizzes.length);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage, perPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePerPageChange = (event) => {
        setPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    };

    const handleRemove = (quizId) => {
        if (window.confirm("Are you sure you want to remove this quiz?")) {
            handleDelete(quizId);
        }
    };

    const handleDelete = (quizId) => {
        axios
            .delete('http://localhost:3001/quiz/deleteQuiz', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    id: quizId,
                }
            })
            .then(response => {
                console.log(response.data);
                // Update the quizzes array with the remaining quizzes
                setQuizzes(quizzes.filter(quiz => quiz._id !== quizId));
                setEmptyQuizzes(emptyQuizzes-1);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleUpdate = (quizId) => {
        // Code to update the quiz
        navigate(`/dashboard/updateQuiz/${quizId}`);
    };

    const handleAssign = (quizId) => {
        // Code to assign the quiz
        console.log(`Assign quiz ${quizId}`);
    };

    const handleCopy = (quizId) => {
        // Code to copy the quiz
        console.log(`Copy quiz ${quizId}`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Manage Quizzes
            </Typography>

            {(emptyQuizzes == 0) ? (
                <div>
                    there is no Quizzes yet you can add new quizzes <Link to="/dashboard/quizzes" >here</Link>.
                </div>
            ) : (
                <>
                    <div className="pagination">
                        <span>
                            Showing {quizzes.length} of {totalQuizzes} quizzes
                        </span>
                        <select value={perPage} onChange={handlePerPageChange}>
                            <option value="3">3 per page</option>
                            <option value="6">6 per page</option>
                            <option value="9">9 per page</option>
                        </select>
                        <ul>
                            {[...Array(totalPages)].map((_, i) => (
                                <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
                                    <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TableContainer component={Paper} className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-head">Name</TableCell>
                                    <TableCell className="table-head">Type</TableCell>
                                    <TableCell className="table-head">Number of Question</TableCell>
                                    <TableCell className="table-head">Description</TableCell>
                                    <TableCell className="table-head">Picture</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {quizzes.map((quiz) => (
                                    <TableRow key={quiz._id}>
                                        <TableCell>{quiz.name}</TableCell>
                                        <TableCell>{quiz.type}</TableCell>
                                        <TableCell>{quiz.nbrQuestion}</TableCell>
                                        <TableCell>{quiz.description}</TableCell>
                                        <TableCell>
                                            <img src={`http://localhost:3001/${quiz.picture.imgUrl}`} alt="Quiz" className="test-picture" />
                                        </TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[quiz._id]} onClick={() => toggleDropdown(quiz._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[quiz._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(quiz._id)}>Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleUpdate(quiz._id)}>Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleAssign(quiz._id)}>Assign</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleCopy(quiz._id)}>Copy</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    )}
                                                </Dropdown>
                                            </div>
                                        </TableCell>

                                    </TableRow>

                                ))}
                            </TableBody>

                        </Table >
                    </TableContainer >
                </>
            )}


        </div >
    );
}

export default QuizzesArray;
