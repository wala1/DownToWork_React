import React, { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profilee = () => {

  const [comment, setComment] = useState('');

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  const navigate = useNavigate();

  const handleDeleteAccount = async (response) => {
    navigate("/delete-account");
  };

  const handleSettings = async (response) => {
    navigate("/Edit");
  };
  const handleDesactivate = async (response) => {
    navigate("/desac");
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row">
          <div className="col">
            <div style={{ marginTop: "210px" }}>
              {/* This card will be on the left */}
              <aside className="col-12 col-lg-8 d-block z-10">
                <div className="card border-light p-2">
                  <br />
                  <br />
                  <div className="card-body p-2">
                    <div
                      className="user-profile-card border-white"
                      style={{ width: "180px", height: "150px" }}
                    >
                      <img
                        src="https://media.lesechos.com/api/v1/images/view/6311aa787df365482726607b/1280x720/0702278866454-web-tete.jpg"
                        alt="Photo de profil de l'utilisateur"
                      />
                    </div>
                    <h2 className="h5 font-weight-normal text-center mt-3 mb-0">
                      {user.name}
                    </h2>
                    <h2 className="h5 font-weight-normal text-center mt-3 mb-0">
                      {user.email}
                    </h2>
                    <div className="list-group dashboard-menu list-group-sm mt-4">
                      <ul className="list-inline row mx-auto my-4">
                        <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                          <h6 className="font-weight-normal font-small">
                            Reviews
                          </h6>
                          <a
                            className="d-sm-block h6 text-gray font-weight-normal font-small"
                            href="#"
                          >
                            4.5/5{" "}
                            <span className="icon icon-xs text-danger">
                              <i className="fas fa-angle-down"></i>
                            </span>
                          </a>
                        </li>
                        <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                          <h6 className="font-weight-normal font-small">
                            Status
                          </h6>
                          <a
                            className="d-sm-block h6 text-gray font-weight-normal font-small"
                            href="#"
                          >
                            <span className="icon icon-xs text-success">
                              <i className="fas fa-award"></i>
                            </span>{" "}
                            Verified
                          </a>
                        </li>
                      </ul>
                      <a className="btn btn-sm btn-success mb-2" href="#">
                        <span
                          className="remove-account"
                          onClick={handleSettings}
                        >
                          <span>Edit Account</span>
                        </span>
                      </a>
                      <a className="btn btn-sm btn-danger mb-3" href="#">
                        <span
                          className="remove-account"
                          onClick={handleDesactivate}
                        >
                          <span>Deactivate Account</span>
                        </span>
                      </a>

                      <a
                        href="settings.html"
                        class="d-flex list-group-item list-group-item-action active"
                      >
                        Overview
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span>
                      </a>

                      <a
                        href="security.html"
                        class="d-flex list-group-item list-group-item-action"
                      >
                        Billing
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span>
                      </a>

                      <a
                        class="d-flex list-group-item list-group-item-action"
                        onClick={handleSettings}
                      >
                        Settings
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span>
                      </a>
                      {/*   <a href="security.html" class="d-flex list-group-item list-group-item-action">My Items
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>

                    
                      <a href="security.html" class="d-flex list-group-item list-group-item-action">Messages
                        <span class="icon icon-xs ml-auto">
                          <span class="fas fa-chevron-right"></span>
                        </span> 
                      </a>
                          */}
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
                        <h6 className="font-weight-normal font-small">
                          Rentals
                        </h6>
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
                        <h6 className="font-weight-normal font-small">
                          Reviews
                        </h6>
                        <a
                          className="d-sm-block h6 text-gray font-weight-normal font-small"
                          href="#"
                        >
                          {/* 4.5/5{" "} */}
                          <span className="icon icon-xs text-danger">
                            <i className="fas fa-angle-down" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item col-4 px-2 px-xl-3 my-2 mx-0">
                        <h6 className="font-weight-normal font-small">
                          Status
                        </h6>
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
                      <span className="fas fa-user-plus mr-1" /> Remove Your
                      Account
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="col" style={{ marginTop: "50px" }}>
            <div className="card" style={{ marginTop: "205px" }}>
              {/* This card will be on the right */}
              <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div>
                      <div className="card">
                        <div className="card-body p-4 text-black">
                        
                          <div class="container">
                            <div class="row">
                              <div
                                class="post-editor"
                                style={{ marginLeft: "-40px" }}
                              >
                                <textarea
                                  name="post-field"
                                  id="post-field"
                                  class="post-field"
                                  placeholder="Write Something Cool!"
                                ></textarea>
                                <div class="d-flex">
                                  <button class="btn btn-success px-6 py-2">
                                    Post
                                  </button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                  <p className="lead fw-normal mb-0">
                                    Recent posts
                                  </p>
                                  <p className="mb-0">
                                    <a href="#!" className="text-muted">
                                      Show all
                                    </a>
                                  </p>
                                </div>
                                <div class="col-md-8">
                                  <div
                                    class="media g-mb-30 media-comment"
                                    style={{ marginRight: "-150px" }}
                                  >
                                    <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                      <div class="g-mb-15">
                                        <h5 class="h5 g-color-gray-dark-v1 mb-0">
                                          5 days ago
                                        </h5>
                                        {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
                                      </div>

                                      <p>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Donec lacinia congue felis
                                        in faucibus ras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis.
                                      </p>

                                      <ul class="list-inline d-sm-flex my-0">
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            178
                                          </a>
                                        </li>
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            34
                                          </a>
                                        </li>
                                        <li class="list-inline-item ml-auto">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-comment g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            Comments
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-8">
                                  <div
                                    class="media g-mb-30 media-comment"
                                    style={{ marginRight: "-150px" }}
                                  >
                                    <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                      <div class="g-mb-15">
                                        <h5 class="h5 g-color-gray-dark-v1 mb-0">
                                          5 days ago
                                        </h5>
                                        {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
                                      </div>

                                      <p>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Donec lacinia congue felis
                                        in faucibus ras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis.
                                      </p>

                                      <ul class="list-inline d-sm-flex my-0">
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            178
                                          </a>
                                        </li>
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            34
                                          </a>
                                        </li>
                                        <li class="list-inline-item ml-auto">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-comment g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            Comments
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-8">
                                  <div
                                    class="media g-mb-30 media-comment"
                                    style={{ marginRight: "-150px" }}
                                  >
                                    <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                                      <div class="g-mb-15">
                                        <h5 class="h5 g-color-gray-dark-v1 mb-0">
                                          5 days ago
                                        </h5>
                                        {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
                                      </div>

                                      <p>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Donec lacinia congue felis
                                        in faucibus ras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis.
                                      </p>

                                      <ul class="list-inline d-sm-flex my-0">
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            178
                                          </a>
                                        </li>
                                        <li class="list-inline-item g-mr-20">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            34
                                          </a>
                                        </li>
                                        <li class="list-inline-item ml-auto">
                                          <a
                                            class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                                            href="#!"
                                          >
                                            <i class="fa fa-comment g-pos-rel g-top-1 g-mr-3"></i>
                                            &nbsp;
                                            Comments
                                          </a>
                                        </li>
                                      </ul>
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
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilee;
