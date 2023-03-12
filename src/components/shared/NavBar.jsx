import React, { Fragment } from 'react';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Profile from "../profile/profile";
import Home from "../home";

const clientId = "1075754340245-9uddfgn78s5sult6mmcfuvugr4s4v7fh.apps.googleusercontent.com";

function NavBar() {
	
	useEffect(() => {
		function start(){
		  gapi.client.init({
			clientId: clientId,
			scope: ""
		  })
		};
		gapi.load('client:auth2', start);
	  })

      return ( 
	  <Fragment>
          <header className="top_panel_wrap bg_tint_dark">
			
				{/* <!-- User menu --> */}
                <div className="menu_user_wrap">
                    <div className="content_wrap clearfix">
                        <div className="menu_user_area menu_user_right menu_user_nav_area">
                            <ul id="menu_user" className="menu_user_nav">
                                <li className="menu_user_bookmarks">
                                    <a href="#" className="bookmarks_show icon-star-1" title="Show bookmarks"></a>
                                    <ul className="bookmarks_list">
                                        <li><a href="#" className="bookmarks_add icon-star-empty" title="Add the current page into bookmarks">Add bookmark</a></li>
                                    </ul>
                                </li>
                                <li className="menu_user_controls">
									<a href="#">
										<span className="user_avatar">
											<img alt="" src="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=16&#038;d=mm&#038;r=g" srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=32&amp;d=mm&amp;r=g 2x" className="avatar avatar-16 photo" height="16" width="16" />
										</span>
										<span className="user_name">John Doe</span>
									</a>
                                    <ul>
                                        <li><a href="#" className="icon icon-doc-inv">New post</a></li>
                                        <li><a href="#" className="icon icon-cog-1">Settings</a></li>
                                    </ul>
                                </li>
                                <li className="menu_user_logout">
									<a href="#" className="icon icon-logout">Logout</a>
								</li>
                            </ul>
                        </div>
                        <div className="menu_user_area menu_user_left menu_user_contact_area">Contact us on +216 28 597 602 or <a href="#">downtowork@gmail.com</a></div>
                    </div>
                </div>
				{/* <!-- /User menu -->
				<!-- Main menu --> */}
                <div className="menu_main_wrap logo_left">					
                    <div className="content_wrap clearfix">
						{/* <!-- Logo --> */}
                        <div className="logo">
                            <a href="index.html">
								{/* <img src={require("../../assets/images/educCenter.png")} className="logo_main" alt=""/>
								<img src={require("../../assets/images/educCenter.png")} className="logo_fixed" alt=""/> */}
								<h3> Down To Work </h3>
							</a>
                        </div>
						{/* <!-- Logo -->
						<!-- Search --> */}
                        <div className="search_wrap search_style_regular search_ajax" title="Open/close search form">
                            <a href="#" className="search_icon icon-search-2"></a>
                            <div className="search_form_wrap">
                                <form method="get" className="search_form" action="#">
                                    <button type="submit" className="search_submit icon-zoom-1" title="Start search"></button>
                                    <input type="text" className="search_field" placeholder="" value="" name="s" title="" />
                                </form>
                            </div>
                            <div className="search_results widget_area bg_tint_light">
                                <a className="search_results_close icon-delete-2"></a>
                                <div className="search_results_content">
							</div>
                            </div>
                        </div>
						{/* <!-- /Search -->
						<!-- Navigation --> */}
                        <a href="#" className="menu_main_responsive_button icon-menu-1"></a>
						<nav className="menu_main_nav_area">
							<ul id="menu_main" className="menu_main_nav">
								<li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><a href="index.html">Homepage</a>
									<ul className="sub-menu">
										<li className="menu-item current-menu-item page_item current_page_item "><a href="index.html">Homepage Wide</a></li>
										<li className="menu-item"><a href="homepage-2.html">Homepage Boxed</a></li>
										<li className="menu-item"><a href="homepage-3.html">Homepage Photos</a></li>
									</ul>
								</li>
								<li className="menu-item menu-item-has-children"><a href="#">Features</a>
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
								</li>
								<li className="menu-item menu-item-has-children"><a href="courses-streampage.html">Courses</a>
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
								</li>
								<li className="menu-item menu-item-has-children"><a href="team-members.html">Teachers</a>
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
								<li className="menu-item"><a href="products.html">Shop</a></li>
							</ul>
						</nav>
						{/* <!-- /Navigation --> */}
                    </div>
                </div>
				{/* <!-- /Main menu --> */}
				
            </header>
    </Fragment> );
}

export default NavBar;