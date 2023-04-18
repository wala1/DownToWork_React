import { React, useState , useEffect , useRef} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import 'moment-duration-format';
import Post from './post';

const Newsfeed = () => {

    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);

    const [posts, setPosts] = useState([]);

    const urlGetPosts = 'http://localhost:3001/post/getAll';

    useEffect(() => {
        // appel API pour récupérer les publications existantes
        axios.get(urlGetPosts).then((response) => {
          setPosts(response.data);
        });
      }, []);


     return (
      <div>
      <div class="container ">
        <div class="row justify-content-end">

        {posts.map((post) => {
               const date = moment(post.date);
               const duration = moment.duration(moment().diff(date));
               let formattedDate;

               if (duration.asDays() > 1) {
                 formattedDate = duration.format('d [days] ago', { trim: 'both' });
               } else if (duration.asDays() === 1) {
                 formattedDate = 'Yesterday';
               } else {
                 formattedDate = 'Today';
               }
              return (
               <Post 
                  date={formattedDate}
                  text={post.text}
                  name={post.name} 
                  dislikes={post.dislikes.length}
                  likes={post.likes.length}
               />
              );
             })}
         
       </div>
      </div>
    </div>
  );
};

export default Newsfeed;
