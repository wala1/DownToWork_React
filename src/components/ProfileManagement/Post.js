import React, { useEffect , useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import './Side.css';

const Post = ({post, deletePost, isCurrent}) => {
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);

  const navigate = useNavigate()

  const [pathUser, setpathUser] = useState({});

  const urlGetImagePath = 'http://127.0.0.1:3001/users/getImagePath/';
  const urlUserById = 'http://localhost:3001/users/getById/';
  const [imagePath, setimagePath] = useState('');

 useEffect(() => {
    console.log(post.user);
    axios
    .get (urlGetImagePath + post.user)
    .then (response => {
      setimagePath (response.data);
    })
    .catch (err => {
      console.log (err);
    });

    axios
    .get (urlUserById + post.user)
    .then (response => {
      setpathUser (response.data);
    })
    .catch (err => {
      console.log (err);
    });

 }, []);

 useEffect (
    () => {
    console.log ('imagePath:', imagePath);
    },
    [imagePath , pathUser]
  );


  return (
    <div class="">
      <div class="sc_team_item sc_team_item_2 even">
        <div class="sc_team_item_avatar">
          <p>
            {/* Être porteur d’une trisomie 21 n’est, en soi, pas perçu comme un état de souffrance. Les personnes rencontrées parlent d’elles-mêmes avec plaisir, de leur naissance au jour de l’entretien.

            14En revanche, se découvrir porteur d’une trisomie 21 est décrit comme étant davantage un état de profonde douleur. Cette découverte passe tout d’abord par le regard de l’autre, dans son acceptation ou son refus. Elle passe ensuite par l’inventaire de ses propres défaillances et, enfin, par un face-à-face avec des projets personnels compromis. */}
            {post.text}
          </p>

        </div>
        <div className="sc_team_item_info d-flex align-items-center justify-content-between">
          <img
            alt=""
            src={`http://localhost:3001/${imagePath}`}
            srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=150&d=mm&r=g 2x"
            className="prof_img_avat"
            height={75}
            width={55}
            style={{flexShrink: 0, height: '50px', width: '75px'}}
          />
          <div>
            <h6 className="sc_team_item_infos">
              <a href="" onClick={() => {navigate (`/profile?id=${pathUser._id}`)}}>{post.name}</a>
            </h6>
            <div className="sc_team_item_position">{pathUser.statut}</div>
          </div>
          <div className="BtnPost">
            <Button
              variant="link"
              className="mr-3"
              onClick={() => deletePost (post._id)}
            >
              Delete post
            </Button>
            <Button variant="link">Edit post</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
