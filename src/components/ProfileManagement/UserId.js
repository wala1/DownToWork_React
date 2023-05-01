import React, {useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserId = ({userName, imgURL, email}) => {
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const token = localStorage.getItem("token");
  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };

  const urlUpdateImg = 'http://127.0.0.1:3001/users/updateImg/';
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

  const handleFileUpload = async event => {
    const fileToUpload = event.target.files[0];
    setFile(fileToUpload);

    const formData = new FormData();
    formData.append('picture', fileToUpload);

    try {
      await axios.put(urlUpdateImg + user._id, formData, config);
      alert('Photo uploaded successfully!');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="profi">
        <div className="prof_img">
          <img src={`http://localhost:3001/${user.picture.imagePath}`} alt="user profile" />
        </div>
        <input className="upload" type="file" encType="multipart/form-data" onChange={handleFileUpload} />
      </div>
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
            onClick={handleDeleteAccount}
            className="btn btn-danger bdl"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserId;
