import React from 'react';
import './Side.css'

const User = ({user} ) => {

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Document</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
        rel="stylesheet"
      />
      <div className="cardd">
        <div className="lines" />
        <div className="imgBx">
          <img src={`http://localhost:3001/${user.picture.imagePath}`}  alt="image" />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              {user.name} <br/>
              <span>{user.statut}</span>{' '}
            </h2>
            <br/> <tr/>
            <div className="data">
             
            </div>
            <div className="actionBtn">
              <button >Connect with me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
