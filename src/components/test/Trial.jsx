import React, { useState, Fragment, useEffect } from 'react';
import NavBar from '../shared/NavBar';
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './trial.css';
import FooterContact from '../shared/footerContact';
import Score from './score';
import Answers from './answers';
import Learderboard from './leaderboard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Trial() {

    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const userId = user._id;
    const [trial, setTrial] = useState({});
    const [quiz, setQuiz] = useState({});

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        async function fetchTrial() {
            console.log(userId);
            try {
                const response = await axios.get(`http://localhost:3001/trial/getTrialByIdUser/${userId}`);
                setTrial(response.data.trial);
                console.log(response.data);
                console.log(response.data.trial);
                console.log(response.data.trial.score);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTrial();
    }, [userId]);

    useEffect(() => {
        async function fetchQuiz() {
            try {
                const response = await axios.get(`http://localhost:3001/quiz/getQuizById/${trial.quizId}`);
                setQuiz(response.data);
                console.log("Quizz : " + response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchQuiz();
    }, [trial]);

    return (<>
        <Fragment className='home page body_style_fullscreen body_filled article_style_stretch layout_single-standard top_panel_style_dark top_panel_opacity_transparent top_panel_show top_panel_over menu_right user_menu_show sidebar_hide'>
            <div className="top_panel_fixed_wrap"></div>

            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                    {/* Navbar */} <NavBar />
                    {/* /Course info section */}
                    <div className="page_content_wrap" style={{ marginBottom: '19rem' }}>
                        <div className="content_wrap">
                            <div className="content" style={{ marginTop: '56px' }}>
                                <div className="isotope_filters masonry-page-3-columns inited">
                                    <Box sx={{ width: '100%' }} style={{ "marginTop": 29 }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#CCE4FF' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab style={{ width: '33%', color: 'black', fontFamily: 'cursive', fontSize: '1.3rem' }} label="Score" {...a11yProps(0)} />
                                                <Tab style={{ width: '33%', color: 'black', fontFamily: 'cursive', fontSize: '1.3rem' }} label="Answers" {...a11yProps(1)} />
                                                <Tab style={{ width: '33%', color: 'black', fontFamily: 'cursive', fontSize: '1.3rem' }} label="Learderboard" {...a11yProps(2)} />
                                            </Tabs>
                                        </Box>
                                        <TabPanel value={value} index={0} style={{ marginRight: '3px',backgroundColor: '#F7FAFD',width: '80.6rem', marginLeft: '-5px' }}>
                                            <Score trial={trial} quiz={quiz} />
                                        </TabPanel>
                                        <TabPanel value={value} index={1} style={{ marginRight: '3px',backgroundColor: '#F7FAFD',width: '80.6rem', marginLeft: '-5px' }}>
                                            <Answers trial={trial} />
                                        </TabPanel>
                                        <TabPanel value={value} index={2} style={{ marginRight: '3px',backgroundColor: '#F7FAFD',width: '80.6rem', marginLeft: '-5px' }}>
                                            <Learderboard trial={trial} />
                                        </TabPanel>

                                    </Box>
                                </div>

                                <div id="viewmore" className="pagination_wrap pagination_viewmore">
                                    <a
                                        href="#"
                                        id="viewmore_link"
                                        className="theme_button viewmore_button"
                                        style={{ display: "none" }}
                                    >
                                        <span className="icon-spin3 animate-spin viewmore_loading" />
                                        <span className="viewmore_text_1">LOAD MORE</span>
                                        <span className="viewmore_text_2">Loading ...</span>
                                    </a>
                                    <span className="viewmore_loader" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- /Content without sidebar -->*/}
                    {/* Footer parts */}
                    {/* <FooterWidget/> */}
                    {/* <FooterTestimonials/>  */}
                    <FooterContact />
                </div>
            </div>
        </Fragment>
    </>);
}
export default Trial;