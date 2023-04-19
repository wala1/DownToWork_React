import React, { useEffect, useState } from 'react';
import '../test/underNav.css';
import axios from 'axios';
import { error } from 'jquery';
import { Link, Route, Routes } from 'react-router-dom';
import Topic from './topic';
import Courses from './Courses';
function Topics() {
  const [topics,setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/topics`)
      .then((response) => {
        setTopics(response.data);
        setLoading(false);

        console.log(topics);

      })
      .catch((error) => { console.log(error);
        setLoading(false);
      });
    
  },[]);

  if (loading) {
    return <div>Loading...</div>;
  }


    return ( <>

       {/* Body */}
    <div className="body_wrap">
      <div className="page_wrap">
        <div className="top_panel_fixed_wrap" />
        {/* Content */}
        <div className="page_content_wrap">
          {/* Course info section */}
          <div className="content">
            <article className="post_item post_item_single_courses courses">
              <section className="post_featured bg_tint_dark">
                <img alt="" src="https://thumbs.dreamstime.com/z/diagnostic-test-1448933.jpg" style={{ width: '100%', height: '400px' }} />

                <div className="post_thumb_hover d-flex flex-column justify-content-center align-items-center">
                  <div className="post_icon icon-book-2" />

                  <div className="post_categories">
                    <a className="courses_group_link" href="#">
                      Topics
                    </a>
                  </div>
                  <h1 className="post_title entry-title">
                    All Topics
                  </h1>
                  <div className="post_button">
                    <a
                      href="free-lesson.html"
                      className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_medium"
                    >
                      View Topics
                    </a>
                  </div>
                </div>


              </section>
            </article>
          </div>
          {/* /Course info section */}
          <div className="page_content_wrap">
            <div className="content_wrap">
              <div className="content">
      

                <div className="pagination">
                  <span>
                    Showing 3 of 6 courses
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

                <div
                  className="isotope_wrap inited"
                  data-columns={3}
                  style={{ position: "relative", height: "1795.9px" }}
                >
                  <div className="d-flex flex-wrap">
                  
                  {topics.map((topic) => (
                    <Topic key={topic._id} name={topic.topicName} image={topic.topicImg} description={topic.TopicDesc} />
                  ))}

                   
                  </div>
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

        </div>
        {/* /Content */}
      </div>
    </div>
    {/* /Body */}
    <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top" />
    <div className="custom_html_section" />
    {/*
     */}


    <Routes>
      <Route path="/topic/courses/:name" element={<Courses />}></Route>
    </Routes>
  </> );
}

export default Topics;