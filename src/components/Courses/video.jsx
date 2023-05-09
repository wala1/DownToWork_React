import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
function Video(props) {
    return ( <>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                           <article className="post_item post_item_masonry post_item_masonry_3 even">
                             <div className="post_featured">
                               <div
                                 className="post_thumb"
                                 data-image="http://placehold.it/2300x1640"
                                 data-title="Introduction to Computer Science"
                               >
                                
                              <ReactPlayer   url={props.videoCourse.videoUrl} width="100%" height="100%" style={{ margin: "0 auto" }}/>

                               </div>
                             </div>
                             <div className="post_content isotope_item_content">
                               <h4 className="post_title">
                                 <a href="post-with-video.html">{props.videoCourse.nameVideo}</a>
                               </h4>
                               <div className="post_info">
                              <span className="post_info_item post_info_posted">
                                Level : {props.videoCourse.level}
                                <a href="#" className="post_info_date">
                                  {/* {test.nbrParticipant} */}
                                </a>
                              </span>
                              <span className="post_info_item post_info_posted_by">
                                Topic : {props.nameTopic}
                              
                               
                              </span>
                            </div>
                               <div className="post_descr_buttons_wrapper">
                                 <div className="post_descr_wrapper">
                                   <p>{props.videoCourse.descriptionVideo}</p>     
                                                           </div>
                                 <div className="post_buttons_wrapper">
                                   <Link
                                     className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                   >
                                    Play
                                   </Link>
                                 </div>
                               </div>
   
                             </div>
                           </article>
   
                         </div>
                      
       </>);
}
export default Video;