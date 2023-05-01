import React, {useEffect} from 'react';
import User from './User';

const Team = () => {
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
  }, []);

  const users = [{id :1 , name : 'Ons' , email : 'Ons.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'}
,{id : 2 , name : 'Kaouther' , email : 'Kaouther.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 3 , name : 'Iheb' , email : 'iheb.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 4 , name : 'Houssem' , email : 'Houssem.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 5 , name : 'Amir' , email : 'Amir.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 6 , name : 'Rim' , email : 'Rim.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 7 , name : 'Amir' , email : 'Amir.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'},
{id : 8 , name : 'Ines' , email : 'Ines.diweni@gmail.com' , img : 'https://media.gettyimages.com/id/1126913832/fr/photo/beaut%C3%A9-chez-les-adolescentes.jpg?s=612x612&w=0&k=20&c=nciqWzowvT74AXdcasCb5y_hZiLKkrYmSlgnBWae7oE'}]
  
return (
    <div>
      <header>
        <div className="container-img">
          <div class="heading" />
        </div>
      </header>
      <div className="container">
        <div className="con">
            {users.map ((u) => (
                      <User  key={u.id} />
                  ))} 
        </div>
      </div>
    </div>
  );
};

export default Team;
