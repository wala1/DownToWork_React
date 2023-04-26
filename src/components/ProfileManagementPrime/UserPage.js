import React, {useEffect, useState} from 'react';
import UserId from './UserId';
import AddPost from './AddPost';
import MyPosts from './MyPosts';
import ProfileU from './userProfile/Profile';
import NavBar from '../shared/NavBar';
import BasicExample from './SidBar';


const UserPage = () => {
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const img =
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral';

  const [posts, setPosts] = useState ([
    {
      _id: '1',
      imgUrl: 'https://via.placeholder.com/200x100',
      userName: 'Alaarg',
      postTitle: 'post from database',
      postText: 'Lorem Ipsum is simply dummy text of the printing and k a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l',
    },
    {
      _id: '2',
      imgUrl: 'https://via.placeholder.com/200x100',
      userName: 'lolo',
      postTitle: 'post from database',
      postText: 'Loremd a type specimen book. It has survived not only five centuries, but also the l',
    },
    {
      _id: '3',
      imgUrl: 'https://via.placeholder.com/200x100',
      userName: 'max',
      postTitle: 'post from database',
      postText: 'Lorem Ipsum is asurvived not only five centuries, but also the l',
    },
    {
      _id: '4',
      imgUrl: 'https://via.placeholder.com/200x100',
      userName: 'soso',
      postTitle: 'post from database',
      postText: 'Lorem Ipsum is asurvived not only five centuries, but also the l',
    },
  ]);

  const addItem = x => {
    setPosts ([...posts, x]);
    console.log (x);
  };

  const deletePost = id => {
    console.log ('deleted', typeof id);
    setPosts (posts.filter (post => post._id !== id));
  };

  function deleteElement (index) {
    const updatedElements = [...posts];
    updatedElements.splice (index, 1);
    setPosts (updatedElements);
  }

  return (
    <div className="container con1">
      {/* <div className="LeftCard">
       <BasicExample/>
      
      </div> */}
      <UserId userName={user.name} imgURL={img} email={user.email} />
      <div className="con2">
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
     {/*  <div className="RightCard">
       <BasicExample/>  
      </div> */}
    </div>
  );
};

export default UserPage;
