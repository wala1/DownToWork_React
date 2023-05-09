import React, {useState} from 'react';
import badWords from 'bad-words';


const customBadWords = new badWords({ 
  regex: /\*|\.|$/gi, // définit l'expression régulière de remplacement des mots inappropriés
  replace: '*', // définit le caractère de remplacement
  exclude: ['foo', 'bar'], // définit une liste de mots exclus (qui ne seront pas considérés comme des mots inappropriés)
  extra: ['baz'], // ajoute des mots supplémentaires à la liste de mots inappropriés
});


const AddPost = ({addItem , username}) => {

  const [text, setText] = useState ('');
  const [imgUrl, setImgUrl] = useState ('');
  const filter = customBadWords;


  const handleSubmit = e => {
    e.preventDefault();
    if (filter.isProfane(text)) {
      alert('Votre article contient des mots inappropriés. Veuillez les retirer avant de publier.');
      return;
    }

    const obj = {text , username};
    addItem (obj);
    setText('');
  };

  const handlePostTextChange = e => {
    setText (e.target.value);
  };

  const handleImgUrlChange = e => {
    setImgUrl (e.target.value);
  };

  return (
    <div  className='addContainer' >
      <form onSubmit={handleSubmit} style={{flexShrink: 0, height: '200px', width: '750px' , marginLeft :'-70px'}}>
        
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
        <button type="submit" className="btn btn-lg bpb ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPost;
