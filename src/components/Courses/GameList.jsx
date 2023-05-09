import { Padding } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function GameList(){
    console.log("test");
    const handleButtonClick = () => {
      window.location.href = 'http://localhost:3002/';
    };
return(<>
<div
                  className="isotope_wrap inited"
                  data-columns={3}
                  style={{ position: "relative", height: "1795.9px" }}
                >
                  <div className="d-flex flex-wrap">
                



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
                                  src={require('../../assets/images/games/memoire.png')}
                                  alt=""
                                  style={{ height: "300px", width: "370px", objectFit: "cover" }}
                                />

                              </a>
                            </div>
                          </div>
                          <div className="post_content isotope_item_content">
                            <h4 className="post_title">
                              <a href="post-with-video.html">Memory Game</a>
                            </h4>
                            <div className="post_descr_buttons_wrapper">
                              <div className="post_descr_wrapper">
                                <p>Memory game : a card matching game where players flip over cards to find pairs.</p>     
                                                        </div>
                              <div className="post_buttons_wrapper">
                              <Link
                                  to='/memoryGame'
                                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                >
                                  Play 
                                
                                </Link>
                              </div>
                            </div>

                          </div>
                        </article>
                      </div>


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
                                  src={require('../../assets/images/games/chess.png')}
                                  alt=""
                                  style={{ height: "300px", width: "370px", objectFit: "cover" }}
                                />

                              </a>
                            </div>
                          </div>
                          <div className="post_content isotope_item_content">
                            <h4 className="post_title">
                              <a href="post-with-video.html">Chess Game</a>
                            </h4>
                            <div className="post_descr_buttons_wrapper">
                              <div className="post_descr_wrapper">
                                <p>a strategic board game played by two players with the objective of checkmating the opponent's king.</p>     
                                                        </div>
                              <div className="post_buttons_wrapper">
                              <Link target="_blank"
                              onClick={handleButtonClick}
                                 
                                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                >
                                  Play 
                                
                                </Link>
                              </div>
                            </div>

                          </div>
                        </article>
                      </div>

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
                                  src={require('../../assets/images/games/tictac.jpg')}
                                  alt=""
                                  style={{ height: "300px", width: "370px", objectFit: "cover" }}
                                />

                              </a>
                            </div>
                          </div>
                          <div className="post_content isotope_item_content">
                            <h4 className="post_title">
                              <a href="post-with-video.html">Tic-Tac-Toe Game</a>
                            </h4>
                            <div className="post_descr_buttons_wrapper">
                              <div className="post_descr_wrapper">
                                <p>Tic Tac Toe is a simple two-player game played on a 3x3 grid, where players take turns placing X's or O's in an attempt to get three in a row horizontally, vertically, or diagonally.</p>     
                                                        </div>
                              <div className="post_buttons_wrapper">
                                <Link
                                  to='/ticGame'
                                  className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                                >
                                  Play 
                                
                                </Link>
                              </div>
                              
                            </div>

                          </div>
                        </article>
                      </div>

                      















                  </div>

 </div>
   

   </>
);
}
export default GameList;
