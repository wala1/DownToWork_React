import React from 'react';
import {Provider, UpdownButton} from '@lyket/react';
import { Button } from '@mui/material';

const MyPosts = ({post, deletePost, username}) => {
   
  return (
    <div className="MyPost">
      {/* <div className="col-md-4">
            <img src={post.imgUrl} className="card-img" alt="..." />
          </div> */}
      <div className="singlePost">
        <div className="card-body">
          <div className="PostButtons">
            <button
              className="btn btn-danger delet_post PostButton "
              onClick={() => deletePost (post._id)}
            >
              X
            </button>
          </div>
          {/* <div class="g-mb-15">
            {username &&
              <h5 className="h5 g-color-gray-dark-v1 mb-0">{username}</h5>}
            <h5 class="h5 g-color-gray-dark-v1 mb-0">
              today
            </h5> */}
            {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
        {/*   </div> */}
          <div>
           {/*  <h5 className="card-title">{post.postTitle}</h5> */}
            <p className="card-text">{post.text}</p>
            <p className="card-text">
              <small className="text-muted">{post.userName}</small>
            </p>

          </div>
        </div>
        <br/>
        <ul className="list-inline d-sm-flex my-0">
        <li className="list-inline-item g-mr-20">
          <div className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
            <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-2" style={{fontSize: '14px', color: '#82C46C'}} />
            <span className="align-middle" style={{fontSize: '16px'}}> &nbsp; {post.likes.length}</span>
          </div>
        </li>
        <li className="list-inline-item g-mr-20">
          <div className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
            <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-2" style={{fontSize: '14px', color: 'black'}} />
            <span className="align-middle" style={{fontSize: '16px'}}> &nbsp; {post.dislikes.length}</span>
          </div>
        </li>
        <li className="list-inline-item ml-auto">
          <div className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
            <i className="fa fa-comment g-pos-rel g-top-1 g-mr-2" style={{fontSize: '12px'}} />
            <span className="align-middle" style={{fontSize: '16px'}}>  &nbsp; Comments </span>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default MyPosts;
