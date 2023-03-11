import React  from 'react';
import { Fragment } from "react";

import Carousel from "react-elastic-carousel";
import Item from "./Item";

function FooterTestimonials() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
      
      ];
    return (<Fragment>
    {/* <!-- Testimonials footer --> */} 
                <footer className="testimonials_wrap sc_section bg_tint_dark post_ts_bg3">
                    <div className="carousel">
                        <Carousel breakPoints={breakPoints}>
                            <Item>
                                <div >
                                    <div className="sc_testimonial_item">
                                        <div className="sc_testimonial_avatar">
                                            <img alt="" src={require("../../assets/images/users/user1.jpg")} />
                                        </div>
                                        <div className="sc_testimonial_content">
                                        <p>Best purchase i made in envato. Great Theme!</p>
                                        </div>
                                        <div className="sc_testimonial_author">
                                            <a href="#">Sarah Jefferson</a>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div >
                                    <div className="sc_testimonial_item">
                                        <div className="sc_testimonial_avatar">
                                            <img alt="" src={require("../../assets/images/users/user1.jpg")} />
                                        </div>
                                        <div className="sc_testimonial_content">
                                        <p>Best purchase i made in envato. Great Theme!</p>
                                        </div>
                                        <div className="sc_testimonial_author">
                                            <a href="#">Sarah Jefferson</a>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                            <Item>
                                <div >
                                    <div className="sc_testimonial_item">
                                        <div className="sc_testimonial_avatar">
                                            <img alt="" src={require("../../assets/images/users/user1.jpg")} />
                                        </div>
                                        <div className="sc_testimonial_content">
                                        <p>Best purchase i made in envato. Great Theme!</p>
                                        </div>
                                        <div className="sc_testimonial_author">
                                            <a href="#">Sarah Jefferson</a>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                        </Carousel>
                     </div>
                </footer>
        {/* <!-- /Testimonials footer --> */}


</Fragment>);
}

export default FooterTestimonials;