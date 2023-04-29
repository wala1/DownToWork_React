import React, { Fragment, useEffect } from 'react';
import NavBar from './shared/NavBar';
import Footer from './shared/footerContact';
import FooterContact from './shared/footerContact';
import FooterTestimonials from './shared/footerTestimonials';
import FooterWidget from './shared/footerWidget';
import Home from './home';
import useStore from '../store/store';

import { useNavigate } from 'react-router-dom';
// import FeaturesSections from './home/featuresSections';
// import CourseSection from './home/CourseSection';
// import PartnersComponent from './home/partnersComponent';
// import VideoComponent from './home/videoComponent';
// import PricingComponent from './home/PricingComponent';
// import RevolutionSlider from './home/revolutionSlider';
import { Outlet } from 'react-router-dom';
//import useStore from '../store/store';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


function Main() {
  const isLogged = useStore((state) => state.isLogged);
  const loading = useStore((state) => state.loading);
  const navigate = useNavigate();
  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);  
    // const user = useStore((state) => state.user);
    // const navigate = useNavigate();
    // if(!user) navigate('/');
    // useEffect(() => {
    //     if(!localStorage.getItem('token')) navigate('/signIn');
    // }, [isLogged]);
    useEffect(() => {
      if (user) {
        
      if (user.isAdmin) {
        navigate("/dashboard");
      }}
    }, [user]);

    
if(loading){
  return(
  <Box sx={{ display: 'flex' , justifyContent:'center', margin:40}}>
  <CircularProgress />
  </Box>)
  }


  return (

    <Fragment  className='home page body_style_fullscreen body_filled article_style_stretch layout_single-standard top_panel_style_dark top_panel_opacity_transparent top_panel_show top_panel_over menu_right user_menu_show sidebar_hide'>
          <div className="top_panel_fixed_wrap"></div>

            <div className="body_wrap">
                <div className="page_wrap">
                    <div className="top_panel_fixed_wrap"></div>
                         {/* Navbar */} <NavBar/>
                         <div style={{"padding-top":90}}>
                                        <Outlet>
                                            {/* <Home path="home" /> */}
                                        </Outlet>
                                        </div>

                    {/* <!-- /Content without sidebar -->*/}
                    {/* Footer parts */}
                    {/* <FooterWidget/>
                    <FooterTestimonials/>  */}
                    {/* <FooterContact/> */}
                </div>
            </div>
        </Fragment>
  )
}

export default Main;
