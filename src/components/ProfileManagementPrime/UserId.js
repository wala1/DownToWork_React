import React from 'react';

const UserId = ({userName, imgURL, email}) => {
  return (
    <div >
      <div className="prof_img">
        <img src={imgURL} alt="" />    
      </div>
      <div className="Buttons">
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-primary be" type="button">
            Edit
          </button>
          <button className="btn btn-secondary bds" type="button">
            Desactivate
          </button>
          <button className="btn btn-danger bdl" type="button">
            Delete
          </button>
        </div>    
      </div>
      {/* <div className="Buttons">

        <a
          className="btn text-white"
          style={{backgroundColor: '#3b5998'}}
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>

        <a
          className="btn text-white"
          style={{backgroundColor: '#55acee'}}
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>

        <a
          className="btn text-white"
          style={{backgroundColor: '#dd4b39'}}
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>

        <a
          className="btn text-white"
          style={{backgroundColor: '#0082ca'}}
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          className="btn text-white"
          style={{backgroundColor: '#25d366'}}
          href="#!"
          role="button"
        >
          <i className="fab fa-whatsapp" />
        </a>
      </div> */}
     {/*  <div class="mt-3">
        <h4>{userName}</h4>
        <p class="text-secondary mb-1">Full Stack Developer</p>
        <p class="text-muted font-size-sm"> {email}</p>
      </div> 
 */}
     
     
    </div>
  );
};

export default UserId;
