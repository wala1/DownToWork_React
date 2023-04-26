import React, {useState} from 'react';

const AddPost = ({addItem , username}) => {

  const [postTitle, setPostTitle] = useState ('');
  const [text, setText] = useState ('');
  const [imgUrl, setImgUrl] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    const obj = {text , username};
    addItem (obj);
  };

  const handlePostTitleChange = e => {
    setPostTitle (e.target.value);
  };

  const handlePostTextChange = e => {
    setText (e.target.value);
  };

  const handleImgUrlChange = e => {
    setImgUrl (e.target.value);
  };

  return (
    <div  className='addContainer'>
      <form onSubmit={handleSubmit} >
        
          {/* <h3>New Post</h3> */}
        {/*   <label>Post title </label>
          <input
            type="text"
            id="psTitile"
            className=""
            placeholder="post Title"
            value={postTitle}
            onChange={handlePostTitleChange}
          />
          <label>Example text</label> */}
          <textarea
            id="txtarea"
            className="TextArea"
            placeholder= {`Hey ${username} ! How's it going ?`}
            value={text}
            onChange={handlePostTextChange}
          />
          {/* <div className="form-group">
            <label>img URL</label>
            <input
              id="imgurl"
              type="text"
              className="form-control"
              placeholder="www.imgURL.jpg"
              value={imgUrl}
              onChange={handleImgUrlChange}
            />
          </div> */}
        <button type="submit" className="btn btn-success btn-lg ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
