import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import UserId from './UserId';
import AddPost from './AddPost';
import MyPosts from './MyPosts';
import Side from './Side';
import NavBar from '../shared/NavBar';
import CustumisedNavbar from '../shared/CustumisedNavbar';
import CusmNav from '../shared/CusmNav';
import Post from './Post';

const Profile = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  //const {id} = useParams ();

  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const img =
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral';

  const token = localStorage.getItem ('token');
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };

  const [post, setPost] = useState ('');
  const [currentUser, setCurrentUser] = useState ({});
  const [posts, setPosts] = useState ([]);
  const urlGetPosts = 'http://localhost:3001/post/getAllByUser/';
  const urlUserById = 'http://localhost:3001/users/getById/';
  const urlAddPost = 'http://127.0.0.1:3001/post/add';
  const urlDeletePost = 'http://127.0.0.1:3001/post/delete/';
  const [isCurrent, setIsCurrent] = useState (true);
  const [currentImgPath, setcurrentImgPath] = useState ('');

  useEffect (() => {

    console.log('this is the id' + id);
    console.log(user._id);
    if (id && id !== user._id) {
      setIsCurrent (false);
      axios.get (urlUserById + id).then (response => {
        setCurrentUser (response.data);
        console.log (response.data.picture.imagePath);
        setcurrentImgPath (response.data.picture.imagePath);
        setIsCurrent (false);
      });

      axios.get (urlGetPosts + id).then (response => {
        setPosts (response.data);
        setPost ('');
      });
    } else if (id && id === user._id) {
      axios.get (urlUserById + user._id).then (response => {
        setCurrentUser (response.data);
        setcurrentImgPath (response.data.picture.imagePath);
      });
      // appel API pour récupérer les publications existantes
      axios.get (urlGetPosts + user._id).then (response => {
        setPosts (response.data);
        setPost ('');

      });
    } else  {
      axios.get (urlUserById + user._id).then (response => {
        setCurrentUser (response.data);
        setcurrentImgPath (response.data.picture.imagePath);
      });
      // appel API pour récupérer les publications existantes
      axios.get (urlGetPosts + user._id).then (response => {
        setPosts (response.data);
        setPost ('');

      });
    }
  }, []);

  useEffect (
    () => {
      console.log ('currentImgPath:', currentImgPath);
    },
    [currentImgPath]
  );

  function deleteElement (id) {
    axios
      .delete (urlDeletePost + id, config)
      .then (() => {
        console.log ('post deleted');
        const updatedPosts = posts.filter (post => post._id !== id);
        setPosts (updatedPosts);
      })
      .catch (error => {
        console.log (error);
      });
  }

  const addItem = newPost => {
    /*  const newPost = {text : post, name :user.name , user : user._id} */
    // appel API pour publier la publication
    axios.post (urlAddPost, newPost, config).then (response => {
      // ajouter le nouveau message à la liste des messages
      setPosts ([...posts, response.data]);
      // réinitialiser la zone de texte
      setPost ('');
      console.log (response.data);
    });
  };

  return (
    <div>
      <CustumisedNavbar />
      <header>
        <div className="container-img">
          <UserId
            userName={currentUser.name}
            email={currentUser.email}
            imagePath={currentImgPath}
            isCurrent={isCurrent}
          />
        </div>
      </header>
      <div className="container">
        <div className="row conn">
          <div className="col-md-4 conside">
            <Side
              username={currentUser.name}
              email={currentUser.email}
              postNumber={posts.length}
              statut={currentUser.statut}
            />
          </div>

          <div className="col-md-6 con2">
            <div>
              {isCurrent &&
                <div style={{marginRight: '50px'}}>
                  <AddPost addItem={addItem} username={currentUser.name} />
                </div>}
              <div>
                <div className="Resverse" style={{marginRight: '150px'}}>
                  {posts.map ((post, index) => (
                    <Post
                      key={index}
                      post={post}
                      deletePost={deleteElement}
                      username={currentUser.name}
                      imagePath={currentImgPath}
                      isCurrent={isCurrent}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;
