import { Fragment } from "react";

function RevolutionSlider() {
    return ( 
        <Fragment>
             {/* <!-- Revolution slider --> */}
             <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_education_home_slider" >
                        <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
                            <div id="rev_slider_1_1" className="rev_slider fullwidthabanner  height_630 max-height_630">
                                <ul>
                                    {/* <!-- Slide 1 --> */}
                                    <li data-transition="random" data-slotamount="7" data-masterspeed="300" data-saveperformance="off">
                                        <img src={require("../../assets/images/bg/blue.jpg")} alt="blue" data-bgposition="center top" data-bgfit="normal" data-bgrepeat="repeat" />
                                        {/* <div className="tp-caption customin stl cust-z-index-5 rs-cust-style8" data-x="40" data-y="200" data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:360;scaleX:0.1;scaleY:0.1;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;" data-speed="1300" data-start="500" data-easing="Power3.easeInOut" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="8250" data-endspeed="300">
                                            <img src="http://placehold.it/473x402" alt="" />
                                        </div> */}
                                        <div>
                                            <div className="tp-caption title sfb stb tp-resizeme cust-z-index-6 rs-cust-style1" data-x="570" data-y="200" data-speed="500" data-start="1350" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="8400" data-endspeed="300">Education Center
                                                and distance education
                                            </div>
                                            <div className="tp-caption slide_text sfb stb tp-resizeme cust-z-index-7 rs-cust-style2" data-x="570" data-y="355" data-speed="500" data-start="1750" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="8500" data-endspeed="300">
                                                <span className="font-w_400">Online Education leads the world in distance education with high quality online degrees and online courses.</span>
                                            </div>
                                            <div className="tp-caption slide_button customin stb tp-resizeme cust-z-index-8 rs-cust-style3" data-x="570" data-y="460" data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:20;transformOrigin:50% 100%;" data-speed="500" data-start="2200" data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-end="8600" data-endspeed="300">
                                                <a href="#" className="slide_button_white">Start Now</a>
                                            </div>

                                        </div>
                                       
                                    </li>
                                    
                                  
                                   
                                </ul>
                                <div className="tp-bannertimer"></div>
                            </div>
                        </div>
                    </section>
                    {/* {/* <!-- Revolution slider --> */}



        </Fragment>
     );
}

export default RevolutionSlider;