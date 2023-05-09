import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import InfoSection from './infoSecion';
import Course from './Course';
import ReactPlayer from 'react-player';

function Courses() {
    const [courses, setCourses]=useState([]);
    const [level, setLevel]=useState('');
    const [showAll,setShowAll]= useState(true);
    const [showVideo,setShowVideo]= useState(false);
    const [showBeginner,setShowBeginner]= useState(false);
    const [showMedium,setShowMedium]= useState(false);
    const [showAdvanced,setShowAdvanced]= useState(false);
    const {name} = useParams();
    useEffect(() => {
        axios
          .get(`http://localhost:3001/courses/find-topic/${name}`)
          .then((response) => {
            setCourses(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

const onBeginner = () => {
  setLevel("beginner");
  setShowBeginner(true);
  setShowAll(false);
  setShowMedium(false);
  setShowAdvanced(false);
  axios
          .get(`http://localhost:3001/courses/find-topic-level/${name}/beginner`)
          .then((response) => {
            setCourses(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });

  console.log("Level : "+ level +  " / beginner  : "+showBeginner);
}
const onMedium = () => {
  setLevel("medium");
  setShowMedium(true);
  setShowAll(false);
  setShowAdvanced(false);
  setShowBeginner(false);
  axios
          .get(`http://localhost:3001/courses/find-topic-level/${name}/medium`)
          .then((response) => {
            setCourses(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
  console.log("Level : "+ level +  " / medium  : "+showMedium);
}
const onAdvanced = () => {
  setLevel("advanced");
  setShowAdvanced(true);
  setShowAll(false);
  setShowMedium(false);
  setShowBeginner(false);
  axios
          .get(`http://localhost:3001/courses/find-topic-level/${name}/advanced`)
          .then((response) => {
            setCourses(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
  console.log("Level : "+ level +  " / advanced  : "+showAdvanced);
}
const onAllCoursesClick = () => {
  setShowAll(true);
  setShowMedium(false);
  setShowAdvanced(false);
  setShowBeginner(false);
  axios
  .get(`http://localhost:3001/courses/find-topic/${name}`)
  .then((response) => {
    setCourses(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
  console.log("All : " + showAll );
}
    return ( <>
    {/* Body */}
    <div className="body_wrap">
      <div className="page_wrap">
        <div className="top_panel_fixed_wrap" />
        {/* Content */}
        <div className="page_content_wrap">
          <InfoSection nameTopic={name} description="Courses, videos and games" image="https://png.pngtree.com/background/20210711/original/pngtree-flat-education-office-stationery-background-picture-image_1116195.jpg"/>
  
          {/* /Course info section */}
          <div className="page_content_wrap">
            <div className="content_wrap">
              <div className="content">
                <div className="isotope_filters masonry-page-3-columns inited">
        
                  <a onClick={onAllCoursesClick} data-filter=".flt_34" className="isotope_filters_button active">
                    All
                  </a>
                  <a
                    onClick={onBeginner}
                    data-filter=".flt_32"
                    className="isotope_filters_button "
                  >
                    Beginner
                  </a>
                  <a
                    onClick={onMedium}
                    data-filter=".flt_32"
                    className="isotope_filters_button "
                  >
                    Medium
                  </a>
                  <a
                    onClick={onAdvanced}
                    data-filter=".flt_32"
                    className="isotope_filters_button "
                  >
                    Advanced
                  </a>
                 
                </div>

                <div className="pagination">
                  <span>
                    {/* Showing {tests.length} of {totalTests} tests */}
                  </span>
                  {/* <select value={perPage} onChange={handlePerPageChange}>
                    <option value="3">3 per page</option>
                    <option value="6">6 per page</option>
                    <option value="9">9 per page</option>
                  </select> */}
                  {/* <ul>
                    {[...Array(totalPages)].map((_, i) => (
                      <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
                        <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
                      </li>
                    ))}
                  </ul> */}
                </div>
                {/* ##################################################### */}
                { (showAll || showMedium || showAdvanced || showBeginner) &&
                
                <div
                  className="isotope_wrap inited"
                  data-columns={3}
                  style={{ position: "relative", height: "1795.9px" }}
                >
                  <div className="d-flex flex-wrap">
                    {courses.map((course) => (
                      <Course key={course._id} idC={course._id} topicName={name} level={course.Level} pdf={course.type} name={course.nameCourse} description={course.descriptionCourse} imageC={course.imageCourse} />
                      
                    ))}
                  </div>

                </div>
                 }

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

        </div>
        {/* /Content */}
      </div>
    </div>
    {/* /Body */}
    <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
    <div className="custom_html_section" />
    {/*
     */}


    {/* <Routes>
      <Route path="/diagnostic/quizzes/id" element={<Quizzes />}></Route>
    </Routes> */}
    </> );
    
}

export default Courses;