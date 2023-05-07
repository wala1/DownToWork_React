import  { Fragment } from 'react';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import { TextField } from '@mui/material';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
//import Profile from "../profile/profile";
import Home from "../home";
import useStore from '../../store/store';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

function NavBar() {

	// useEffect(() => {
	// 	function start(){
	// 	  gapi.client.init({
	// 		clientId: clientId,
	// 		scope: ""
	// 	  })
	// 	};
	// 	gapi.load('client:auth2', start);
	//   })

	//const user = localStorage.getItem('user');
	// const name = user.name;
	const userString = localStorage.getItem("user");
	const user = JSON.parse(userString);
	const logout = useStore((state) => state.logout);
	const loading = useStore((state) => state.loading);
	const navigate = useNavigate();
	const handleLogout = async () => {
		useStore.setState({ loading:true });
		try {
			await logout();
			navigate('/');
			setTimeout(() => {
			useStore.setState({ loading:false });}, 1000);

		} catch (error) {
			console.log(error);
		}
		useStore.setState({ isLoaded: true });
	};

	// const handleSignIn = () => {
	// 	navigate('/signIn');
	// };
	const handleSignIn = () => {
		navigate('/signup2');
	};
	const handleclickShop = () => {
		navigate('/products');
	};
	const handleCartClick = () => {
		navigate('/cart');
	}
const quantity =useSelector(state=>state.cart.quantity)


		
			const [open, setOpen] = React.useState(false);
		  
			const handleClickOpen = () => {
			  setOpen(true);
			};
		  
			const handleClose = () => {
			  setOpen(false);
			};
		  
			
		



	return (<Fragment>
		<header className="top_panel_wrap bg_tint_dark" style={{"paddingTop":0}}>
			{/* <!-- User menu --> */}
			<div className="menu_user_wrap">
				<div className="content_wrap clearfix">
					<div className="menu_user_area menu_user_right menu_user_nav_area" style={{marginTop: '-38px'}}>
						<ul id="menu_user" className="menu_user_nav d-flex column">
							{/* <li class="menu_user_cart">
								
                                    <a href="#" className='cart_button' onClick={handleCartClick}><span>Cart</span> <b class="cart_total"><span class="amount">&pound;511.39</span></b></a>
									<ul class="widget_area sidebar_cart sidebar fadeOutDown animated fast bounceIn">
										<li class="">
											<div class="widget woocommerce widget_shopping_cart">
												<div class="hide_cart_widget_if_empty">
													<div class="widget_shopping_cart_content">
														<ul class="cart_list product_list_widget ">
															<li class="mini_cart_item">
																<a title="Remove this item" class="remove" href="#">×</a>													
																<a href="product-page.html">
																	<img alt="" src="http://placehold.it/50x50"></img>Introduction to Biomedical Imaging&nbsp;
																</a>
																<span class="quantity">1 × <span class="amount">£350.00</span></span>					
															</li>
															<li class="mini_cart_item">
																<a title="Remove this item" class="remove" href="#">×</a>													
																<a href="product-page.html">
																	<img alt="" src="http://placehold.it/50x50"></img>Introduction to Computer Science&nbsp;
																</a>
																<span class="quantity">1 × <span class="amount">£120.00</span></span>					
															</li>
															<li class="mini_cart_item">
																<a title="Remove this item" class="remove" href="#">×</a>													
																<a href="product-page.html">
																	<img alt="" src="http://placehold.it/50x50"></img>Star Print Backpack&nbsp;							
																</a>
																<span class="quantity">1 × <span class="amount">£41.39</span></span>					
															</li>						
														</ul>
														<p class="total"><strong>Subtotal:</strong> <span class="amount">£511.39</span></p>
														<p class="buttons">
															<a class="button wc-forward" href="cart.html">View Cart</a>
															<a class="button checkout wc-forward" href="checkout.html">Checkout</a>
														</p>
													</div>
												</div>
											</div>
										</li>
									</ul>
                                </li> */}

							<button  className='btnCart'  onClick={handleCartClick}>
							{/* <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} /> */}
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
									<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
								</svg>
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
									{quantity}
									{/* <span class="visually-hidden">unread messages</span> */}
								</span>
							</button>
							
							{user&&<li className="menu_user_bookmarks">
								<Link to="/chat">
								<span><ChatIcon/></span>
								</Link>
								{/* <ul className="bookmarks_list">
									<li><a  className="bookmarks_add icon-star-empty" title="Add the current page into bookmarks">Add bookmark</a></li>
								</ul> */}
							</li>}
							{user ? <li className="menu_user_controls">
								<Link to="/Profile">
									<span className="user_avatar">
										<img alt="" src={`http://localhost:3001/${user.picture.imagePath}`} srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=32&amp;d=mm&amp;r=g 2x" className="avatar avatar-16 photo" height="16" width="16" />
									</span>
									<span className="user_name">{(user?.name) || (userString)} </span>
								</Link>
								<ul>
									<li><a href="#" className="icon icon-doc-inv">New post</a></li>
									<li><a href="#" className="icon icon-cog-1">Settings</a></li>
								</ul>

							</li> : <li className="menu_user_controls">
								<a href="#">
									<span className="user_avatar">
										<img alt="" src="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=16&#038;d=mm&#038;r=g" srcSet="http://1.gravatar.com/avatar/45e4d63993e55fa97a27d49164bce80f?s=32&amp;d=mm&amp;r=g 2x" className="avatar avatar-16 photo" height="16" width="16" />
									</span>
									<span className="user_name">Guest</span></a>
								{/* <ul>
                                        <li><a href="#" className="icon icon-doc-inv">New post</a></li>
                                        <li><a href="#" className="icon icon-cog-1">Settings</a></li>
                                    </ul> */}
                                </li>}
                                <li className="menu_user_logout">
									{user? <div>
				{/* <Button className="icon icon-logout" onClick={handleClickOpen}>
				  Open 
				</Button> */}
				<a href="#" className="icon icon-logout" style={{paddingLeft:2 , paddingRight:2}} onClick={handleClickOpen}>Logout</a>
				<Dialog
				  open={open}
				  onClose={handleClose}
				  aria-labelledby="alert-dialog-title"
				  aria-describedby="alert-dialog-description"
				>
				  <DialogTitle id="alert-dialog-title">
					{"Logout"}
				  </DialogTitle>
				  <DialogContent>
					<DialogContentText id="alert-dialog-description">
					  Are you sure you want to logout?
					</DialogContentText>
				  </DialogContent>
				  <DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={()=>handleLogout()} autoFocus>
					  Agree
					</Button>
				  </DialogActions>
				</Dialog>
			  </div> :
									<a href="#" className="icon icon-logout" onClick={()=>handleSignIn()}>Log-In</a>}
									{/* <a href="#" className="icon icon-logout" onClick={()=>handleLogout()}>Logout</a> */}
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
							{/* <h3> Down To Work </h3> */}
						</a>
					</div>
					{/* <!-- Logo -->
						<!-- Search --> */}
					<div className="search_wrap search_style_regular search_ajax" >
						<a href="#" className="search_icon icon-search-2"></a>
						<div className="search_form_wrap">
							<form method="get" className="search_form" action="#">
								<button type="submit" className="search_submit icon-zoom-1" title="Start search"></button>
								<TextField id="standard-basic" label="Standard" variant="standard" />							</form>
						</div>
						<div className="search_results widget_area bg_tint_light">
							<a className="search_results_close icon-delete-2"></a>
							<div className="search_results_content">
							</div>
						</div>
					</div>
					{/* <div style={{
						position :'relative',
						top: 50,
						//height: 50,
						display: 'flex',
						flexGrow:0,
						zIndex:10
					}}>
						<TextField id="standard-basic" label="Standard" variant="standard" />
					</div> */}
					{/* <!-- /Search -->
						<!-- Navigation --> */}
                        <a href="#" className="menu_main_responsive_button icon-menu-1"></a>
						<nav className="menu_main_nav_area">
							<ul id="menu_main" className="menu_main_nav">
								<li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent"><Link to={"/"} >Homepage</Link> 
									{/* <ul className="sub-menu">
										<li className="menu-item current-menu-item page_item current_page_item "><a href="index.html">Homepage Wide</a></li>
										<li className="menu-item"><a href="homepage-2.html">Homepage Boxed</a></li>
										<li className="menu-item"><a href="homepage-3.html">Homepage Photos</a></li>
									</ul> */}
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
								{user&&<li className="menu-item menu-item-has-children"><a href="topics">Courses</a>
									{/* <ul className="sub-menu">
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
									</ul> */}
								</li>}
								{user&&<li className="menu-item menu-item-has-children"><a href="/gamesList">Games</a>
									<ul className="sub-menu">
										<li className="menu-item"><a href="#">Memory Game</a></li>
										<li className="menu-item"><a href="#">Sudoku Game</a></li>
										<li className="menu-item"><a href="#">Tic Tac</a></li>
										
									</ul>
								</li>}
								<li className="menu-item menu-item-has-children"><a href=""  onClick={() => {navigate('/team')}}>Teachers</a>
									{/* <ul className="sub-menu">
										<li className="menu-item"><a href="team-members.html">Teachers Team</a></li>
										<li className="menu-item"><a href="personal-page.html">Teacher&#8217;s Personal Page</a></li>
									</ul> */}
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
		<Routes>
		{/* 	<Route path="/profile" element={<Profile/>}></Route> */}
		</Routes>
	</Fragment>);
}

export default NavBar;