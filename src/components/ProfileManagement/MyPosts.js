import React from 'react';
import {Provider, UpdownButton} from '@lyket/react';
import {Button} from '@mui/material';

const MyPosts = ({post, deletePost, username , imagePath  , isCurrent}) => {
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);

  return (
    <div className="MyPost">
      {/* <div className="col-md-4">
            <img src={post.imgUrl} className="card-img" alt="..." />
          </div> */}
      <div className="singlePost">
        <div className="card-body">
        {isCurrent &&  <div className="PostButtons">
            <button
              className="btn delet_post PostButton "
              onClick={() => deletePost (post._id)}
            >
              X
            </button>
          </div>}
          {/* <div class="g-mb-15">
            {username &&
              <h5 className="h5 g-color-gray-dark-v1 mb-0">{username}</h5>}
            <h5 class="h5 g-color-gray-dark-v1 mb-0">
              today
            </h5> */}
          {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
          {/*   </div> */}
          <section
            className=" MyPost"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >

            <div className="">
              <a href="#">
                <img
                  alt=""
                  src={`http://localhost:3001/${imagePath}`}
                  srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=150&d=mm&r=g 2x"
                  className="prof_img_avat"
                  height={75}
                  width={75}
                  style={{flexShrink: 0, height: '50px', width: '75px'}}
                />
              </a>
            </div>
            <div>
              <h6 className="post_author_title">
                <span>
                  <a href="#" className="fn">
                    {user.name}
                  </a>
                </span>
              </h6>
              <p className="card-text">{post.text}</p>
              <p className="card-text">
                <small className="text-muted">{post.userName}</small>
              </p>
            </div>

          </section>
          <br/>
        <ul className="list-inline d-sm-flex my-0">
         <a  className="post_counters_item post_counters_likes icon-heart enabled"
                    title="Like" > like  </a>
        <a className="list-inline-item ml-auto">
          <div className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
            <i className="fa fa-comment g-pos-rel g-top-1 g-mr-2" style={{fontSize: '12px'}} />
            <span className="align-middle" style={{fontSize: '16px'}}>  &nbsp; Comments </span>
          </div>
        </a>
      </ul>
        </div>
      </div>
      {/* <section
        className="post_author author MyPost singlePost"
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >

        <div className="post_author_avatar">
          <a href="#">
            <img
              alt=""
              src={`http://localhost:3001/${user.picture.imagePath}`}
              srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=150&d=mm&r=g 2x"
              className="avatar avatar-75 photo"
              height={75}
              width={75}
            />
          </a>
        </div>
        <div>
          <h6 className="post_author_title">
            <span>
              <a href="#" className="fn">
                {user.name}
              </a>
            </span>
          </h6>
          <p className="card-text">{post.text}</p>
          <p className="card-text">
            <small className="text-muted">{post.userName}</small>
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default MyPosts;
