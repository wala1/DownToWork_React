import React, {useEffect , useState} from 'react';
import User from './User';
import axios from 'axios';

const Team = () => {
  
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const token = localStorage.getItem("token");
  const config = {
    headers: { 
      Authorization: `Bearer ${token}`
    }
  };
  const urlGetUsers = 'http://127.0.0.1:3001/users';
  const [team, setTeam] = useState([]);
  const heading = 'Please Meet Our Profiles Down To Work';
  let i = 0;

  function typing () {
    if (i < heading.length) {
      document.querySelector ('.heading').innerHTML += heading.charAt (i);
      i++;
      setTimeout (typing, 150);
    }
  }

  useEffect (() => {
    typing ();

    axios.get(urlGetUsers , config ).then((response) => {
      setTeam(response.data);
    }).catch((err) => { console.log(err);})

          console.log(team);

  }, []);


return (
    <div>
      <header>
        <div className="container-img">
          <div class="heading" />
        </div>
      </header>
      <div className="container">
        <div className="con">
            {team.length > 0 &&  team.map ((u) => (
                      <User  key={u.id} user={u} />
                  ))} 
        </div>
      </div>
    </div>
  );
};

export default Team;
