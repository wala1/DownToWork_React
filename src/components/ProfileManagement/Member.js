import React , {useState} from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Member = ({user}) => {
  const navigate = useNavigate ();
  const [currentUser, setCurrentUser] = useState({});

  const urlUserById = 'http://localhost:3001/users/getById/';

  const handleConnect = () => {
    navigate ('/profile');
  };


  useEffect(() => {
    axios.get (urlUserById + user._id).then (response => {
      setCurrentUser (response.data);
    })
  }, []);

  return (
    <div>

      <div className="sc_team_item sc_team_item_1 odd first">
        <div className="sc_team_item_avatar">
          <img alt="" src={`http://localhost:3001/${user.picture.imagePath}`} style={{flexShrink: 0, height: '350px', width: '375px'}} />
        </div>
        <div className="sc_team_item_info">
          <h6 className="sc_team_item_title">
            <a onClick={() => {navigate (`/profile?id=${user._id}`)}}>{user.name}</a>
          </h6>
          <div className="sc_team_item_position">
            {user.statut}
          </div>
          {/* <div className="sc_team_item_description">
            <p>
              Donec ut tincidunt purus. Vestibulum ultrices
              est id arcu iaculis, quis blandit nunc accumsan.
            </p>
          </div> */}
          <div className="sc_socials sc_socials_size_small">
            <div className="sc_socials_item">
              <a
                href="#"
                target="_blank"
                className="social_icons social_facebook"
              >
                <span className="sc_socials_hover social_facebook" />
              </a>
            </div>
            <div className="sc_socials_item">
              <a
                href="#"
                target="_blank"
                className="social_icons social_pinterest"
              >
                <span className="sc_socials_hover social_pinterest" />
              </a>
            </div>
            <div className="sc_socials_item">
              <a
                href="#"
                target="_blank"
                className="social_icons social_twitter"
              >
                <span className="sc_socials_hover social_twitter" />
              </a>
            </div>
            <div className="sc_socials_item">
              <a href="#" target="_blank" className="social_icons social_gplus">
                <span className="sc_socials_hover social_gplus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
