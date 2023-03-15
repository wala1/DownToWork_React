import React, { useState, useEffect } from 'react';
import Nav from '../shared/NavBar';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const myStyle = {
    paddingTop: '121px',
    // Add any other styles you want to apply here
  };

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  const navigate = useNavigate();
  const handleDeleteAccount= async (response) => {
    navigate("/delete-account");
  }

  const handleSettings= async (response) => {
    navigate("/Edit");
  }
  const handleDesactivate= async (response) => {
    navigate("/desac");
  }

  return (<>
    {/* Mirrored from demo.themesberg.com/spaces/html/profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 10 Mar 2023 21:48:40 GMT */}
    {/* Added by HTTrack */}
    <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
    {/* /Added by HTTrack */}
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Spaces - Public Profile</title>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,shrink-to-fit=no"
    />
    <meta name="title" content="Spaces - Public Profile" />
    <meta name="author" content="Themesberg" />
    <meta
      name="description"
      content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."
    />
    <meta
      name="keywords"
      content="bootstrap, bootstrap 4 template, directory listing bootstrap, bootstrap 4 listing, bootstrap listing, bootstrap 4 directory listing template, vector map, leaflet js template, mapbox theme, mapbox template, dashboard, themesberg, user dashboard bootstrap, dashboard bootstrap, ui kit, bootstrap ui kit, premium bootstrap theme"
    />
    <link
      rel="canonical"
      href="../../../themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="../../pixel-pro/index-2.html" />
    <meta property="og:title" content="Spaces - Public Profile" />
    <meta
      property="og:description"
      content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."
    />
    <meta
      property="og:image"
      content="../../../themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"
    />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="../../pixel-pro/index-2.html" />
    <meta property="twitter:title" content="Spaces - Public Profile" />
    <meta
      property="twitter:description"
      content="Premium Directory Listing Bootstrap 4 Template featuring 37 hand-crafted pages, a dashboard an Mapbox integration. Spaces also comes with a complete UI Kit featuring over 700 components by Themesberg."
    />
    <meta
      property="twitter:image"
      content="../../../themesberg.s3.us-east-2.amazonaws.com/public/products/spaces/thumbnail.jpg"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="../assets/img/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../assets/img/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../assets/img/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="../assets/img/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="../assets/img/favicon/safari-pinned-tab.svg"
      color="#ffffff"
    />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <link
      type="text/css"
      href="../vendor/%40fortawesome/fontawesome-free/css/all.min.css"
      rel="stylesheet"
    />
    <link
      type="text/css"
      href="../vendor/leaflet/dist/leaflet.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="../vendor/%40fancyapps/fancybox/dist/jquery.fancybox.min.css"
    />
    <link rel="stylesheet" href="../vendor/jqvmap/dist/jqvmap.min.css" />
    <link type="text/css" href="../css/spaces.css" rel="stylesheet" />
    
    <main>
   
      <Nav/>
      
      <div className="section pt-lg-0">
        <div id="spaces-container" className="container">
          <div className="row pt-5 pt-md-0">
            <aside className="col-12 col-lg-4 d-block z-10">
              <div class="card border-light p-2">
                <div class="card-body p-2">
                  <div class="profile-thumbnail small-thumbnail mx-auto">
                    <img src="http://localhost:3000/assets/img/team/profile-picture-4.jpg"
                    class="card-img-top rounded-circle border-white" alt={user.name} />
                    </div>
                    <h2 class="h5 font-weight-normal text-center mt-3 mb-0">{user.name}</h2>
                  <h2 class="h5 font-weight-normal text-center mt-3 mb-0">{user.email}</h2>
                  <div class="list-group dashboard-menu list-group-sm mt-4">

                    <ul class="list-inline row mx-auto my-4">
                      <li class="list-inline-item col-sm-4 col-auto px-2 px-xl-3 my-2 mx-0">
                        <h6 class="font-weight-normal font-small">Rentals</h6><a
                          class="d-sm-block h6 text-gray font-weight-normal font-small" href="#">20.5% <span
                            class="icon icon-xs text-success"><i class="fas fa-angle-up"></i></span></a>
                      </li>
                      <li class="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                        <h6 class="font-weight-normal font-small">Reviews</h6><a
                          class="d-sm-block h6 text-gray font-weight-normal font-small" href="#">4.5/5 <span
                            class="icon icon-xs text-danger"><i class="fas fa-angle-down"></i></span></a>
                      </li>
                      <li class="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                        <h6 class="font-weight-normal font-small">Status</h6><a
                          class="d-sm-block h6 text-gray font-weight-normal font-small" href="#"><span
                            class="icon icon-xs text-success"><i class="fas fa-award"></i></span> Verified</a>
                      </li>
                    </ul><a class="btn btn-sm btn-success mb-3" href="#"><span class="remove-account" onClick={handleDeleteAccount}>
                          <span>Remove Account</span>
                        </span>
                        
                        </a>
                        <a class="btn btn-sm btn-danger mb-3" href="#" ><span class="remove-account" onClick={handleDesactivate}>
                          <span>Desactivate Account</span>
                        </span>
                        
                        </a>

                  <a href="settings.html" class="d-flex list-group-item list-group-item-action active">Overview
                        <span class="icon icon-xs ml-auto">
                            <span class="fas fa-chevron-right"></span>
                        </span>
                      </a>

                      <a href="security.html" class="d-flex list-group-item list-group-item-action">Billing
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>

                      <a  class="d-flex list-group-item list-group-item-action"   onClick={handleSettings}>Settings
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>

                      {/* <a  class="d-flex list-group-item list-group-item-action" >
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>
 */}
                      <a href="security.html" class="d-flex list-group-item list-group-item-action">My Items
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>

                    
                      <a href="security.html" class="d-flex list-group-item list-group-item-action">Messages
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>
                         
                    </div>
                </div>
              </div>

              <div className="card d-lg-none border-light text-center mt-n5 mt-md-n7 p-2">
                <div className="card-body p-2">
                  <div className="profile-thumbnail small-thumbnail mt-n6 mx-auto">
                    <img
                      src="../assets/img/team/profile-picture-4.jpg"
                      className="card-img-top rounded-circle border-white"
                      alt="Joseph Portrait"
                    />
                  </div>
                  <h4 className="font-weight-normal mt-4 mb-0">Neil Sims</h4>
                  <ul className="list-inline row mx-auto my-4">
                    <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                      <h6 className="font-weight-normal font-small">Rentals</h6>
                      <a
                        className="d-sm-block h6 text-gray font-weight-normal font-small"
                        href="#"
                      >
                        20.5%{" "}
                        <span className="icon icon-xs text-success">
                          <i className="fas fa-angle-up" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                      <h6 className="font-weight-normal font-small">Reviews</h6>
                      <a
                        className="d-sm-block h6 text-gray font-weight-normal font-small"
                        href="#"
                      >
                        4.5/5{" "}
                        <span className="icon icon-xs text-danger">
                          <i className="fas fa-angle-down" />
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                      <h6 className="font-weight-normal font-small">Status</h6>
                      <a
                        className="d-sm-block h6 text-gray font-weight-normal font-small"
                        href="#"
                      >
                        <span className="icon icon-xs text-success">
                          <i className="fas fa-award" />
                        </span>{" "}
                        Verified
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-sm btn-secondary mb-3" href="#">
                    <span className="fas fa-user-plus mr-1" /> Remove Your Account
                  </a>
                </div>
              </div>
            </aside>
            <div className="col-12 col-lg-8" style={myStyle}>
              <div className="tab-content mt-4">
                <div
                  className="tab-pane fade show active"
                  id="tab-grid-1"
                  role="tabpanel"
                  aria-labelledby="tab-grid-1-tab"
                >
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4 posi">
                      <div className="card border-light mb-4 animate-up-5">
                        <div className="row no-gutters align-items-center">
                          <div className="col-12 col-lg-6 col-xl-5">
                            <a href="single-space.html">
                              <img
                                src="../assets/img/private-office.jpg"
                                alt="private office"
                                className="card-img p-2 rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="col-12 col-lg-6 col-xl-7">
                            <div className="card-body p-3 p-md-1">
                              <a href="single-space.html">
                                <h4 className="h5">Collaborative Workspace</h4>
                              </a>
                              <div className="d-flex my-3">
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="badge badge-pill badge-primary ml-2">
                                  5.0
                                </span>
                              </div>
                              <ul className="list-group mb-3">
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-map-marker-alt mr-2" />
                                  New York, Manhattan, USA
                                </li>
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-bullseye mr-2" />
                                  Old Street (2 mins walk)
                                </li>
                              </ul>
                              <div className="d-flex justify-content-between">
                                <div className="col pl-0">
                                  <span className="text-muted font-small d-block">
                                    Monthly
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    500$
                                  </span>
                                </div>
                                <div className="col">
                                  <span className="text-muted font-small d-block">
                                    People
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    12
                                  </span>
                                </div>
                                <div className="col pr-0">
                                  <span className="text-muted font-small d-block">
                                    Sq.Ft
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    1200
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                      <div className="card border-light mb-4 animate-up-5">
                        <div className="row no-gutters align-items-center">
                          <div className="col-12 col-lg-6 col-xl-5">
                            <a href="single-space.html">
                              <img
                                src="../assets/img/meeting-office.jpg"
                                alt="meeting office"
                                className="card-img p-2 rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="col-12 col-lg-6 col-xl-7">
                            <div className="card-body p-3 p-md-1">
                              <a href="single-space.html">
                                <h4 className="h5">Meeting Office Space</h4>
                              </a>
                              <div className="d-flex my-3">
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-light" />{" "}
                                <span className="badge badge-pill badge-primary ml-2">
                                  4.0
                                </span>
                              </div>
                              <ul className="list-group mb-3">
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-map-marker-alt mr-2" />
                                  New York, Manhattan, USA
                                </li>
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-bullseye mr-2" />
                                  Old Street (2 mins walk)
                                </li>
                              </ul>
                              <div className="d-flex justify-content-between">
                                <div className="col pl-0">
                                  <span className="text-muted font-small d-block">
                                    Monthly
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    50$
                                  </span>
                                </div>
                                <div className="col">
                                  <span className="text-muted font-small d-block">
                                    People
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    2-4
                                  </span>
                                </div>
                                <div className="col pr-0">
                                  <span className="text-muted font-small d-block">
                                    Sq.Ft
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    400
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                      <div className="card border-light mb-4 animate-up-5">
                        <div className="row no-gutters align-items-center">
                          <div className="col-12 col-lg-6 col-xl-5">
                            <a href="single-space.html">
                              <img
                                src="../assets/img/conference-office.jpg"
                                alt="conference office"
                                className="card-img p-2 rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="col-12 col-lg-6 col-xl-7">
                            <div className="card-body p-3 p-md-1">
                              <a href="single-space.html">
                                <h4 className="h5">Conference Room</h4>
                              </a>
                              <div className="d-flex my-3">
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="fas fa-star-half text-warning" />{" "}
                                <span className="badge badge-pill badge-primary ml-2">
                                  4.7
                                </span>
                              </div>
                              <ul className="list-group mb-3">
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-map-marker-alt mr-2" />
                                  Paris, Île-de-France, France
                                </li>
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-bullseye mr-2" />
                                  LE BHV MARAIS (5 mins walk)
                                </li>
                              </ul>
                              <div className="d-flex justify-content-between">
                                <div className="col pl-0">
                                  <span className="text-muted font-small d-block">
                                    Monthly
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    150$
                                  </span>
                                </div>
                                <div className="col">
                                  <span className="text-muted font-small d-block">
                                    People
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    2-10
                                  </span>
                                </div>
                                <div className="col pr-0">
                                  <span className="text-muted font-small d-block">
                                    Sq.Ft
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    200
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-12">
                      <div className="card border-light mb-4 animate-up-5">
                        <div className="row no-gutters align-items-center">
                          <div className="col-12 col-lg-6 col-xl-5">
                            <a href="single-space.html">
                              <img
                                src="../assets/img/lifestyle-office.jpg"
                                alt="lifestyle office"
                                className="card-img p-2 rounded-xl"
                              />
                            </a>
                          </div>
                          <div className="col-12 col-lg-6 col-xl-7">
                            <div className="card-body p-3 p-md-1">
                              <a href="single-space.html">
                                <h4 className="h5">Lifestyle Space</h4>
                              </a>
                              <div className="d-flex my-3">
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="star fas fa-star text-warning" />{" "}
                                <span className="badge badge-pill badge-primary ml-2">
                                  4.7
                                </span>
                              </div>
                              <ul className="list-group mb-3">
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-map-marker-alt mr-2" />
                                  Madrid, Hortaleza, Spain
                                </li>
                                <li className="list-group-item small p-0">
                                  <span className="fas fa-bullseye mr-2" />
                                  Plaza Mayor (2 mins walk)
                                </li>
                              </ul>
                              <div className="d-flex justify-content-between">
                                <div className="col pl-0">
                                  <span className="text-muted font-small d-block">
                                    Monthly
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    200$
                                  </span>
                                </div>
                                <div className="col">
                                  <span className="text-muted font-small d-block">
                                    People
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    10-30
                                  </span>
                                </div>
                                <div className="col pr-0">
                                  <span className="text-muted font-small d-block">
                                    Sq.Ft
                                  </span>{" "}
                                  <span className="h6 text-dark font-weight-bold">
                                    500
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="extraContent" style={{ display: "none" }}>
                    <div className="row">
                      <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5">
                              <a href="single-space.html">
                                <img
                                  src="../assets/img/private-office.jpg"
                                  alt="private office"
                                  className="card-img p-2 rounded-xl"
                                />
                              </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body p-1">
                                <a href="single-space.html">
                                  <h4 className="h5">Collaborative Workspace</h4>
                                </a>
                                <div className="d-flex my-3">
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="badge badge-pill badge-primary ml-2">
                                    5.0
                                  </span>
                                </div>
                                <ul className="list-group mb-3">
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-map-marker-alt mr-2" />
                                    New York, Manhattan, USA
                                  </li>
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-bullseye mr-2" />
                                    Old Street (2 mins walk)
                                  </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0">
                                    <span className="text-muted font-small d-block">
                                      Monthly
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      500$
                                    </span>
                                  </div>
                                  <div className="col">
                                    <span className="text-muted font-small d-block">
                                      People
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      12
                                    </span>
                                  </div>
                                  <div className="col pr-0">
                                    <span className="text-muted font-small d-block">
                                      Sq.Ft
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      1200
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5">
                              <a href="single-space.html">
                                <img
                                  src="../assets/img/meeting-office.jpg"
                                  alt="meeting office"
                                  className="card-img p-2 rounded-xl"
                                />
                              </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body p-1">
                                <a href="single-space.html">
                                  <h4 className="h5">Meeting Office Space</h4>
                                </a>
                                <div className="d-flex my-3">
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-light" />{" "}
                                  <span className="badge badge-pill badge-primary ml-2">
                                    4.0
                                  </span>
                                </div>
                                <ul className="list-group mb-3">
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-map-marker-alt mr-2" />
                                    New York, Manhattan, USA
                                  </li>
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-bullseye mr-2" />
                                    Old Street (2 mins walk)
                                  </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0">
                                    <span className="text-muted font-small d-block">
                                      Monthly
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      50$
                                    </span>
                                  </div>
                                  <div className="col">
                                    <span className="text-muted font-small d-block">
                                      People
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      2-4
                                    </span>
                                  </div>
                                  <div className="col pr-0">
                                    <span className="text-muted font-small d-block">
                                      Sq.Ft
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      400
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-10 col-md-6 col-lg-12 mb-4">
                        <div className="card border-light mb-4 animate-up-5">
                          <div className="row no-gutters align-items-center">
                            <div className="col-12 col-lg-6 col-xl-5">
                              <a href="single-space.html">
                                <img
                                  src="../assets/img/conference-office.jpg"
                                  alt="conference office"
                                  className="card-img p-2 rounded-xl"
                                />
                              </a>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                              <div className="card-body p-1">
                                <a href="single-space.html">
                                  <h4 className="h5">Conference Room</h4>
                                </a>
                                <div className="d-flex my-3">
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="star fas fa-star text-warning" />{" "}
                                  <span className="fas fa-star-half text-warning" />{" "}
                                  <span className="badge badge-pill badge-primary ml-2">
                                    4.7
                                  </span>
                                </div>
                                <ul className="list-group mb-3">
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-map-marker-alt mr-2" />
                                    Paris, Île-de-France, France
                                  </li>
                                  <li className="list-group-item small p-0">
                                    <span className="fas fa-bullseye mr-2" />
                                    LE BHV MARAIS (5 mins walk)
                                  </li>
                                </ul>
                                <div className="d-flex justify-content-between">
                                  <div className="col pl-0">
                                    <span className="text-muted font-small d-block">
                                      Monthly
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      150$
                                    </span>
                                  </div>
                                  <div className="col">
                                    <span className="text-muted font-small d-block">
                                      People
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      2-10
                                    </span>
                                  </div>
                                  <div className="col pr-0">
                                    <span className="text-muted font-small d-block">
                                      Sq.Ft
                                    </span>{" "}
                                    <span className="h6 text-dark font-weight-bold">
                                      200
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      id="loadOnClick"
                      className="btn btn-primary shadow-soft border-soft btn-loading-overlay mr-2 mb-2"
                      type="button"
                    >
                      <span className="spinner">
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        />{" "}
                      </span>
                      <span className="ml-1 btn-inner-text">Show more</span>
                    </button>
                    <p id="allLoadedText" style={{ display: "none" }}>
                      That's all, Sparky!
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-grid-2"
                  role="tabpanel"
                  aria-labelledby="tab-grid-2-tab"
                >
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/image-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="themesberg office"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Coworking Workspace</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="badge badge-pill badge-primary ml-2">
                              5.0
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              California, USA
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Penny Market Street (15 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Museum Street (20 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                300$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                24
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                2000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/cowork-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="developer desk"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Coworking Workspace</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <i className="star fas fa-star text-light" />{" "}
                            <i className="star fas fa-star text-light" />{" "}
                            <span className="badge badge-pill badge-primary ml-2">
                              3.0
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              California, USA
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Penny Market Street (15 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Museum Street (20 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                300$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                24
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                2000
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/meeting-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="wood office"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Meeting Office Space</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <i className="star fas fa-star text-light" />
                            <span className="badge badge-pill badge-primary ml-2">
                              4.0
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              London, Canary Wharf, UK
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Stamford Bridge Stadium (5 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Bluebird Chelsea Restaurant (15 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                50$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                2-4
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                400
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/conference-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="pixel room"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Conference Room</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <i className="fas fa-star-half text-warning" />
                            <span className="badge badge-pill badge-primary ml-2">
                              4.7
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              Paris, Île-de-France, France
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              LE BHV MARAIS (5 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Shakespeare &amp; Company (15 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                150$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                2-10
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                200
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/lifestyle-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="modern desk"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Lifestyle Space</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="badge badge-pill badge-primary ml-2">
                              4.7
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              Madrid, Hortaleza, Spain
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Plaza Mayor (2 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              eal Casa de Correos (15 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                200$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                10-30
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                500
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="card border-light mb-4 animate-up-5">
                        <a href="single-space.html" className="position-relative">
                          <img
                            src="../assets/img/private-office.jpg"
                            className="card-img-top rounded-xl p-2"
                            alt="office modern"
                          />
                        </a>
                        <div className="card-body">
                          <a href="single-space.html">
                            <h4 className="h5">Private Space</h4>
                          </a>
                          <div className="d-flex my-4">
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="star fas fa-star text-warning" />{" "}
                            <span className="badge badge-pill badge-primary ml-2">
                              5.0
                            </span>
                          </div>
                          <ul className="list-group mb-3">
                            <li className="list-group-item small p-0">
                              <span className="fas fa-map-marker-alt mr-2" />
                              New York, Manhattan, USA
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Old Street (2 mins walk)
                            </li>
                            <li className="list-group-item small p-0">
                              <span className="fas fa-bullseye mr-2" />
                              Shoreditch High Street (10 mins walk)
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-soft border-top">
                          <div className="d-flex justify-content-between">
                            <div className="col pl-0">
                              <span className="text-muted font-small d-block mb-2">
                                Monthly
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                100$
                              </span>
                            </div>
                            <div className="col">
                              <span className="text-muted font-small d-block mb-2">
                                People
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                1
                              </span>
                            </div>
                            <div className="col pr-0">
                              <span className="text-muted font-small d-block mb-2">
                                Sq.Ft
                              </span>{" "}
                              <span className="h5 text-dark font-weight-bold">
                                10
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* Mirrored from demo.themesberg.com/spaces/html/profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 10 Mar 2023 21:48:40 GMT */}
  </>

  )
}

export default Profile;