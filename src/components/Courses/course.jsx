import React from 'react';
import { Link } from 'react-router-dom';
function Course({name , description , imageC , level ,pdf , topicName}) {
    return ( <>
     <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
                                <img
                                  src={imageC}
                                  alt=""
                                  style={{ height: "300px", width: "370px", objectFit: "cover" }}
                                />

                              </a>
                            </div>
                          </div>
                          <div className="post_content isotope_item_content">
                            <h4 className="post_title">
                              <a href="post-with-video.html">{name}</a>
                            </h4>
                            <div className="post_info">
                              <span className="post_info_item post_info_posted">
                                Level : {level}
                                <a href="#" className="post_info_date">
                                  {/* {test.nbrParticipant} */}
                                </a>
                              </span>
                              <span className="post_info_item post_info_posted_by">
                                Topic : {topicName}
                              
                               
                              </span>
                            </div>
                            <div className="post_descr_buttons_wrapper">
                              <div className="post_descr_wrapper">
                                <p>{description.substring(0, 100)}...</p>     
                                                        </div>
                              <div className="post_buttons_wrapper">
                                <Link
                                //   to={`/diagnostic/quizzes/${test._id}`}
                                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                >
                                  {pdf==="pdf" ? <i class="fa fa-file-pdf"></i> : <i class="fa fa-file-pdf"></i>  }
                                
                                </Link>
                              </div>
                            </div>

                          </div>
                        </article>
                      </div>
    

    </> );
}

export default Course;