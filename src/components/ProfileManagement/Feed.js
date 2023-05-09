import React, {useEffect, useState} from 'react';
import CusmNav from '../shared/CusmNav';
import axios from 'axios';

import { useNavigate} from 'react-router-dom';
import Post from './Post';

const Feed = () => {
  const navigate = useNavigate ();
  const userString = localStorage.getItem ('user');
  const user = JSON.parse (userString);
  const token = localStorage.getItem ('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const urlPosts = 'http://127.0.0.1:3001/post/getAll';
  const [team, setTeam] = useState ([]);
  const [critere, setCritere] = useState ('');
  const [posts, setposts] = useState([]);


  const handelSearch = e => {
    setCritere (e.target.value);
  };



  /*   const heading = 'Please Meet Our Profiles Down To Work';
  let i = 0;
  function typing () {
    if (i < heading.length) {
      document.querySelector ('.heading').innerHTML += heading.charAt (i);
      i++;
      setTimeout (typing, 150);
    }
  } */

  useEffect (() => {
    //  typing ();

    axios
      .get (urlPosts)
      .then (response => {
        setposts (response.data);
      })
      .catch (err => {
        console.log (err);
      });
  }, []);

  return (
    <div>

      <CusmNav />
      
      <br /><br /><br /><br /> <br /><br /><br /><br />
      <div className="Search" >
        <h1
          style={{
            backgroundColor: '#3aaf85',
            fontSize: '24px', fontWeight: 'bold',
            borderRadius: '5px',
            color: 'white',
            outline: 'none', // ajout de cette ligne pour désactiver l'effet de soulignement
          }}

        >
Recent Articles
        </h1>
     
      </div>
      
      {/* Body */}
     
      <div className="body_wrap" >

        <div className="page_wrap">
          <div className="" />

          {/* Content */}

          <div className="page_content_wrap">
            <div className="content">
              <article className="post_item post_item_single page type-page">
                <section className="post_content">

                  <div
                    className="sc_section accent_top"
                    data-animation="animated fadeInUp normal sc_bg1"
                  />
                  <div
                    className="sc_section"
                    data-animation="animated fadeInUp normal"
                  >
                    <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp">
                      {/* <h2 className="sc_title sc_title_regular sc_align_center margin_top_0 margin_bottom_085em text_center">
                    Our Profiles Down To Work
                  </h2> */}
                      <div
                        className="sc_team sc_team_style_1"
                        data-animation="animated fadeInUp normal"
                      >
                        <div className="sc_columns columns_wrap">
                          {posts.length > 0 &&
                            posts.map (
                              (p /*  <User  key={u.id} user={u} /> */) => (
                                <div className="column-1_2">
                                  <Post key={p.id} post={p}  />
                                </div>
                              )
                            )}
                          {/*    <div className="column-1_3">
                     <h1>Heyy yess </h1>
                     </div> */}

                        </div>
                      </div>
                    </div>
                    <div
                      id="viewmore"
                      class="pagination_wrap pagination_viewmore"
                    >
                      <a
                        href="#"
                        id="viewmore_link"
                        class="theme_button viewmore_button"
                      >
                        <span class="icon-spin3 animate-spin viewmore_loading" />
                        <span class="viewmore_text_1">LOAD MORE</span>
                        <span class="viewmore_text_2">Loading ...</span>
                      </a>
                      <span class="viewmore_loader" />
                    </div>
                    {/*   <div className="sc_line sc_line_style_solid margin_top_1em" />
                      <a
                        href="courses-streampage.html"
                        data-animation="animated fadeInUp normal"
                        className="sc_button sc_button_square sc_button_style_filled sc_button_bg_menu sc_button_size_small aligncenter  sc_button_iconed icon-graduation margin_top_0 sc_button_courses_st1 margin_bottom_8 widht_12em"
                      >
                        VIEW ALL Profiles
                      </a>
                    </div> */}
                  </div>
                  <div className="sc_line sc_line_style_solid margin_top_0 margin_bottom_0" />
                </section>
              </article>
            </div>
          </div>
          {/* /Content */}
          {/* Widgets Footer */}

        </div>
      </div>

    </div>
  );
};

export default Feed;
