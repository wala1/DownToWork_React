import React from 'react';
import { Link } from 'react-router-dom';

function Topic({name,image}) {
    return ( <>
     <div className=" itemCourse cardCourse">
        <img src={image} className="card-img-course" alt=""/>
        <div className="card-body-course">
            <h1 className="card-title-course"> {name} </h1>
            <p className="card-sub-title-course">CERTIFICATED</p>
            <p className="card-info-course"> this is the description for the topic</p>
            <div className="post_buttons_wrapper">
                <Link
                    to={`/topics/courses/${name}`}
                    className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small"
                >
                JOIN
                </Link>
            </div>
        </div>                                  
    </div>
    
    </> );
}

export default Topic