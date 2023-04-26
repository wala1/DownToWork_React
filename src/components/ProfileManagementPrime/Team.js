import React, {useState , useEffect} from 'react';
import axios from "axios";
import './Team.css';
import UserId from './UserId';
import AddPost from './AddPost';
import MyPosts from './MyPosts';
import Side from './Side';

const Team = () => {

  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const img =
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral';

  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const urlGetPosts = 'http://localhost:3001/post/getAllByUser/';
  const urlAddPost = 'http://127.0.0.1:3001/post/add';

  useEffect(() => {
        // appel API pour récupérer les publications existantes
        axios.get(urlGetPosts + user._id).then((response) => {
          setPosts(response.data);
          setPost("");
        });
      }, []);


 /*  const addItem = x => {
    setPosts ([...posts, x]);
    console.log (x);
  };
 */
  function deleteElement (index) {
    const updatedElements = [...posts];
    updatedElements.splice (index, 1);
    setPosts (updatedElements);
  }

  const addItem = (newPost) => {   
/*  const newPost = {text : post, name :user.name , user : user._id} */
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
  

  return (
    <div>
      <header>
        <div className="container-img">
          <UserId userName={user.name} imgURL={img} email={user.email} />
        </div>
      </header>
      <div className="container">
        <div className="row con">
          <div className="col-md-4 conside">
            <Side username={user.name}  email={user.email} postNumber={posts.length}/>
          </div>

          <div className="col-md-8 con2">
            <div>
              <AddPost addItem={addItem} username={user.name} />
              <div>
                <div>
                  {posts.map ((post, index) => (
                    <MyPosts
                      key={index}
                      post={post}
                      deletePost={deleteElement}
                      username={user.name}
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

export default Team;
