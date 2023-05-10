import React, {useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserId = ({userName, email , imagePath , isCurrent }) => {
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const token = localStorage.getItem("token");
  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };

  const [img, setImg] = useState('');

  useEffect(() => {
    if (imagePath)  {setImg(imagePath)}
    console.log('this is img apres set img with imagePath');
   /*  console.log(img);
    console.log(`http://localhost:3001/${img}`); // imagePath devrait être défini ici */

  }, []);


  const urlUpdateImg = 'http://127.0.0.1:3001/users/updateImg/';
  const urlGetUser = 'http://127.0.0.1:3001/users/getById/';
  const [file, setFile] = useState (null);
  const navigate = useNavigate ();


  const handleDeleteAccount = async response => {
    navigate ('/delete-account');
  };

  const handleSettings = async response => {
    navigate ('/Edit');
  };
  const handleDesactivate = async response => {
    navigate ('/desac');
  };

  const handlePassword=  async () => {navigate ('/changePwd');}

  const handleFileUpload = async event => {
    const fileToUpload = event.target.files[0];
    setFile(fileToUpload);

    const formData = new FormData();
    formData.append('picture', fileToUpload);

    try {
    await axios.put(urlUpdateImg + user._id, formData, config).then((response)=>{ setImg(response.data.user.picture.imagePath)
    localStorage.setItem('user', JSON.stringify(response.data.user));
    });
      //alert('Photo uploaded successfully!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="profi">
        <div className="prof_img">
{   imagePath && <img src={`http://localhost:3001/${imagePath}`} alt="Profile" />
}       

{   !imagePath && <img src={`http://localhost:3001/${img}`} alt="Profile" />
} 
 </div>
        {isCurrent && 
          <input className="upload" type="file" encType="multipart/form-data" onChange={handleFileUpload} />}
      </div>
      { isCurrent &&
      <div className="Buttons">
        <div className="d-grid gap-2 d-md-block">
          <button
            onClick={handleSettings}
            className="btn btn-primary be"
            type="button"
          >
            Edit
          </button>
          <button
            onClick={handleDesactivate}
            className="btn btn-secondary bds"
            type="button"
          >
            Desactivate
          </button>
          <button
            onClick={handlePassword}
            className="btn bdp"
            type="button"
          >
            Password
          </button>
          <button
            onClick={handleDeleteAccount}
            className="btn bdl button-24"
            type="button"
          >
            Delete
          </button>
          
        </div>
      </div> }
    </div>
  );
};

export default UserId;
