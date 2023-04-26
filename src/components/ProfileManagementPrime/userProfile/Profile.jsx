import React from 'react';
import { useEffect } from 'react';
import './test6.css'


const ProfileU = () => {
 /*  const myScript = (elements) => {
    let toggle = elements.toggle;
    let card = elements.card;
  
    toggle.onclick = function () {
      card.classList.toggle('active');
    };
  };
 useEffect(() => {
    const toggle = document.querySelector('.toggle');
    const card = document.querySelector('.card');

    myScript({ toggle, card });
  }, []); */

  return (
    <div>
       <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        <div className="card">
          <div className="user">
            <div className="imgBx">
              <img alt='img'  src={require('./InShot_20230204_134723951.jpg')} />
            </div>
            <div className="content">
              <h2>Harshit Bhalani<br /><span>Web Developer<span /></span></h2>
            </div>
            <span className="toggle" />
          </div>
          <ul className="contact">
            <li className='class1'>
              <a
                href="https://harshitbhalani.github.io/Harshit_Bhalani_Portfolio.github.io/"
                target="_blank"
              >
                <div className="iconBx"><i className="fa-solid fa-user" /></div>
                <p>Portfolio | Harshit Bhalani</p>
              </a>
            </li>
            <li  className='class2'>
              <a href="https://github.com/HarshitBhalani" target="_blank">
                <div className="iconBx">
                  <i className="fa-brands
            fa-github" />
                </div>
                <p>Github | HarshitBhalani</p>
              </a>
            </li>
            <li className='class3'>
                <a href="https://www.linkedin.com/in/harshit-bhalani-k-0b05a3251/" target="_blank">
                    <div class="iconBx"><i class="fa-brands
            fa-linkedin-in"></i></div>
                    <p>Linkedin | Harshit Bhalani</p>
                </a>
            </li>
          </ul>
        </div>

        <div className='settings'>
          <div className='container'>
          
          </div>
        </div>
       {/*  <div className='settings'>
          <div className='container'>
          
          </div>
        </div> */}
      </div> 
    </div>
  );
};

export default ProfileU;
