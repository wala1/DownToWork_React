import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Table, TableBody, Button, Select, MenuItem, TableCell, Pagination, Stack, TableContainer, TableHead, Modal, Box, TableRow, Paper, Typography } from '@mui/material';

import './array.css';

function QuestionArray() {
    const [questions, setQuestions] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [dropdown, setDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [emptyQuestions, setEmptyQuestions] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showModalQuiz, setShowModalQuiz] = useState(false);
    const [showModalChoices, setShowModalChoices] = useState(false);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionQuiz, setSelectedOptionQuiz] = useState('');
    const [courses, setCourses] = useState([]);
    const [questionId, setQuestionId] = useState('');
    const [question, setQuestion] = useState({});
    const [actionDone, setActionDone] = useState(false);

    const [page, setPage] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [perPage, setPerPage] = React.useState(10);
    const [totalPages, setTotalPages] = React.useState(0);

    const handleChange = (event, value) => {
        setPage(value);
        setCurrentPage(value);
    };

    const handleOptionChangeQuiz = (event) => {
        setSelectedOptionQuiz(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleCloseChoices = () => {
        setShowModalChoices(false);
        setQuestionId('');
    };

    const handleCancel = () => {
        setSelectedOption('');
        setShowModal(false);
        setQuestionId('');
    };

    const handleCancelQuiz = () => {
        setSelectedOptionQuiz('');
        setShowModalQuiz(false);
        setQuestionId('');
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3001/quiz`)
            .then((response) => {
                setQuizzes(response.data.quizzes);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAssignSubmitQuiz = (idQuiz) => {
        if (question.idQuiz == null) {
            axios
                .put(`http://localhost:3001/question/updateQuestionParameterId/${questionId}`, { ...question, idQuiz: idQuiz })
                .then((response) => {
                    console.log(response.data);
                    console.log("response data : " + response.data);
                    console.log("response data question : " + response.data.question);
                    axios.put(`http://localhost:3001/quiz/updateQuizQuestionNumber/${idQuiz}`);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            axios.put(`http://localhost:3001/quiz/updateQuizQuestionNumberDecrement/${question.idQuiz}`);
            axios
                .put(`http://localhost:3001/question/updateQuestionParameterId/${questionId}`, { ...question, idQuiz: idQuiz })
                .then((response) => {
                    console.log(response.data);
                    console.log("response data : " + response.data);
                    console.log("response data question : " + response.data.question);
                    axios.put(`http://localhost:3001/quiz/updateQuizQuestionNumber/${idQuiz}`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setShowModalQuiz(false);
    };


    const handleAssignSubmit = (idCourse) => {
        axios
            .get(`http://localhost:3001/question/getQuestionById/${questionId}`)
            .then((response) => {
                setQuestion(response.data);
            });
        console.log("question Id : " + questionId);
        console.log("Course Id : " + idCourse);
        axios
            .put(`http://localhost:3001/question/updateQuestionParameterId/${questionId}`, { ...question, idCourse: idCourse })
            .then((response) => {
                console.log(response.data);
                console.log("response data : " + response.data);
                console.log("response data question : " + response.data.question);
            })
            .catch((error) => {
                console.log(error);
            });
        setShowModal(false);
    };

    const toggleDropdown = (questionId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [questionId]: !prevState[questionId],
        }));
        setShowDropdown(true);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3001/courses/getCources`)
            .then((response) => {
                console.log(response.data.courses);
                setCourses(response.data.courses);
                console.log(courses);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [showModal]);


    useEffect(() => {
        axios
            .get(`http://localhost:3001/question/getQuestionsPagination?page=${currentPage}&perPage=${perPage}`)
            .then((response) => {
                setQuestions(response.data.questions);
                setEmptyQuestions(response.data.questions.length);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage, perPage, showModal, actionDone]);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
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
                setEmptyQuestions(emptyQuestions - 1);
                setActionDone(!actionDone);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleUpdate = (questionId) => {
        // Code to update the questions
        navigate(`/dashboard/updateQuestions/${questionId}`);
    };

    const handleAssignCourse = (questionId) => {
        // Code to assign the question
        console.log(`Assign question ${questionId}`);
        setQuestionId(questionId);
        setShowModal(true);
    };

    const handleAssignQuiz = (questionId) => {
        // Code to assign the question
        console.log(`Assign question to quiz ${questionId}`);
        setQuestionId(questionId);
        setShowModalQuiz(true);
    };

    const handleCopy = (questionId) => {
        if (window.confirm("Are you sure you want to make a copy?")) {
            handleMakeAcopy(questionId);
        }
    };

    const handleMakeAcopy = (questionId) => {
        axios.post(`http://localhost:3001/question/copy/${questionId}`)
            .then(response => {
                // Handle the response from the server
                setActionDone(!actionDone);
            })
            .catch(error => {
                // Handle errors
            });
    };

    const handleShowChoices = (questionId) => {
        // Code to show the choices of question
        console.log(`show choices ${questionId}`);
        setQuestionId(questionId);
        setQuestion(questions.find((question) => question._id === questionId) || {});
        setShowModalChoices(true);
    }

    return (
        <Stack spacing={2}>

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

                        <Pagination count={totalPages} page={page} onChange={handleChange} />
                        <Typography>Questions per page:</Typography>
                        <select
                            value={perPage}
                            onChange={(event) => {
                                setPerPage(Number(event.target.value));
                                setCurrentPage(1);
                                setPage(1);
                            }}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>

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
                                        <TableCell className="table-head">Course</TableCell>
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
                                                {courses.find((course) => course._id === question.idCourse)?.nameCourse}
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
                                                                <Dropdown.Item onClick={() => handleAssignCourse(question._id)}>Assign To Course</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => handleAssignQuiz(question._id)}>Assign To Quiz</Dropdown.Item>
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

                {/* MODAL FOR ASSIGN COURSE */}

                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            p: 3,
                            backgroundColor: 'white',
                            width: '90%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Assign Question
                        </Typography>
                        <Typography>
                            Are you sure you want to assign this question?
                        </Typography>
                        <Select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            sx={{ mt: 2 }}
                            renderValue={(selected) => (
                                <div>
                                    {selected ? (
                                        <Typography>{selected.nameCourse}</Typography>
                                    ) : (
                                        <Typography>Select a course here</Typography>
                                    )}
                                </div>
                            )}
                        >
                            {courses.map((course) => (
                                <MenuItem key={course._id} value={course}>
                                    {course.nameCourse}
                                </MenuItem>
                            ))}
                        </Select>


                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="outlined"
                                sx={{ mr: 1 }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={() => handleAssignSubmit(selectedOption._id)}>
                                Assign
                            </Button>
                        </Box>
                    </Box>
                </Modal>

                {/* MODAL FOR ASSIGN QUIZ */}

                <Modal
                    open={showModalQuiz}
                    onClose={() => setShowModalQuiz(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            p: 3,
                            backgroundColor: 'white',
                            width: '90%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Assign Question
                        </Typography>
                        <Typography>
                            Are you sure you want to assign this question?
                        </Typography>
                        <Select
                            value={selectedOptionQuiz}
                            onChange={handleOptionChangeQuiz}
                            sx={{ mt: 2 }}
                            renderValue={(selectedQuiz) => (
                                <div>
                                    {selectedQuiz ? (
                                        <Typography>{selectedQuiz.name}</Typography>
                                    ) : (
                                        <Typography>Select a Quiz here</Typography>
                                    )}
                                </div>
                            )}
                        >
                            {quizzes.map((quiz) => (
                                <MenuItem key={quiz._id} value={quiz}>
                                    {quiz.name}
                                </MenuItem>
                            ))}
                        </Select>


                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="outlined"
                                sx={{ mr: 1 }}
                                onClick={handleCancelQuiz}
                            >
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={() => handleAssignSubmitQuiz(selectedOptionQuiz._id)}>
                                Assign
                            </Button>
                        </Box>
                    </Box>
                </Modal>

                {/* MODAL FOR ASSIGN CHOICES */}

                <Modal
                    open={showModalChoices}
                    onClose={() => setShowModalChoices(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            p: 3,
                            backgroundColor: 'white',
                            width: '90%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            List of Choices
                        </Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Text</TableCell>
                                        <TableCell>Response</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {question.choices?.map((choice) => (
                                        <TableRow key={choice.text}>
                                            <TableCell component="th" scope="row">
                                                {choice.text}
                                            </TableCell>
                                            <TableCell> {choice.response ? "Yes" : "No"}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="contained" onClick={handleCloseChoices}>
                                Close
                            </Button>
                        </Box>
                    </Box>
                </Modal>



            </div >


        </Stack>
    );
}

export default QuestionArray;
