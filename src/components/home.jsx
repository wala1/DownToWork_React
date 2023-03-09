import React, { Fragment } from 'react';
import NavBar from './shared/NavBar';
import Footer from './shared/footerContact';
import FooterContact from './shared/footerContact';
import FooterTestimonials from './shared/footerTestimonials';
import FooterWidget from './shared/footerWidget';
import FeaturesSections from './home/featuresSections';
import CourseSection from './home/CourseSection';
import PartnersComponent from './home/partnersComponent';
import VideoComponent from './home/videoComponent';
import PricingComponent from './home/PricingComponent';
import RevolutionSlider from './home/revolutionSlider';

function Home() {
    return (
        <Fragment >
          <div className="top_panel_fixed_wrap"></div>

            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                         {/* Navbar */} <NavBar/>
                       {/* <!-- Revolution slider --> */}<RevolutionSlider/>  {/* {/* <!-- Revolution slider --> */}
		        	{/* <!-- Content --> */} 
                    <div className="page_content_wrap">
                        <div className="content">
                            <article className="post_item post_item_single page">
                                <section className="post_content">
                                    {/* <!-- Features section --> */} <FeaturesSections/> {/* <!-- /Features section -->*/}	                
							        {/* <!-- Courses section -->  */} <CourseSection/>    {/* <!-- /Courses section -->*/}
                                    {/* <!-- Partners section --> */} <PartnersComponent/>    {/* <!-- /Partners section --> */}
                                    {/* <!-- Video training section -->*/} <VideoComponent/> {/* <!-- /Video training section -->	*/}
                                    {/*<!-- Pricing section --> */}  <PricingComponent/> {/* <!-- /Pricing section --> */}        
                               </section>
                            </article>
                        </div>
                    </div>
                    {/* <!-- /Content without sidebar -->*/}
                    {/* Footer parts */}
                    <FooterWidget/>
                    <FooterTestimonials/> 
                    <FooterContact/>
                </div>
            </div>
        </Fragment>
    );
}
export default Home;