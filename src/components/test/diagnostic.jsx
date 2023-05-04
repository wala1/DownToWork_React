import React, { useState, useEffect } from 'react';
import './underNav.css';
import axios from 'axios';
import Quizzes from './quizzes';
import { Link, Routes, Route } from 'react-router-dom';

function Diagnostic() {
  const [tests, setTests] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  let totalTests = tests.length;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/test/getTestPagination?page=${currentPage}&perPage=${perPage}`)
      .then((response) => {
        setTests(response.data.tests);
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

  return (<>

    {/* Body */}
    <div className="body_wrap">
      <div className="page_wrap">
        <div className="top_panel_fixed_wrap" />
        {/* Content */}
        <div className="page_content_wrap" style={{marginTop: '-98px'}}>
          {/* Course info section */}
          <div className="content">
            <article className="post_item post_item_single_courses courses">
              <section className="post_featured bg_tint_dark">
                <img alt="" src="https://thumbs.dreamstime.com/z/diagnostic-test-1448933.jpg" style={{ width: '100%', height: '400px' }} />

                <div className="post_thumb_hover d-flex flex-column justify-content-center align-items-center">
                  <div className="post_icon icon-book-2" />

                  <div className="post_categories">
                    <a className="courses_group_link" href="#">
                      Diagnostic Test
                    </a>
                  </div>
                  <h1 className="post_title entry-title">
                    Comprehensive Diagnostic Testing
                  </h1>
                  <div className="post_button">
                    <a
                      href="free-lesson.html"
                      className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_medium"
                    >
                      View Tests
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
                <div className="isotope_filters masonry-page-3-columns inited">
                  <a href="#" data-filter="*" className="isotope_filters_button">
                    All
                  </a>
                  <a href="#" data-filter=".flt_34" className="isotope_filters_button">
                    medical
                  </a>
                  <a
                    href="#"
                    data-filter=".flt_32"
                    className="isotope_filters_button active"
                  >
                    masonry
                  </a>
                  <a href="#" data-filter=".flt_33" className="isotope_filters_button">
                    english
                  </a>
                  <a href="#" data-filter=".flt_35" className="isotope_filters_button">
                    computer
                  </a>
                </div>

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

                <div
                  className="isotope_wrap inited"
                  data-columns={3}
                  style={{ position: "relative", height: "1795.9px" }}
                >
                  <div className="d-flex flex-wrap">
                    {tests.map((test) => (
                      <div key={test._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <article className="post_item post_item_masonry post_item_masonry_3 even">
                          <div className="post_featured">
                            <div
                              className="post_thumb"
                              data-image="http://placehold.it/2300x1640"
                              data-title="Introduction to Computer Science"
                            >
                              <a
                                className="hover_icon hover_icon_link"
                                href="post-with-video.html"
                              >
                                 <img style={{ height: "300px", width: "370px", objectFit: "cover" }} src={`http://localhost:3001/${test.picture.imgUrl}`} alt="Test" className="test-picture" />
                               
                              </a>
                            </div>
                          </div>
                          <div className="post_content isotope_item_content">
                            <h4 className="post_title">
                              <a href="post-with-video.html">{test.name}</a>
                            </h4>
                            <div className="post_info">
                              <span className="post_info_item post_info_posted">
                                Participant :
                                <a href="#" className="post_info_date">
                                  {test.nbrParticipant}
                                </a>
                              </span>
                              <span className="post_info_item post_info_posted_by">
                                Quiz Number :
                                <a href="#" className="post_info_author">
                                  {test.nbrQuiz}
                                </a>
                              </span>
                            </div>
                            <div className="post_descr_buttons_wrapper">
                              <div className="post_descr_wrapper">
                                <p>{test.description.substring(0, 100)}...</p>
                              </div>
                              <div className="post_buttons_wrapper">
                                <Link
                                  to={`/diagnostic/quizzes/${test._id}`}
                                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                >
                                  SHOW TEST
                                </Link>
                              </div>
                            </div>

                          </div>
                        </article>
                      </div>
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
      <Route path="/diagnostic/quizzes/id" element={<Quizzes />}></Route>
    </Routes>
  </>

  );
}

export default Diagnostic;