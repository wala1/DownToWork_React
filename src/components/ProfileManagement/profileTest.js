import { React, useState , useEffect , useRef} from 'react'
import { useNavigate } from "react-router-dom";
import Post from './post';
import axios from "axios";
import moment from 'moment';
import 'moment-duration-format';


const UserProfile = () => {
    
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);
    const urlGetPosts = 'http://localhost:3001/post/getAllByUser/';
    const urlAddPost = 'http://127.0.0.1:3001/post/add';

    useEffect(() => {
        // appel API pour récupérer les publications existantes
        axios.get(urlGetPosts + user._id).then((response) => {
          setPosts(response.data);
        });
      }, []);

    const handlePost = (event) => {
        setPost(event.target.value);

    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
     const newPost = {text : post, name :user.name , user : user._id}
     const token = localStorage.getItem("token");
     const config = {
      headers: { Authorization: `Bearer ${token}` }
     };
        // appel API pour publier la publication
        axios.post(urlAddPost, newPost , config ).then((response) => {
          // ajouter le nouveau message à la liste des messages
          setPosts([...posts, response.data]);
          // réinitialiser la zone de texte
          setPost("");
        });
      };
  
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
      <div class="container ">
        <div class="row justify-content-end">
          <div class="col-lg-4" style={{marginRight: '1000px'}}>
            <div
              class="card "
              style={{marginTop: '305px', marginInlineStart: '250px'}}
            >
              <div className="card-body">
              
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
          </div>

         {/*************************  La partie des cartes à droite *******************/}
          <div class="col-lg-6">
            <div class="card-group">
                {/*************************  Post area *******************/}
              <form onSubmit={handleSubmit} >
              <div class="card" style={{marginTop: '150px'}}>
                <div class="card-body post-editor">
                  <textarea
                    value={post} onChange={handlePost}
                    name="post-field"
                    id="post-field"
                    class="post-field"
                    placeholder= {`Hey ${user.name} ! How's it going ?`}
                  />
                  
                  <div class="d-flex">
                    <button type="submit" class="btn btn-success px-6 py-2">
                      Post
                    </button>
                  </div>
                </div>
              </div>
              </form>
              {posts.map((post) => {
               const date = moment(post.date);
               const duration = moment.duration(moment().diff(date));
               let formattedDate;

               if (duration.asDays() > 1) {
                 formattedDate = duration.format('d [days] ago', { trim: 'both' });
               } else if (duration.asDays() === 1) {
                 formattedDate = 'Yesterday';
               } else {
                 formattedDate = 'Today';
               }
              return (
               <Post 
                  date={formattedDate}
                  text={post.text}
                  dislikes={post.dislikes.length}
                  likes={post.likes.length}
               />
              );
             })}
            </div>
         </div>
          

        </div>
      </div>
    </div>
  );
};

export default UserProfile;
