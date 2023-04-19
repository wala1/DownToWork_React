import {React, useState} from 'react';
import './post.css';
import {Form} from 'react-router-dom';

const Post = ({text, name, likes, dislikes, date}) => {
  const [showCommentInput, setShowCommentInput] = useState (false);
  const [comment, setComment] = useState ('');

  const handleCommentClick = () => {
    setShowCommentInput (true);
  };
  const handleCommentSubmit = e => {
    e.preventDefault ();
    console.log (`Commentaire soumis: ${comment}`);
    // Vous pouvez ajouter ici une logique pour envoyer le commentaire à un serveur
  };
  const handleDelete = () => {
    // Ajouter ici la logique pour supprimer la publication
  };
  const handleEdit = () => {};

  return (
    <div>
      <div class="card" style={{marginTop: '250px', marginLeft: '200px'}}>
        <div class="card-body">
          <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div className="d-inline-flex" style={{position: 'relative', left: '400px'}}>
              <button className="btn btn-info ml-16" type="submit">
                Edit
              </button>
              <button className="btn btn-danger ml-2" type="submit">
                delete
              </button>
            </div>
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
                  onClick={handleCommentClick}
                >
                  <i class="fa fa-comment g-pos-rel g-top-1 g-mr-3" />
                  &nbsp;
                  Comments
                </a>
              </li>
            </ul>
            <br />
            {showCommentInput &&
              <div
                className="d-flex flex-row add-comment-section justify-content-between"
                style={{position: 'relative', left: '-50px'}}
              >
                <form onSubmit={handleCommentSubmit}>
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control mr-auto"
                      id="comment-input"
                      value={comment}
                      onChange={e => setComment (e.target.value)}
                      placeholder="Add comment"
                    />
                    <div className="d-inline-flex">
                      <button className="btn btn-primary ml-2" type="submit">
                        Comment
                      </button>
                      <button className="btn btn-danger ml-2" type="submit">
                        cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
