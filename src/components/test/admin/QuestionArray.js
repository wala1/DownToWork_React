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

function QuestionArray() {
    const [questions, setQuestions] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    let totalQuestions = questions.length;
    const [dropdown, setDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [emptyQuestions, setEmptyQuestions] = useState(0);
    const navigate = useNavigate();

    const toggleDropdown = (questionId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [questionId]: !prevState[questionId],
        }));
        setShowDropdown(true);
    };


    useEffect(() => {
        axios
            .get(`http://localhost:3001/question/getQuestionsPagination?page=${currentPage}&perPage=${perPage}`)
            .then((response) => {
                setQuestions(response.data.questions);
                console.log(questions);
                setEmptyQuestions(response.data.questions.length);
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

    const handleRemove = (questionId) => {
        if (window.confirm("Are you sure you want to remove this question?")) {
            handleDelete(questionId);
        }
    };

    const handleDelete = (questionId) => {
        axios
            .delete('http://localhost:3001/question/delete', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    id: questionId,
                }
            })
            .then(response => {
                console.log(response.data);
                // Update the questions array with the remaining questions
                setQuestions(questions.filter(question => question._id !== questionId));
                setEmptyQuestions(emptyQuestions-1);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleUpdate = (questionId) => {
        // Code to update the questions
        navigate(`/dashboard/updateQuestions/${questionId}`);
    };

    const handleAssign = (questionId) => {
        // Code to assign the question
        console.log(`Assign question ${questionId}`);
    };

    const handleCopy = (questionId) => {
        // Code to copy the question
        console.log(`Copy question ${questionId}`);
    };

    const handleShowChoices= (questionId) =>{
        // Code to show the choices of question
        console.log(`show choices ${questionId}`);
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Manage Questions
            </Typography>

            {(emptyQuestions == 0) ? (
                <div>
                    there is no Questions yet you can add new questions <Link to="/dashboard/questions" >here</Link>.
                </div>
            ) : (
                <>
                    <div className="pagination">
                        <span>
                            Showing {questions.length} of {totalQuestions} questions
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
                                    <TableCell className="table-head">Title</TableCell>
                                    <TableCell className="table-head">Type</TableCell>
                                    <TableCell className="table-head">Score</TableCell>
                                    <TableCell className="table-head">Number Of Choices</TableCell>
                                    <TableCell className="table-head">Feedback</TableCell>
                                    <TableCell className="table-head">Picture</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {questions.map((question) => (
                                    <TableRow key={question._id}>
                                        <TableCell>{question.title}</TableCell>
                                        <TableCell>{question.type}</TableCell>
                                        <TableCell>{question.score}</TableCell>
                                        <TableCell>{question.numberOfChoices}</TableCell>
                                        <TableCell>{question.feedback}</TableCell>
                                        <TableCell>
                                            <img src={`http://localhost:3001/${question.picture.imgUrl}`} alt="question" className="test-picture" />
                                        </TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[question._id]} onClick={() => toggleDropdown(question._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[question._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(question._id)}>Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleUpdate(question._id)}>Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleAssign(question._id)}>Assign</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleCopy(question._id)}>Copy</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleShowChoices(question._id)}>Choices</Dropdown.Item>
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

export default QuestionArray;
