import {React, useState} from 'react';

const Post = ({text, name, likes, dislikes, date}) => {
  return (
    <div>
      <div class="card" style={{marginTop: '250px' , marginLeft : '200px'}}>
        <div class="card-body">
          <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div class="g-mb-15">
              {name && <h5 className="h5 g-color-gray-dark-v1 mb-0">{name}</h5>}
              <h5 class="h5 g-color-gray-dark-v1 mb-0">
                {date}
              </h5>
              {/* <span class="g-color-gray-dark-v4 g-font-size-12">5 days ago</span> */}
            </div>

            <br />
            <p>
              {text}
            </p>

            <ul class="list-inline d-sm-flex my-0">
              <li class="list-inline-item g-mr-20">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3" />
                  &nbsp;
                  {likes}
                </a>
              </li>
              <li class="list-inline-item g-mr-20">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3" />
                  &nbsp;
                  {dislikes}
                </a>
              </li>
              <li class="list-inline-item ml-auto">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-comment g-pos-rel g-top-1 g-mr-3" />
                  &nbsp;
                  Comment
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3" />
                  &nbsp;
                  Reply
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
