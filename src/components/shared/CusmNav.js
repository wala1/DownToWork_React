import  { Fragment } from 'react';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import useStore from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Joyride from 'react-joyride';
import { Steps } from '../Shop/steps';
import ChatIcon from '@mui/icons-material/Chat';



const clientId = "1075754340245-lvt55d4eg0jvi5608u9eg6af8ur1f9fr.apps.googleusercontent.com";

function CusmNav() {


	const navigate = useNavigate();

	const handleSignIn = () => {
		navigate('/signup2');
	};
	const handleclickShop = () => {
		navigate('/products');
	};
	const handleCartClick = () => {
		navigate('/cart');
	}

	return (<Fragment>
		<header className="top_panel_wrap bg_tint_dark" style={{"padding-top":0}}>

			{/* <!-- User menu --> */}
			
				{/* <!-- /User menu -->
				<!-- Main menu --> */}
			<div className="menu_main_wrap logo_left">
				<div className="content_wrap clearfix">
					{/* <!-- Logo --> */}
					
					{/* <!-- Logo -->
						<!-- Search --> */}
	
					{/* <!-- /Search -->
						<!-- Navigation --> */}
						<nav className="menu_main_nav_area">
							<ul id="menu_main" className="menu_main_nav">
								<li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><Link to={"/"} >Homepage</Link> 
									<ul className="sub-menu">
										<li className="menu-item current-menu-item page_item current_page_item "><a href="index.html">Homepage Wide</a></li>
										<li className="menu-item"><a href="homepage-2.html">Homepage Boxed</a></li>
										<li className="menu-item"><a href="homepage-3.html">Homepage Photos</a></li>
									</ul>
								</li>
								{/* <li className="menu-item menu-item-has-children"><a href='/topics'>Courses</a>
									<ul className="sub-menu">
										<li className="menu-item"><a href="typography.html">Typography</a></li>
										<li className="menu-item"><a href="shortcodes.html">Shortcodes</a></li>
										<li className="menu-item"><a href="video-tutorials.html">Video Tutorials</a></li>
										<li className="menu-item"><a href="events.html">Events Calendar</a></li>
										<li className="menu-item"><a href="about-us.html">About Us</a></li>
										<li className="menu-item"><a href="contact-us.html">Contact Us</a></li>
										<li className="menu-item"><a href="not-existing-page.html">Page 404</a></li>
										<li className="menu-item"><a href="not-existing-page-2.html">Page 404 (Style 2)</a></li>
									</ul>
								</li> */}
								{<li className="menu-item menu-item-has-children"><a href="topics">Courses</a>
									<ul className="sub-menu">
										<li className="menu-item"><a href="courses-streampage.html">All courses</a></li>
										<li className="menu-item"><a href="free-course.html">Free course</a></li>
										<li className="menu-item"><a href="paid-course.html">Paid course</a></li>
										<li className="menu-item menu-item-has-children"><a href="#">Lessons</a>
											<ul className="sub-menu">
												<li className="menu-item"><a href="free-lesson.html">Free lesson (started)</a></li>
												<li className="menu-item"><a href="free-lesson-coming-soon.html">Free lesson (coming soon)</a></li>
												<li className="menu-item"><a href="lesson-from-paid-course.html">Lesson from paid course</a></li>
											</ul>
										</li>
									</ul>
								</li>}
								<li className="menu-item menu-item-has-children"><a href='' onClick={() => {navigate('/team')}}>Teachers</a>
									<ul className="sub-menu">
										<li className="menu-item"><a href="team-members.html">Teachers Team</a></li>
										<li className="menu-item"><a href="personal-page.html">Teacher&#8217;s Personal Page</a></li>
									</ul>
								</li>
								<li className="menu-item menu-item-has-children"><a href="blog-streampage.html">Blog</a>
									<ul className="sub-menu">
										<li className="menu-item menu-item-has-children"><a href="#">Post Formats</a>
											<ul className="sub-menu">
												<li className="menu-item"><a href="post-formats-with-sidebar.html">With Sidebar</a></li>
												<li className="menu-item"><a href="post-formats.html">Without sidebar</a></li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children"><a href="#">Masonry tiles</a>
											<ul className="sub-menu">
												<li className="menu-item"><a href="masonry-2-columns.html">Masonry (2 columns)</a></li>
												<li className="menu-item"><a href="masonry-3-columns.html">Masonry (3 columns)</a></li>
											</ul>
										</li>
										<li className="menu-item menu-item-has-children"><a href="#">Portfolio tiles</a>
											<ul className="sub-menu">
												<li className="menu-item"><a href="portfolio-2-columns.html">Portfolio (2 columns)</a></li>
												<li className="menu-item"><a href="portfolio-3-columns.html">Portfolio (3 columns)</a></li>
												<li className="menu-item menu-item-has-children"><a href="#">Portfolio hovers</a>
													<ul className="sub-menu">
														<li className="menu-item"><a href="portfolio-hovers-circle.html">Circle, Part 1</a></li>
														<li className="menu-item"><a href="portfolio-hovers-circle-part-2.html">Circle, Part 2</a></li>
														<li className="menu-item"><a href="portfolio-hovers-circle-part-3.html">Circle, Part 3</a></li>
														<li className="menu-item"><a href="portfolio-hovers-square.html">Square, Part 1</a></li>
														<li className="menu-item"><a href="portfolio-hovers-square-part-2.html">Square, Part 2</a></li>
														<li className="menu-item"><a href="portfolio-hovers-square-part-3.html">Square, Part 3</a></li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="menu-item"><a onClick={handleclickShop}>Shop</a></li>
							</ul>
						</nav>
						{/* <!-- /Navigation --> */}
                    </div>
                </div>
				{/* <!-- /Main menu --> */}
				
            </header>

	</Fragment>);
}

export default CusmNav;