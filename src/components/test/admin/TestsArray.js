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

function TestsArray() {
    const [tests, setTests] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    let totalTests = tests.length;
    const [dropdown, setDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [emptyTests, setEmptyTests] = useState(0);
    const navigate = useNavigate();

    const toggleDropdown = (testId) => {
        setDropdown((prevState) => ({
            ...prevState,
            [testId]: !prevState[testId],
        }));
        setShowDropdown(true);
    };


    useEffect(() => {
        axios
            .get(`http://localhost:3001/test/getTestPagination?page=${currentPage}&perPage=${perPage}`)
            .then((response) => {
                setTests(response.data.tests);
                setEmptyTests(response.data.tests.length);
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

    const handleRemove = (testId) => {
        if (window.confirm("Are you sure you want to remove this test?")) {
            handleDelete(testId);
        }
    };


    const handleDelete = (testId) => {
        axios
            .delete('http://localhost:3001/test/deleteTest', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    id: testId,
                }
            })
            .then(response => {
                console.log(response.data);
                // Update the tests array with the remaining tests
                setTests(tests.filter(test => test._id !== testId));
                setEmptyTests(emptyTests-1);
            })
            .catch(error => {
                console.error(error);
            });
    };


    const handleUpdate = (testId) => {
        // Code to update the test
        navigate(`/dashboard/updateTest/${testId}`);
    };

    const handleAssign = (testId) => {
        // Code to assign the test
        console.log(`Assign test ${testId}`);
    };

    const handleCopy = (testId) => {
        // Code to copy the test
        console.log(`Copy test ${testId}`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Manage Tests
            </Typography>

            {(emptyTests == 0) ? (
                <div>
                    there is no Tests yet you can add new tests <Link to="/dashboard/tests" >here</Link>.
                </div>
            ) : (
                <>
                    <div className="pagination">
                        <span>
                            Showing {tests.length} of {totalTests} tests
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
                                    <TableCell className="table-head">Category</TableCell>
                                    <TableCell className="table-head">Number of Quizzes</TableCell>
                                    <TableCell className="table-head">Number of Participants</TableCell>
                                    <TableCell className="table-head">Description</TableCell>
                                    <TableCell className="table-head">Picture</TableCell>
                                    <TableCell className="table-head">Action</TableCell>
                                </TableRow >
                            </TableHead >
                            <TableBody>
                                {tests.map((test) => (
                                    <TableRow key={test._id}>
                                        <TableCell>{test.name}</TableCell>
                                        <TableCell>{test.category}</TableCell>
                                        <TableCell>{test.nbrQuiz}</TableCell>
                                        <TableCell>{test.nbrParticipant}</TableCell>
                                        <TableCell>{test.description}</TableCell>
                                        <TableCell>
                                            <img src={`http://localhost:3001/${test.picture.imgUrl}`} alt="Test" className="test-picture" />
                                        </TableCell>
                                        <TableCell>
                                            <div className="action-dropdown">
                                                <Dropdown show={dropdown[test._id]} onClick={() => toggleDropdown(test._id)}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                                                    </Dropdown.Toggle>
                                                    {dropdown[test._id] && (
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => handleRemove(test._id)}>Remove</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleUpdate(test._id)}>Update</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleAssign(test._id)}>Assign</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => handleCopy(test._id)}>Copy</Dropdown.Item>
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

export default TestsArray;
