import { Fragment } from "react";

const FooterTestimonials = () => {
    return (<Fragment>
        {/* <!-- Testimonials footer --> */} 
                    <footer className="testimonials_wrap sc_section bg_tint_dark post_ts_bg3">
                        <div className="sc_section_overlay" data-bg_color="#1eaace" data-overlay="0">
                            <div className="content_wrap">
                                {/* <!-- Testimonials section --> */}
                                <div className="sc_testimonials sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_controls sc_slider_height_fixed aligncenter height_12em width_100per" data-old-height="12em" data-interval="7000">
                                    <div className="slides swiper-wrapper">
                                        <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                                            <div className="sc_testimonial_item">
                                                <div className="sc_testimonial_avatar">
                                                    <img alt="" src="http://placehold.it/70x70" /></div>
                                                <div className="sc_testimonial_content">
                                                    <p>Best purchase i made in envato. Great Theme!</p>
                                                </div>
                                                <div className="sc_testimonial_author">
                                                    <a href="#">Sarah Jefferson</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                                            <div className="sc_testimonial_item">
                                                <div className="sc_testimonial_avatar">
                                                    <img alt="" src="http://placehold.it/70x70" /></div>
                                                <div className="sc_testimonial_content">
                                                    <p>Thank you for all your help and assistance over the years with our products.
                                                        <br /> I would have no hesitation in recommending you to my clients.</p>
                                                </div>
                                                <div className="sc_testimonial_author">
                                                    <a href="#">David Anderson</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide height_12em width_100per" data-style="width:100%;height:12em;">
                                            <div className="sc_testimonial_item">
                                                <div className="sc_testimonial_content">
                                                    <div className="sc_number aligncenter margin_bottom_1_5em">
                                                        <span className="sc_number_item">4</span>
                                                        <span className="sc_number_item">0</span>
                                                        <span className="sc_number_item">0</span>
                                                    </div>
                                                    faculty and staff teaching courses and discussing topics online
                                                </div>
                                                <div className="sc_testimonial_author">online Education</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sc_slider_controls_wrap">
                                        <a className="sc_slider_prev" href="#"></a>
                                        <a className="sc_slider_next" href="#"></a>
                                    </div>
                                </div>
                                {/* <!-- /Testimonials section --> */}
                            </div>
                        </div>
                    </footer>
                    {/* <!-- /Testimonials footer --> */}
 

    </Fragment>);
}
 
export default FooterTestimonials;
