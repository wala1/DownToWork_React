
// import Nav from '../shared/NavBar';
// import React, { Fragment, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getProducts, rate } from '../../services/shopService';

// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addProduct } from "../../redux/cartSlice"
// import { FaStar } from "react-icons/fa"
// import Star from "./Star"
// import Joyride from 'react-joyride';
// import { Steps } from './steps';
// // import 'react-joyride/lib/react-joyride-compiled.css';

// function Products() {
// 	const navigate = useNavigate();
// 	const [products, setProducts] = useState([]);
// 	// const[product,setProduct]=useState({});
	

// 	const [rating, setRating] = useState(0);
	
// 	const handleAddProduct = () => {
// 		navigate('/addProduct');
// 	};
// 	const [quantity,setQuantity]=useState(0);
// 	const dispatch=useDispatch();
    
// 	const user = JSON.parse(localStorage.getItem('user'));
	
	
	


// 	useEffect(() => {
// 		const getProducts = async () => {
// 			axios.get('http://localhost:3001/product/getAll')
// 				.then(response => {
// 					setProducts(response.data);

// 				})
// 				.catch(error => {
// 					console.error(error);
// 				});
// 		};
// 		getProducts();
// 	}, []);
// 	//const filtredProducts = products.filter((product)=>product.ownerId!==user._id)
// 	// console.log(products)
	
// 	const myList = products.map((product) => {

// 		const handleAddToCart = () => {
// 			dispatch(addProduct({ product, quantity, prodPrice: product.prodPrice }));
// 		}
// 		const handleProductPage=()=>{
// 			const id =product._id;
// 			navigate(`/productPage/${id}`);
// 		}
// 		return <li className="first product has-post-thumbnail">
// 			<a href="product-page.html"></a>
// 			<div className="post_item_wrap">
// 				<div className="post_featured">
// 					<div className="post_thumb">
// 						<a className="hover_icon hover_icon_link" onClick={handleProductPage} >
// 							<img src={product.prodImg&&`http://localhost:3001/${product.prodImg.imgUrl}`} alt=""  />
// 						</a>
// 					</div>
// 				</div>
// 				<div className="post_content">
// 					<h3><a href="product-page.html"></a>{product.prodName}</h3>
// 					<h3><a href="product-page.html"></a>{product.prodDesc}</h3>
// 					<span className="price">
// 						<span className="amount">&pound;{product.prodPrice}</span>
// 					</span>
// 					{/* rating */}
// 					<div id='rating'>
// 					<Star id={product._id} rate={product.prodRate} />
// 					</div>
// 					<a href="#" className="button add_to_cart_button my-element " id='add-to-cart' onClick={handleAddToCart}>Add to cart</a>
// 					{/* <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} /> */}
// 				</div>
// 			</div>
// 		</li>;

// 	});



// 	return (

// 		<body className="archive body_style_wide body_filled article_style_boxed layout_single-standard top_panel_style_dark top_panel_opacity_transparent  top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page">
// 			{/* archive body_style_wide body_filled article_style_boxed top_panel_style_light top_panel_opacity_solid top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page */}

// 			<a id="toc_top" className="sc_anchor" title="To Top" data-description="&lt;i&gt;Back to top&lt;/i&gt; - &lt;br&gt;scroll to top of the page" data-icon="icon-angle-double-up" data-url="" data-separator="yes"></a>
// 			{/* <!-- Body --> */}
// 			<div className="body_wrap">
// 				<div className="page_wrap">
// 					<Nav />

// 					{/* <!-- Page title --> */}

// 					{/* <!-- /Page title --> */}
// 					{/* <!-- Content with sidebar --> */}
// 					<div className="page_content_wrap">
// 						<div className="content_wrap" style={{ marginTop: "250px" }}>
// 							{/* <!-- Content --> */}
// 							<div className="content">
// 								<div className="list_products shop_mode_thumbs">
								
// 									{user&&<button className='sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small alignleft sc_buttons_st1' id='add-new-product' onClick={handleAddProduct}> Add new Product</button>}
// 									<Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} />
// 									{/* <form className="woocommerce-ordering" method="get">
// 										<select name="orderby" className="orderby">
// 											<option value="menu_order" selected="selected" >Default sorting</option>
// 											<option value="popularity">Sort by popularity</option>
// 											<option value="rating" >Sort by average rating</option>
// 											<option value="date">Sort by newness</option>
// 											<option value="price">Sort by price: low to high</option>
// 											<option value="price-desc">Sort by price: high to low</option>
// 										</select>

// 									</form> */}
// 									<ul className="products d-flex row align-items-around">
// 										{myList}
										
// 										{/* <Joyride steps={tourSteps} /> */}
// 										{/* <li className="first product has-post-thumbnail">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src={`http://localhost:3001/${products.slice(0,1).map((product)=>product.prodImg.imgUrl)}`} alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html"></a>{products.slice(0,1).map((product)=>product.prodName)}</h3>
// 											<span className="price">
// 												<span className="amount">&pound;25.69</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail ">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src={`http://localhost:3001/${products.slice(1,2).map((product)=>product.prodImg.imgUrl)}`} alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html"></a>{products.slice(1,2).map((product)=>product.prodName)}</h3>
// 											<span className="price">
// 												<span className="amount">&pound;25.69</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li> */}
// 										{/* <li className="first product has-post-thumbnail">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">200 jazz licks</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;25.69</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="last product has-post-thumbnail ">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">200 jazz licks</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;25.69</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">200 jazz licks</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;25.69</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li> */}
// 										{/* <li className="last product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> </a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Adobe Photoshop Lightroom 5</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;374.19</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail column-1_2 sale">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<span className="onsale">Sale!</span>
// 													<img src="http://placehold.it/400x400" alt="" /> </a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Entrepreneurship 101: Who is your customer?</a></h3>
// 											<span className="price">
// 												<del><span className="amount">&pound;195.00</span></del> 
// 												<ins><span className="amount">&pound;180.00</span></ins>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
// 									</div>
//                                 </li>
//                                 <li className="last product type-product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Geology Fact Book</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;56.69</span>
// 											</span>				
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
// 									</div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail column-1_2 sale">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<span className="onsale">Sale!</span>
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Introduction to Biomedical Imaging</a></h3>
// 											<span className="price">
// 												<del><span className="amount">&pound;400.00</span></del> 
// 												<ins><span className="amount">&pound;350.00</span></ins>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
// 									</div>
//                                 </li>
//                                 <li className="last product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Introduction to Computer Science</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;120.00</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Leather Cap</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;20.00</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="last product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Long Sleeve Top With  Raglan Sleeve</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;33.25</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Medical Chemistry: The Molecular Basis…</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;185.00</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="last product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Principles of Written English, Part 1</a></h3>
// 											<span className="price">
// 												<span className="amount">&pound;85.00</span>
// 											</span>                                
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="first product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Principles of Written English, Part 2</a></h3>
// 											<div className="star-rating" title="Rated 5.00 out of 5">
// 												<span className="width_100per"><strong className="rating">5.00</strong> out of 5</span>
// 											</div>
// 											<span className="price">
// 												<span className="amount">&pound;85.00</span>
// 											</span>
// 											<a href="#" className="button add_to_cart_button">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li>
//                                 <li className="last product has-post-thumbnail column-1_2">
//                                     <a href="product-page.html"></a>
// 									<div className="post_item_wrap">
// 										<div className="post_featured">
// 											<div className="post_thumb">
// 												<a className="hover_icon hover_icon_link" href="product-page.html">
// 													<img src="http://placehold.it/400x400" alt="" /> 
// 												</a>
// 											</div>
// 										</div>
// 										<div className="post_content">
// 											<h3><a href="product-page.html">Star Print Backpack</a></h3>
// 											<div className="star-rating" title="Rated 5.00 out of 5">
// 												<span className="width_100per"><strong className="rating">5.00</strong> out of 5</span>
// 											</div>
// 											<span className="price">
// 												<span className="amount">&pound;41.39</span>
// 											</span>                                   
// 											<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a> 
// 										</div>
//                                     </div>
//                                 </li> */}
// 									</ul>
// 									<nav id="pagination" className="pagination_wrap pagination_pages">
// 										<span className="pager_current active ">1</span>
// 										<a href="#" className="">2</a>
// 										<a href="#" className="pager_next "></a>
// 										<a href="#" className="pager_last "></a>
// 									</nav>
// 								</div>
// 							</div>
// 							{/* <!-- /Content --> */}
// 							{/* <!-- Sidebar --> */}
// 							<div className="sidebar widget_area bg_tint_light sidebar_style_light">
// 								{/* <!-- Product category widget --> */}
// 								<aside className="woocommerce">
// 									<h5 className="widget_title">Product Categories</h5>
// 									<ul className="product-categories">
// 										<li><a href="product-category.html">Computer</a>
// 											<span className="count">(1)</span>
// 										</li>
// 										<li>
// 											<a href="product-category.html">Courses</a>
// 											<span className="count">(0)</span>
// 										</li>
// 										<li>
// 											<a href="product-category.html">Language</a>
// 											<span className="count">(2)</span>
// 										</li>
// 										<li>
// 											<a href="product-category.html">Marketing</a>
// 											<span className="count">(2)</span>
// 										</li>
// 										<li>
// 											<a href="product-category.html">Medicine</a>
// 											<span className="count">(2)</span>
// 										</li>
// 										<li>
// 											<a href="product-category.html">Products</a>
// 											<span className="count">(8)</span>
// 										</li>
// 									</ul>
// 								</aside>
// 								{/* <!-- /Product category widget --> */}
// 								{/* <!-- Recent products widget --> */}
// 								<aside className="woocommerce">
// 									<h5 className="widget_title">Recent Products</h5>
// 									<ul className="product_list_widget">
// 										<li>
// 											<a href="product-page.html" title="">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Leather Cap</span>
// 											</a>
// 											<span className="amount">&pound;20.00</span></li>
// 										<li>
// 											<a href="product-page.html" title="">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Star Print Backpack</span>
// 											</a>
// 											<span className="amount">&pound;41.39</span>
// 										</li>
// 										<li>
// 											<a href="product-page.html" title="Long Sleeve Top With  Raglan Sleeve">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Long Sleeve Top With  Raglan Sleeve</span>
// 											</a>
// 											<span className="amount">&pound;33.25</span>
// 										</li>
// 										<li>
// 											<a href="#" title="Yellow Backpack">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Yellow Backpack</span>
// 											</a>
// 											<span className="amount">&pound;74.19</span>
// 										</li>
// 									</ul>
// 								</aside>
// 								{/* <!-- /Recent products widget --> */}
// 								{/* <!-- Product tags widget --> */}
// 								<aside className="woocommerce widget_product_tag_cloud">
// 									<h5 className="widget_title">Product Tags</h5>
// 									<div className="tagcloud">
// 										<a href="product-tag.html" title="2 topics">backpacks</a>
// 										<a href="product-tag.html" title="3 topics">books</a>
// 										<a href="product-tag.html" title="1 topic">caps</a>
// 										<a href="product-tag.html" title="1 topic">clothes</a>
// 										<a href="product-tag.html" title="1 topic">computer</a>
// 										<a href="product-tag.html" title="6 topics">courses</a>
// 										<a href="product-tag.html" title="1 topic">design</a>
// 										<a href="product-tag.html" title="1 topic">geology</a>
// 										<a href="product-tag.html" title="2 topics">language</a>
// 										<a href="product-tag.html" title="1 topic">maps</a>
// 										<a href="product-tag.html" title="2 topics">marketing</a>
// 										<a href="product-tag.html" title="2 topics">medicine</a>
// 										<a href="product-tag.html" title="1 topic">music</a>
// 										<a href="product-tag.html" title="2 topics">seo</a>
// 										<a href="product-tag.html" title="1 topic">soft</a></div>
// 								</aside>
// 								{/* <!-- /Product tags widget --> */}
// 								{/* <!-- Top rated products widget --> */}
// 								<aside className="woocommerce">
// 									<h5 className="widget_title">Top Rated Products</h5>
// 									<ul className="product_list_widget">
// 										<li>
// 											<a href="product-page.html" title="Star Print Backpack">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Star Print Backpack</span>
// 											</a>
// 											<div className="star-rating" title="Rated 5.00 out of 5">
// 												<span className="width_100per">
// 													<strong className="rating">5.00</strong> out of 5
// 												</span>
// 											</div>
// 											<span className="amount">&pound;41.39</span>
// 										</li>
// 										<li>
// 											<a href="product-page.html" title="Principles of Written English, Part 2">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Principles of Written English, Part 2</span>
// 											</a>
// 											<div className="star-rating" title="Rated 5.00 out of 5">
// 												<span className="width_100per">
// 													<strong className="rating">5.00</strong> out of 5
// 												</span>
// 											</div>
// 											<span className="amount">&pound;85.00</span>
// 										</li>
// 										<li>
// 											<a href="product-page.html" title="Video Training for Microsoft products and technologies">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Video Training for Microsoft products and technologies</span>
// 											</a>
// 											<div className="star-rating" title="Rated 5.00 out of 5">
// 												<span className="width_100per">
// 													<strong className="rating">5.00</strong> out of 5
// 												</span>
// 											</div>
// 											<span className="amount">&pound;150.00</span>
// 										</li>
// 										<li>
// 											<a href="product-page.html" title="Yellow Backpack">
// 												<img src="http://placehold.it/75x75" alt="" />
// 												<span className="product-title">Yellow Backpack</span>
// 											</a>
// 											<div className="star-rating" title="Rated 4.00 out of 5">
// 												<span className="width_80per">
// 													<strong className="rating">4.00</strong> out of 5
// 												</span>
// 											</div>
// 											<span className="amount">&pound;74.19</span></li>
// 									</ul>
// 								</aside>
// 								{/* <!-- /Top rated products widget --> */}
// 							</div>
// 							{/* <!-- /Sidebar --> */}
// 						</div>
// 					</div>
// 					{/* <!-- /Content -->		 */}
// 					{/* <!-- Widgets Footer --> */}
// 					<footer className="footer_wrap bg_tint_light footer_style_light widget_area">
// 						<div className="content_wrap">
// 							<div className="columns_wrap">
// 								{/* <!-- Calendar widget --> */}
// 								<aside className="column-1_3 widget widget_calendar">
// 									<h5 className="widget_title">Calendar</h5>
// 									<table>
// 										<thead>
// 											<tr>
// 												<th className="month_prev">
// 													<a href="#" data-type="post,courses,tribe_events" data-year="2015" data-month="01" title="View posts for January 2015"></a>
// 												</th>
// 												<th className="month_cur" colspan="5">September <span>2015</span></th>
// 												<th className="month_next">
// 													<a href="#" data-month="10" data-year="2015" data-type="post,courses,tribe_events" title="View posts for October 2015"></a>
// 												</th>
// 											</tr>
// 											<tr>
// 												<th className="weekday" scope="col" title="Monday">Mon</th>
// 												<th className="weekday" scope="col" title="Tuesday">Tue</th>
// 												<th className="weekday" scope="col" title="Wednesday">Wed</th>
// 												<th className="weekday" scope="col" title="Thursday">Thu</th>
// 												<th className="weekday" scope="col" title="Friday">Fri</th>
// 												<th className="weekday" scope="col" title="Saturday">Sat</th>
// 												<th className="weekday" scope="col" title="Sunday">Sun</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											<tr>
// 												<td colspan="1" className="pad"><span className="day_wrap">&nbsp;</span></td>
// 												<td className="day"><span className="day_wrap">1</span></td>
// 												<td className="day"><span className="day_wrap">2</span></td>
// 												<td className="day"><span className="day_wrap">3</span></td>
// 												<td className="day"><span className="day_wrap">4</span></td>
// 												<td className="day"><span className="day_wrap">5</span></td>
// 												<td className="day"><span className="day_wrap">6</span></td>
// 											</tr>
// 											<tr>
// 												<td className="day"><span className="day_wrap">7</span></td>
// 												<td className="day"><span className="day_wrap">8</span></td>
// 												<td className="day"><span className="day_wrap">9</span></td>
// 												<td className="day"><a className="day_wrap" title="Post" href="#">10</a></td>
// 												<td className="day"><span className="day_wrap">11</span></td>
// 												<td className="day"><span className="day_wrap">12</span></td>
// 												<td className="day"><span className="day_wrap">13</span></td>
// 											</tr>
// 											<tr>
// 												<td className="day"><span className="day_wrap">14</span></td>
// 												<td className="day"><span className="day_wrap">15</span></td>
// 												<td className="day"><span className="day_wrap">16</span></td>
// 												<td className="day"><span className="day_wrap">17</span></td>
// 												<td className="day"><a className="day_wrap" title="Post" href="#">18</a></td>
// 												<td className="day"><span className="day_wrap">19</span></td>
// 												<td className="day"><span className="day_wrap">20</span></td>
// 											</tr>
// 											<tr>
// 												<td className="today"><span className="day_wrap">21</span></td>
// 												<td className="day"><span className="day_wrap">22</span></td>
// 												<td className="day"><span className="day_wrap">23</span></td>
// 												<td className="day"><span className="day_wrap">24</span></td>
// 												<td className="day"><span className="day_wrap">25</span></td>
// 												<td className="day"><span className="day_wrap">26</span></td>
// 												<td className="day"><span className="day_wrap">27</span></td>
// 											</tr>
// 											<tr>
// 												<td className="day"><span className="day_wrap">28</span></td>
// 												<td className="day"><span className="day_wrap">29</span></td>
// 												<td className="day"><span className="day_wrap">30</span></td>
// 												<td className="pad" colspan="4"><span className="day_wrap">&nbsp;</span></td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</aside>
// 								{/* <!-- /Calendar widget --> */}
// 								{/* <!-- Recent posts widget --> */}
// 								<aside className="column-1_3 widget">
// 									<h5 className="widget_title">Recent Posts</h5>
// 									<article className="post_item first">
// 										<div className="post_thumb">
// 											<img alt="" src="http://placehold.it/75x75"></img>
// 										</div>
// 										<div className="post_content">
// 											<h6 className="post_title">
// 												<a href="post-with-sidebar.html">Medical Chemistry: The Molecular Basis</a>
// 											</h6>
// 											<div className="post_info">
// 												<span className="post_info_item post_info_posted">
// 													<a href="#" className="post_info_date">January 14, 2015</a>
// 												</span>
// 												<span className="post_info_item post_info_posted_by">by
// 													<a href="#" className="post_info_author">John Doe</a>
// 												</span>
// 												<span className="post_info_item post_info_counters">
// 													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>157</span></a>
// 												</span>
// 											</div>
// 										</div>
// 									</article>
// 									<article className="post_item">
// 										<div className="post_thumb">
// 											<img alt="" src="http://placehold.it/75x75"></img>
// 										</div>
// 										<div className="post_content">
// 											<h6 className="post_title">
// 												<a href="post-without-sidebar.html">Introduction to Computer  Science</a>
// 											</h6>
// 											<div className="post_info">
// 												<span className="post_info_item post_info_posted">
// 													<a href="#" className="post_info_date">January 14, 2015</a>
// 												</span>
// 												<span className="post_info_item post_info_posted_by">by
// 													<a href="#" className="post_info_author">John Doe</a>
// 												</span>
// 												<span className="post_info_item post_info_counters">
// 													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>103</span>
// 													</a>
// 												</span>
// 											</div>
// 										</div>
// 									</article>
// 									<article className="post_item ">
// 										<div className="post_thumb">
// 											<img alt="" src="http://placehold.it/75x75"></img>
// 										</div>
// 										<div className="post_content">
// 											<h6 className="post_title">
// 												<a href="post-without-sidebar.html">Introduction to Biomedical Imaging</a>
// 											</h6>
// 											<div className="post_info">
// 												<span className="post_info_item post_info_posted">
// 													<a href="#" className="post_info_date">January 13, 2015</a>
// 												</span>
// 												<span className="post_info_item post_info_posted_by">by
// 													<a href="#" className="post_info_author">John Doe</a>
// 												</span>
// 												<span className="post_info_item post_info_counters">
// 													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>80</span></a>
// 												</span>
// 											</div>
// 										</div>
// 									</article>
// 									<article className="post_item">
// 										<div className="post_thumb">
// 											<img alt="" src="http://placehold.it/75x75"></img></div>
// 										<div className="post_content">
// 											<h6 className="post_title">
// 												<a href="post-without-sidebar.html">Evaluating Social  Programs</a>
// 											</h6>
// 											<div className="post_info">
// 												<span className="post_info_item post_info_posted">
// 													<a href="#" className="post_info_date">January 13, 2015</a>
// 												</span>
// 												<span className="post_info_item post_info_posted_by">by
// 													<a href="#" className="post_info_author">John Doe</a>
// 												</span>
// 												<span className="post_info_item post_info_counters">
// 													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>77</span></a>
// 												</span>
// 											</div>
// 										</div>
// 									</article>
// 								</aside>
// 								{/* <!-- /Recent posts widget --> */}
// 								{/* <!-- Recent comments widget --> */}
// 								<aside className="column-1_3 widget widget_recent_comments">
// 									<h5 className="widget_title">Latest comments</h5>
// 									<ul>
// 										<li>
// 											<span>TRX_admin</span> on
// 											<a href="product-page.html">Star Print Backpack</a>
// 										</li>
// 										<li>
// 											<span>TRX_admin</span> on
// 											<a href="product-page.html">Yellow Backpack</a>
// 										</li>
// 										<li>
// 											<span>Sebastian Jones</span> on
// 											<a href="product-page.html">Principles of Written English, Part 2</a>
// 										</li>
// 										<li>
// 											<span>TRX_admin</span> on
// 											<a href="product-page.html">Principles of Written English, Part 2</a>
// 										</li>
// 										<li>
// 											<span>TRX_admin</span> on
// 											<a href="product-page.html">Video Training for Microsoft products and technologies</a>
// 										</li>
// 									</ul>
// 								</aside>
// 								{/* <!-- /Recent comments widget --> */}
// 							</div>
// 						</div>
// 					</footer>
// 					{/* <!-- /Widgets Footer -->			 */}
// 					{/* <!-- Contacts Footer  --> */}
// 					<footer className="contacts_wrap bg_tint_dark contacts_style_dark">
// 						<div className="content_wrap">
// 							<div className="logo">
// 								<a href="index.html">
// 									<img src="http://placehold.it/259x30" alt=""></img>
// 								</a>
// 							</div>
// 							<div className="contacts_address">
// 								<address className="address_right">
// 									Phone: 1.800.123.4567<br></br>
// 									Fax: 1.800.123.4566
// 								</address>
// 								<address className="address_left">
// 									San Francisco, CA 94102, US<br></br>
// 									1234 Some St
// 								</address>
// 							</div>
// 							<div className="sc_socials sc_socials_size_big">
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_facebook">
// 										<span className="sc_socials_hover social_facebook"></span>
// 									</a>
// 								</div>
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_pinterest">
// 										<span className="sc_socials_hover social_pinterest"></span>
// 									</a>
// 								</div>
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_twitter">
// 										<span className="sc_socials_hover social_twitter"></span>
// 									</a>
// 								</div>
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_gplus">
// 										<span className="sc_socials_hover social_gplus"></span>
// 									</a>
// 								</div>
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_rss">
// 										<span className="sc_socials_hover social_rss"></span>
// 									</a>
// 								</div>
// 								<div className="sc_socials_item">
// 									<a href="#" target="_blank" className="social_icons social_dribbble">
// 										<span className="sc_socials_hover social_dribbble"></span>
// 									</a>
// 								</div>
// 							</div>
// 						</div>
// 					</footer>
// 					{/* <!-- /Contacts Footer --> */}
// 					{/* <!-- Copyright --> */}
// 					<div className="copyright_wrap">
// 						<div className="content_wrap">
// 							<p>© 2015 All Rights Reserved. <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></p>
// 						</div>
// 					</div>
// 					{/* <!-- /Copyright --> */}
// 				</div>
// 			</div>
// 			{/* <!-- /Body --> */}
// 			<a href="#" className="scroll_to_top icon-up-2" title="Scroll to top"></a>

// 			<div className="custom_html_section"></div>



// 		</body>

// 	)
// }

// export default Products



import Nav from '../shared/NavBar';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProducts, rate } from '../../services/shopService';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from "../../redux/cartSlice"
import { FaStar } from "react-icons/fa"
import Star from "./Star"
import Joyride from 'react-joyride';
import { Steps } from './steps';
// import 'react-joyride/lib/react-joyride-compiled.css';

function Products() {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const cart = useSelector(state => state.cart)
	// const[product,setProduct]=useState({});
	const [rating, setRating] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [isadded, setIsadded] = useState(false);
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('user'));
	
	
  
	function handleClick(productId) {
	  dispatch({ type: 'SELECT_PRODUCT', payload: { productId: productId }});
	  navigate(`/productPage/${productId}`);
	}
	const handleAddProduct = () => {
		navigate('/addProduct');
	};
	useEffect(() => {

		const getProducts = async () => {
			axios.get('http://localhost:3001/product/getAll')
				.then(response => {
					setProducts(response.data);

				})
				.catch(error => {
					console.error(error);
				});
		};
		getProducts();
		

	}, []);
	
	const [productList,setProductList]=useState(products);
	console.log(productList);
	///filtering////////////////////////////////////////////////////////////////////////
// 	document.addEventListener('DOMContentLoaded', () => {
		
// 		const filterSelect = document.getElementById('filter');
// 		// const productsList = products;
// 		// document.getElementById('products');
// 		filterSelect.addEventListener('change', () => {
// 			const filterValue = filterSelect.value;
// 			let sortedProducts;

// 			if (filterValue === 'name-asc') {
// 				sortedProducts = sortProductsByName(products, 'asc');
// 			} else if (filterValue === 'name-desc') {
// 				sortedProducts = sortProductsByName(products, 'desc');
// 			} else if (filterValue === 'rating-desc') {
// 				sortedProducts = sortProductsByRating(products, 'desc');
// 			}
// 			setProductList(sortedProducts);
// 			renderProducts(sortedProducts);
// 		});

// 		function sortProductsByName(products, sortOrder) {
// 			const sortedProducts = products.sort((a, b) => {
// 				const nameA = a.prodName.toUpperCase();
// 				const nameB = b.prodName.toUpperCase();

// 				if (sortOrder === 'asc') {
// 					if (nameA < nameB) {
// 						return -1;
// 					} else if (nameA > nameB) {
// 						return 1;
// 					} else {
// 						return 0;
// 					}
// 				} else if (sortOrder === 'desc') {
// 					if (nameA > nameB) {
// 						return -1;
// 					} else if (nameA < nameB) {
// 						return 1;
// 					} else {
// 						return 0;
// 					}
// 				}
// 			});

// 			return sortedProducts;
// 		}

// 		function sortProductsByRating(products, sortOrder) {
// 			// Sort products by rating in ascending or descending order
// 		}

// 		function renderProducts(products) {
// 			// Render the sorted products to the DOM
// 		}

// 	});
// const mylist= productList.map((product)=>{
// 	const handleAddToCart = () => {

// 		dispatch(addProduct({ product, quantity, prodPrice: product.prodPrice }));
// 		setIsadded(true);
// 	}
// 	const handleProductPage = () => {
// 		const id = product._id;
// 		navigate(`/productPage/${id}`);
// 	}					 
// 	return <li className="first product has-post-thumbnail" style={{ minHeight: "361px" }}>
// 		<a href="product-page.html"></a>
// 		<div className="post_item_wrap">
// 			<div className="post_featured">
// 				<div className="post_thumb">
// 					<a className="hover_icon hover_icon_link" onClick={handleProductPage} >
// 						{/* <img src={`http://localhost:3001/${product.prodImg.imgUrl}`} alt="" style={{ minHeight: "150px", maxHeight: "150px" }} /> */}
// 					</a>
// 				</div>
// 			</div>
// 			<div className="post_content">
// 				<h3><a href="product-page.html"></a>{product.prodName}</h3>
// 				<h3><a href="product-page.html"></a>{product.prodDesc}</h3>
// 				<span className="price">
// 					<span className="amount">&pound;{product.prodPrice}</span>
// 				</span>
// 				{/* rating */}
// 				<div id='rating'>
// 					<Star id={product._id} rate={product.prodRate} rateNbr={product.prodRateNbr} />
// 				</div>
// 				<button href="#" className="button add_to_cart_button my-element " id='add-to-cart' onClick={handleAddToCart} disabled={cart.products.some(p => p.prodName === product.prodName) || product.ownerId === user._id}>Add to cart</button>
// 				{/* <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} /> */}
// 			</div>
// 		</div>
// 	</li> 
// 	} );
// 	console.log(productList);
	///filtering//////////////////////////////////////////////////////////////////

	// console.log(products)


	const myList = products.map((product) => {



		const handleAddToCart = () => {

			dispatch(addProduct({ product, quantity, prodPrice: product.prodPrice }));
			setIsadded(true);
		}
		// const handleProductPage = () => {
		// 	const id = product._id;
		// 	navigate(`/productPage/${id}`);
			
		// }

	return <li className="first product has-post-thumbnail" style={{ minHeight: "361px" }}>
			<a href="product-page.html"></a>
			<div className="post_item_wrap">
				<div className="post_featured">
					<div className="post_thumb">
						<a className="hover_icon hover_icon_link"  >
							{/* <Link to={`/productPage/${product._id}`}> */}
							<img src={`http://localhost:3001/${product.prodImg.imgUrl}`} alt="" style={{ minHeight: "150px", maxHeight: "150px" }} />
							{/* </Link> */}
						</a>
					</div>
				</div>
				<div className="post_content">
				<li key={product._id} onClick={() => handleClick(product._id)}>
            <Link to={`/productPage/${product._id}`}>{product.prodName}</Link>
          </li>
				{/* <div key={product._id}>
          <button onClick={() => handleClick(product)}>{product.prodName}</button>
        </div> */}
					<h3><a href="product-page.html"></a>{product.prodName}</h3>
					<h3><a href="product-page.html"></a>{product.prodDesc}</h3>
					<span className="price">
						<span className="amount">&pound;{product.prodPrice}</span>
					</span>
					{/* rating */}
					<div id='rating'>
						<Star id={product._id} rate={product.prodRate} rateNbr={product.prodRateNbr} />
					</div>
					<button href="#" className="button add_to_cart_button my-element " id='add-to-cart' onClick={handleAddToCart} disabled={cart.products.some(p => p.prodName === product.prodName) || product.ownerId === user._id}>Add to cart</button>
					{/* <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} /> */}
				</div>
			</div>
		</li>


	});
	// const ProductFilter = ({ products }) => {
	// 	const [filter, setFilter] = useState("");

	// 	const filteredProducts = products.filter((product) =>
	// 	  product.prodName.toLowerCase().includes(filter.toLowerCase())
	// 	);
	// 	const handleAddToCart = () => {

	// 		dispatch(addProduct({ product, quantity, prodPrice: product.prodPrice }));
	// 		setIsadded(true);
	// 	}
	// 	const handleProductPage=()=>{
	// 		const id =product._id;
	// 		navigate(`/productPage/${id}`);
	// 	}

	// 	return (
	// 	  <div>
	// 		<input
	// 		  type="text"
	// 		  placeholder="Filter products"
	// 		  value={filter}
	// 		  onChange={(e) => setFilter(e.target.value)}
	// 		/>

	// 		  {filteredProducts.map((product) => (
	// 			<li className="first product has-post-thumbnail" style={{minHeight:"361px"}}>
	// 			<a href="product-page.html"></a>
	// 			<div className="post_item_wrap">
	// 				<div className="post_featured">
	// 					<div className="post_thumb">
	// 						<a className="hover_icon hover_icon_link" onClick={handleProductPage} >
	// 							<img src={`http://localhost:3001/${product.prodImg.imgUrl}`} alt="" style={{minHeight:"150px", maxHeight:"150px"}}  />
	// 						</a>
	// 					</div>
	// 				</div>
	// 				<div className="post_content">
	// 					<h3><a href="product-page.html"></a>{product.prodName}</h3>
	// 					<h3><a href="product-page.html"></a>{product.prodDesc}</h3>
	// 					<span className="price">
	// 						<span className="amount">&pound;{product.prodPrice}</span>
	// 					</span>
	// 					{/* rating */}
	// 					<div id='rating'>
	// 					<Star id={product._id} rate={product.prodRate} rateNbr={product.prodRateNbr} />
	// 					</div>
	// 					<button href="#" className="button add_to_cart_button my-element " id='add-to-cart' onClick={handleAddToCart}  disabled={cart.products.some(p => p.prodName === product.prodName)||product.ownerId===user._id}>Add to cart</button>
	// 					{/* <Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} /> */}
	// 				</div>
	// 			</div>
	// 		</li>

	// 		  ))}


	// 	  </div>
	// 	);
	//   };


	return (

		<body className="archive body_style_wide body_filled article_style_boxed layout_single-standard top_panel_style_dark top_panel_opacity_transparent  top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page">
			{/* archive body_style_wide body_filled article_style_boxed top_panel_style_light top_panel_opacity_solid top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page */}

			<a id="toc_top" className="sc_anchor" title="To Top" data-description="&lt;i&gt;Back to top&lt;/i&gt; - &lt;br&gt;scroll to top of the page" data-icon="icon-angle-double-up" data-url="" data-separator="yes"></a>
			{/* <!-- Body --> */}
			<div className="body_wrap">
				<div className="page_wrap">
					<Nav />

					{/* <!-- Page title --> */}

					{/* <!-- /Page title --> */}
					{/* <!-- Content with sidebar --> */}
					<div className="page_content_wrap">
						<div className="content_wrap" style={{ marginTop: "200px" }}>
							{/* <!-- Content --> */}
							<div className="content">
								<div className="list_products shop_mode_thumbs">

									<button className='sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small alignleft sc_buttons_st1' id='add-new-product' onClick={handleAddProduct}> Add new Product</button>
									<Joyride continuou hideCloseButton scrollToFirstStep showProgress showSkipButton steps={Steps} />
									{/* <form className="woocommerce-ordering" method="get">
										<select name="orderby" className="orderby">
											<option value="menu_order" selected="selected" >Default sorting</option>
											<option value="popularity">Sort by popularity</option>
											<option value="rating" >Sort by average rating</option>
											<option value="date">Sort by newness</option>
											<option value="price">Sort by price: low to high</option>
											<option value="price-desc">Sort by price: high to low</option>
										</select>

									</form> */}

									<ul className="products d-flex row align-items-around">
										{/* <label for="filter">Filter by:</label>
										<select id="filter">
											<option value="name-asc">Name (A to Z)</option>
											<option value="name-desc">Name (Z to A)</option>
											<option value="rating-desc">Rating (best to worst)</option>
										</select> */}
										{/* productList.map((product)=>(
										 
										<li className="first product has-post-thumbnail" style={{ minHeight: "361px" }}>
											<a href="product-page.html"></a>
											<div className="post_item_wrap">
												<div className="post_featured">
													<div className="post_thumb">
														<a className="hover_icon hover_icon_link" onClick={handleProductPage} >
															<img src={`http://localhost:3001/${product.prodImg.imgUrl}`} alt="" style={{ minHeight: "150px", maxHeight: "150px" }} />
														</a>
													</div>
												</div>
												<div className="post_content">
													<h3><a href="product-page.html"></a>{product.prodName}</h3>
													<h3><a href="product-page.html"></a>{product.prodDesc}</h3>
													<span className="price">
														<span className="amount">&pound;{product.prodPrice}</span>
													</span>
													
													<div id='rating'>
														<Star id={product._id} rate={product.prodRate} rateNbr={product.prodRateNbr} />
													</div>
													<button href="#" className="button add_to_cart_button my-element " id='add-to-cart' onClick={handleAddToCart} disabled={cart.products.some(p => p.prodName === product.prodName) || product.ownerId === user._id}>Add to cart</button>
													
												</div>
											</div>
										</li>)) */}
										{myList}
										{/* {filteredProducts} */}

										{/* <ProductFilter product={products}/> */}
										{/* {ProductFilter} */}
										{/* <Joyride steps={tourSteps} /> */}
										{/* <li className="first product has-post-thumbnail">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src={`http://localhost:3001/${products.slice(0,1).map((product)=>product.prodImg.imgUrl)}`} alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html"></a>{products.slice(0,1).map((product)=>product.prodName)}</h3>
											<span className="price">
												<span className="amount">&pound;25.69</span>
											</span>
											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product has-post-thumbnail ">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src={`http://localhost:3001/${products.slice(1,2).map((product)=>product.prodImg.imgUrl)}`} alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html"></a>{products.slice(1,2).map((product)=>product.prodName)}</h3>
											<span className="price">
												<span className="amount">&pound;25.69</span>
											</span>
											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
										</div>
                                    </div>
                                </li> */}
										{/* <li className="first product has-post-thumbnail">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">200 jazz licks</a></h3>
											<span className="price">
												<span className="amount">&pound;25.69</span>
											</span>
											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="last product has-post-thumbnail ">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">200 jazz licks</a></h3>
											<span className="price">
												<span className="amount">&pound;25.69</span>
											</span>
											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product has-post-thumbnail">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">200 jazz licks</a></h3>
											<span className="price">
												<span className="amount">&pound;25.69</span>
											</span>
											<a href="#" className="button add_to_cart_button ">Add to cart</a> 
										</div>
                                    </div>
                                </li> */}
										{/* <li className="last product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> </a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Adobe Photoshop Lightroom 5</a></h3>
											<span className="price">
												<span className="amount">&pound;374.19</span>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product has-post-thumbnail column-1_2 sale">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<span className="onsale">Sale!</span>
													<img src="http://placehold.it/400x400" alt="" /> </a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Entrepreneurship 101: Who is your customer?</a></h3>
											<span className="price">
												<del><span className="amount">&pound;195.00</span></del> 
												<ins><span className="amount">&pound;180.00</span></ins>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
									</div>
                                </li>
                                <li className="last product type-product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Geology Fact Book</a></h3>
											<span className="price">
												<span className="amount">&pound;56.69</span>
											</span>				
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
									</div>
                                </li>
                                <li className="first product has-post-thumbnail column-1_2 sale">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<span className="onsale">Sale!</span>
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Introduction to Biomedical Imaging</a></h3>
											<span className="price">
												<del><span className="amount">&pound;400.00</span></del> 
												<ins><span className="amount">&pound;350.00</span></ins>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
									</div>
                                </li>
                                <li className="last product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Introduction to Computer Science</a></h3>
											<span className="price">
												<span className="amount">&pound;120.00</span>
											</span>
											<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Leather Cap</a></h3>
											<span className="price">
												<span className="amount">&pound;20.00</span>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="last product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Long Sleeve Top With  Raglan Sleeve</a></h3>
											<span className="price">
												<span className="amount">&pound;33.25</span>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Medical Chemistry: The Molecular Basis…</a></h3>
											<span className="price">
												<span className="amount">&pound;185.00</span>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="last product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Principles of Written English, Part 1</a></h3>
											<span className="price">
												<span className="amount">&pound;85.00</span>
											</span>                                
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="first product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Principles of Written English, Part 2</a></h3>
											<div className="star-rating" title="Rated 5.00 out of 5">
												<span className="width_100per"><strong className="rating">5.00</strong> out of 5</span>
											</div>
											<span className="price">
												<span className="amount">&pound;85.00</span>
											</span>
											<a href="#" className="button add_to_cart_button">Add to cart</a> 
										</div>
                                    </div>
                                </li>
                                <li className="last product has-post-thumbnail column-1_2">
                                    <a href="product-page.html"></a>
									<div className="post_item_wrap">
										<div className="post_featured">
											<div className="post_thumb">
												<a className="hover_icon hover_icon_link" href="product-page.html">
													<img src="http://placehold.it/400x400" alt="" /> 
												</a>
											</div>
										</div>
										<div className="post_content">
											<h3><a href="product-page.html">Star Print Backpack</a></h3>
											<div className="star-rating" title="Rated 5.00 out of 5">
												<span className="width_100per"><strong className="rating">5.00</strong> out of 5</span>
											</div>
											<span className="price">
												<span className="amount">&pound;41.39</span>
											</span>                                   
											<a href="#" className="button add_to_cart_button product_type_simple">Add to cart</a> 
										</div>
                                    </div>
                                </li> */}
									</ul>
									<nav id="pagination" className="pagination_wrap pagination_pages">
										<span className="pager_current active ">1</span>
										<a href="#" className="">2</a>
										<a href="#" className="pager_next "></a>
										<a href="#" className="pager_last "></a>
									</nav>
								</div>
							</div>
							{/* <!-- /Content --> */}
							{/* <!-- Sidebar --> */}
							<div className="sidebar widget_area bg_tint_light sidebar_style_light">
								{/* <!-- Product category widget --> */}
								<aside className="woocommerce">
									<h5 className="widget_title">Product Categories</h5>
									<ul className="product-categories">
										<li><a href="product-category.html">Computer</a>
											<span className="count">(1)</span>
										</li>
										<li>
											<a href="product-category.html">Courses</a>
											<span className="count">(0)</span>
										</li>
										<li>
											<a href="product-category.html">Language</a>
											<span className="count">(2)</span>
										</li>
										<li>
											<a href="product-category.html">Marketing</a>
											<span className="count">(2)</span>
										</li>
										<li>
											<a href="product-category.html">Medicine</a>
											<span className="count">(2)</span>
										</li>
										<li>
											<a href="product-category.html">Products</a>
											<span className="count">(8)</span>
										</li>
									</ul>
								</aside>
								{/* <!-- /Product category widget --> */}
								{/* <!-- Recent products widget --> */}
								<aside className="woocommerce">
									<h5 className="widget_title">Recent Products</h5>
									<ul className="product_list_widget">
										<li>
											<a href="product-page.html" title="">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Leather Cap</span>
											</a>
											<span className="amount">&pound;20.00</span></li>
										<li>
											<a href="product-page.html" title="">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Star Print Backpack</span>
											</a>
											<span className="amount">&pound;41.39</span>
										</li>
										<li>
											<a href="product-page.html" title="Long Sleeve Top With  Raglan Sleeve">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Long Sleeve Top With  Raglan Sleeve</span>
											</a>
											<span className="amount">&pound;33.25</span>
										</li>
										<li>
											<a href="#" title="Yellow Backpack">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Yellow Backpack</span>
											</a>
											<span className="amount">&pound;74.19</span>
										</li>
									</ul>
								</aside>
								{/* <!-- /Recent products widget --> */}
								{/* <!-- Product tags widget --> */}
								<aside className="woocommerce widget_product_tag_cloud">
									<h5 className="widget_title">Product Tags</h5>
									<div className="tagcloud">
										<a href="product-tag.html" title="2 topics">backpacks</a>
										<a href="product-tag.html" title="3 topics">books</a>
										<a href="product-tag.html" title="1 topic">caps</a>
										<a href="product-tag.html" title="1 topic">clothes</a>
										<a href="product-tag.html" title="1 topic">computer</a>
										<a href="product-tag.html" title="6 topics">courses</a>
										<a href="product-tag.html" title="1 topic">design</a>
										<a href="product-tag.html" title="1 topic">geology</a>
										<a href="product-tag.html" title="2 topics">language</a>
										<a href="product-tag.html" title="1 topic">maps</a>
										<a href="product-tag.html" title="2 topics">marketing</a>
										<a href="product-tag.html" title="2 topics">medicine</a>
										<a href="product-tag.html" title="1 topic">music</a>
										<a href="product-tag.html" title="2 topics">seo</a>
										<a href="product-tag.html" title="1 topic">soft</a></div>
								</aside>
								{/* <!-- /Product tags widget --> */}
								{/* <!-- Top rated products widget --> */}
								<aside className="woocommerce">
									<h5 className="widget_title">Top Rated Products</h5>
									<ul className="product_list_widget">
										<li>
											<a href="product-page.html" title="Star Print Backpack">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Star Print Backpack</span>
											</a>
											<div className="star-rating" title="Rated 5.00 out of 5">
												<span className="width_100per">
													<strong className="rating">5.00</strong> out of 5
												</span>
											</div>
											<span className="amount">&pound;41.39</span>
										</li>
										<li>
											<a href="product-page.html" title="Principles of Written English, Part 2">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Principles of Written English, Part 2</span>
											</a>
											<div className="star-rating" title="Rated 5.00 out of 5">
												<span className="width_100per">
													<strong className="rating">5.00</strong> out of 5
												</span>
											</div>
											<span className="amount">&pound;85.00</span>
										</li>
										<li>
											<a href="product-page.html" title="Video Training for Microsoft products and technologies">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Video Training for Microsoft products and technologies</span>
											</a>
											<div className="star-rating" title="Rated 5.00 out of 5">
												<span className="width_100per">
													<strong className="rating">5.00</strong> out of 5
												</span>
											</div>
											<span className="amount">&pound;150.00</span>
										</li>
										<li>
											<a href="product-page.html" title="Yellow Backpack">
												<img src="http://placehold.it/75x75" alt="" />
												<span className="product-title">Yellow Backpack</span>
											</a>
											<div className="star-rating" title="Rated 4.00 out of 5">
												<span className="width_80per">
													<strong className="rating">4.00</strong> out of 5
												</span>
											</div>
											<span className="amount">&pound;74.19</span></li>
									</ul>
								</aside>
								{/* <!-- /Top rated products widget --> */}
							</div>
							{/* <!-- /Sidebar --> */}
						</div>
					</div>
					{/* <!-- /Content -->		 */}
					{/* <!-- Widgets Footer --> */}
					<footer className="footer_wrap bg_tint_light footer_style_light widget_area">
						<div className="content_wrap">
							<div className="columns_wrap">
								{/* <!-- Calendar widget --> */}
								<aside className="column-1_3 widget widget_calendar">
									<h5 className="widget_title">Calendar</h5>
									<table>
										<thead>
											<tr>
												<th className="month_prev">
													<a href="#" data-type="post,courses,tribe_events" data-year="2015" data-month="01" title="View posts for January 2015"></a>
												</th>
												<th className="month_cur" colspan="5">September <span>2015</span></th>
												<th className="month_next">
													<a href="#" data-month="10" data-year="2015" data-type="post,courses,tribe_events" title="View posts for October 2015"></a>
												</th>
											</tr>
											<tr>
												<th className="weekday" scope="col" title="Monday">Mon</th>
												<th className="weekday" scope="col" title="Tuesday">Tue</th>
												<th className="weekday" scope="col" title="Wednesday">Wed</th>
												<th className="weekday" scope="col" title="Thursday">Thu</th>
												<th className="weekday" scope="col" title="Friday">Fri</th>
												<th className="weekday" scope="col" title="Saturday">Sat</th>
												<th className="weekday" scope="col" title="Sunday">Sun</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colspan="1" className="pad"><span className="day_wrap">&nbsp;</span></td>
												<td className="day"><span className="day_wrap">1</span></td>
												<td className="day"><span className="day_wrap">2</span></td>
												<td className="day"><span className="day_wrap">3</span></td>
												<td className="day"><span className="day_wrap">4</span></td>
												<td className="day"><span className="day_wrap">5</span></td>
												<td className="day"><span className="day_wrap">6</span></td>
											</tr>
											<tr>
												<td className="day"><span className="day_wrap">7</span></td>
												<td className="day"><span className="day_wrap">8</span></td>
												<td className="day"><span className="day_wrap">9</span></td>
												<td className="day"><a className="day_wrap" title="Post" href="#">10</a></td>
												<td className="day"><span className="day_wrap">11</span></td>
												<td className="day"><span className="day_wrap">12</span></td>
												<td className="day"><span className="day_wrap">13</span></td>
											</tr>
											<tr>
												<td className="day"><span className="day_wrap">14</span></td>
												<td className="day"><span className="day_wrap">15</span></td>
												<td className="day"><span className="day_wrap">16</span></td>
												<td className="day"><span className="day_wrap">17</span></td>
												<td className="day"><a className="day_wrap" title="Post" href="#">18</a></td>
												<td className="day"><span className="day_wrap">19</span></td>
												<td className="day"><span className="day_wrap">20</span></td>
											</tr>
											<tr>
												<td className="today"><span className="day_wrap">21</span></td>
												<td className="day"><span className="day_wrap">22</span></td>
												<td className="day"><span className="day_wrap">23</span></td>
												<td className="day"><span className="day_wrap">24</span></td>
												<td className="day"><span className="day_wrap">25</span></td>
												<td className="day"><span className="day_wrap">26</span></td>
												<td className="day"><span className="day_wrap">27</span></td>
											</tr>
											<tr>
												<td className="day"><span className="day_wrap">28</span></td>
												<td className="day"><span className="day_wrap">29</span></td>
												<td className="day"><span className="day_wrap">30</span></td>
												<td className="pad" colspan="4"><span className="day_wrap">&nbsp;</span></td>
											</tr>
										</tbody>
									</table>
								</aside>
								{/* <!-- /Calendar widget --> */}
								{/* <!-- Recent posts widget --> */}
								<aside className="column-1_3 widget">
									<h5 className="widget_title">Recent Posts</h5>
									<article className="post_item first">
										<div className="post_thumb">
											<img alt="" src="http://placehold.it/75x75"></img>
										</div>
										<div className="post_content">
											<h6 className="post_title">
												<a href="post-with-sidebar.html">Medical Chemistry: The Molecular Basis</a>
											</h6>
											<div className="post_info">
												<span className="post_info_item post_info_posted">
													<a href="#" className="post_info_date">January 14, 2015</a>
												</span>
												<span className="post_info_item post_info_posted_by">by
													<a href="#" className="post_info_author">John Doe</a>
												</span>
												<span className="post_info_item post_info_counters">
													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>157</span></a>
												</span>
											</div>
										</div>
									</article>
									<article className="post_item">
										<div className="post_thumb">
											<img alt="" src="http://placehold.it/75x75"></img>
										</div>
										<div className="post_content">
											<h6 className="post_title">
												<a href="post-without-sidebar.html">Introduction to Computer  Science</a>
											</h6>
											<div className="post_info">
												<span className="post_info_item post_info_posted">
													<a href="#" className="post_info_date">January 14, 2015</a>
												</span>
												<span className="post_info_item post_info_posted_by">by
													<a href="#" className="post_info_author">John Doe</a>
												</span>
												<span className="post_info_item post_info_counters">
													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>103</span>
													</a>
												</span>
											</div>
										</div>
									</article>
									<article className="post_item ">
										<div className="post_thumb">
											<img alt="" src="http://placehold.it/75x75"></img>
										</div>
										<div className="post_content">
											<h6 className="post_title">
												<a href="post-without-sidebar.html">Introduction to Biomedical Imaging</a>
											</h6>
											<div className="post_info">
												<span className="post_info_item post_info_posted">
													<a href="#" className="post_info_date">January 13, 2015</a>
												</span>
												<span className="post_info_item post_info_posted_by">by
													<a href="#" className="post_info_author">John Doe</a>
												</span>
												<span className="post_info_item post_info_counters">
													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>80</span></a>
												</span>
											</div>
										</div>
									</article>
									<article className="post_item">
										<div className="post_thumb">
											<img alt="" src="http://placehold.it/75x75"></img></div>
										<div className="post_content">
											<h6 className="post_title">
												<a href="post-without-sidebar.html">Evaluating Social  Programs</a>
											</h6>
											<div className="post_info">
												<span className="post_info_item post_info_posted">
													<a href="#" className="post_info_date">January 13, 2015</a>
												</span>
												<span className="post_info_item post_info_posted_by">by
													<a href="#" className="post_info_author">John Doe</a>
												</span>
												<span className="post_info_item post_info_counters">
													<a href="#" className="post_counters_item post_counters_views icon-eye"><span>77</span></a>
												</span>
											</div>
										</div>
									</article>
								</aside>
								{/* <!-- /Recent posts widget --> */}
								{/* <!-- Recent comments widget --> */}
								<aside className="column-1_3 widget widget_recent_comments">
									<h5 className="widget_title">Latest comments</h5>
									<ul>
										<li>
											<span>TRX_admin</span> on
											<a href="product-page.html">Star Print Backpack</a>
										</li>
										<li>
											<span>TRX_admin</span> on
											<a href="product-page.html">Yellow Backpack</a>
										</li>
										<li>
											<span>Sebastian Jones</span> on
											<a href="product-page.html">Principles of Written English, Part 2</a>
										</li>
										<li>
											<span>TRX_admin</span> on
											<a href="product-page.html">Principles of Written English, Part 2</a>
										</li>
										<li>
											<span>TRX_admin</span> on
											<a href="product-page.html">Video Training for Microsoft products and technologies</a>
										</li>
									</ul>
								</aside>
								{/* <!-- /Recent comments widget --> */}
							</div>
						</div>
					</footer>
					{/* <!-- /Widgets Footer -->			 */}
					{/* <!-- Contacts Footer  --> */}
					<footer className="contacts_wrap bg_tint_dark contacts_style_dark">
						<div className="content_wrap">
							<div className="logo">
								<a href="index.html">
									<img src="http://placehold.it/259x30" alt=""></img>
								</a>
							</div>
							<div className="contacts_address">
								<address className="address_right">
									Phone: 1.800.123.4567<br></br>
									Fax: 1.800.123.4566
								</address>
								<address className="address_left">
									San Francisco, CA 94102, US<br></br>
									1234 Some St
								</address>
							</div>
							<div className="sc_socials sc_socials_size_big">
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_facebook">
										<span className="sc_socials_hover social_facebook"></span>
									</a>
								</div>
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_pinterest">
										<span className="sc_socials_hover social_pinterest"></span>
									</a>
								</div>
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_twitter">
										<span className="sc_socials_hover social_twitter"></span>
									</a>
								</div>
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_gplus">
										<span className="sc_socials_hover social_gplus"></span>
									</a>
								</div>
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_rss">
										<span className="sc_socials_hover social_rss"></span>
									</a>
								</div>
								<div className="sc_socials_item">
									<a href="#" target="_blank" className="social_icons social_dribbble">
										<span className="sc_socials_hover social_dribbble"></span>
									</a>
								</div>
							</div>
						</div>
					</footer>
					{/* <!-- /Contacts Footer --> */}
					{/* <!-- Copyright --> */}
					<div className="copyright_wrap">
						<div className="content_wrap">
							<p>© 2015 All Rights Reserved. <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></p>
						</div>
					</div>
					{/* <!-- /Copyright --> */}
				</div>
			</div>
			{/* <!-- /Body --> */}
			<a href="#" className="scroll_to_top icon-up-2" title="Scroll to top"></a>

			<div className="custom_html_section"></div>



		</body>

	)
}

export default Products

