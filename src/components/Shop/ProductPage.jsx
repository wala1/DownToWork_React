
import { useLocation, useParams } from 'react-router-dom';
import Nav from '../shared/NavBar';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Star from './Star';
import { addProduct } from "../../redux/cartSlice"
import { useDispatch } from 'react-redux';

function ProductPage() {
    const dispatch = useDispatch();
    const [product,setProduct]=useState({});
    const [quantity, setQuantity] = useState(0);
    const [owner, setOwner] = useState({});
// const location=useLocation();
// const id = location.pathname.split("/")[2];
const  {id}  = useParams();
console.log("this is the id",id)
useEffect(() => {
    const getProduct = async () => {
      await axios.get(`http://localhost:3001/product/getById/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getProduct();
  }, [id]);
  
  useEffect(() => {
    if (product.ownerId) {
      const getOwner = async () => {
        await axios.get(`http://localhost:3001/users/getById/${product.ownerId}`)
          .then(response => {
            setOwner(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
      getOwner();
    }
  }, [product]);
  

   
   

// console.log(product.prodImg.imgUrl)
const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity, prodPrice: product.prodPrice }));
}

    return (
       
        <body className="archive body_style_wide body_filled article_style_boxed layout_single-standard top_panel_style_dark top_panel_opacity_transparent  top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page">
        {/* archive body_style_wide body_filled article_style_boxed top_panel_style_light top_panel_opacity_solid top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page */}
   
    <a id="toc_top" className="sc_anchor" title="To Top" data-description="&lt;i&gt;Back to top&lt;/i&gt; - &lt;br&gt;scroll to top of the page" data-icon="icon-angle-double-up" data-url="" data-separator="yes"></a>
	{/* <!-- Body --> */}
    <div className="body_wrap">
        <div className="page_wrap">
            <Nav/>
           
			{/* <!-- Page title --> */}
            
			{/* <!-- /Page title --> */}
			{/* <!-- Content with sidebar --> */}
            <div class="page_content_wrap">
                <div class="content_wrap" style={{marginTop:"200px"}}>
					{/* <!-- Content -->					 */}
                    <div class="content">
                        <article class="post_item post_item_single post_item_product">
                            <div class="product has-post-thumbnail">
                                <div class="images inited">
                                
										 <img src={`http://localhost:3001/${product.prodImg}`} alt=""  />  
									
                                   
                                </div>
                                <div class="summary entry-summary">
                                    <h1 class="product_title entry-title">{product.prodName}</h1>
                                   
                                    <div>
                                        <p class="price"><span class="amount">&pound;{product.prodPrice}</span></p>
                                    </div>
                                    <div>
                                        <p>{product.prodDesc}</p>
                                    </div>
                                    <div>
                                       Owner: <p>{owner.email}</p>
                                    </div>

                                    <form class="cart" method="post" enctype="multipart/form-data">
                                        {/* <div class="quantity">
                                            <input type="number" step="1" min="1" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" />
                                        </div> */}
                                        <button type="submit" class="single_add_to_cart_button button alt"  onClick={handleAddToCart}>Add to cart</button>
                                    </form>
                                  
                                </div>
								<div class="clear"></div>
								
                            </div>
                        </article>
                    </div>					
					{/* <!-- /Content -->
                    <!-- Sidebar --> */}
                    <div class="sidebar widget_area bg_tint_light sidebar_style_light">
						{/* <!-- Product category widget --> */}
                        <aside class="woocommerce">
                            <h5 class="widget_title">Product Categories</h5>
                            <ul class="product-categories">
                                <li><a href="product-category.html">Computer</a>
									<span class="count">(1)</span>
								</li>
                                <li>
									<a href="product-category.html">Courses</a> 
									<span class="count">(0)</span>
								</li>
                                <li>
									<a href="product-category.html">Language</a> 
									<span class="count">(2)</span>
								</li>
                                <li>
									<a href="product-category.html">Marketing</a> 
									<span class="count">(2)</span>
								</li>
                                <li>
									<a href="product-category.html">Medicine</a> 
									<span class="count">(2)</span>
								</li>
                                <li>
									<a href="product-category.html">Products</a> 
									<span class="count">(8)</span>
								</li>
                            </ul>
                        </aside>
						{/* <!-- /Product category widget -->
						<!-- Recent products widget --> */}
                        <aside class="woocommerce">
                            <h5 class="widget_title">Recent Products</h5>
                            <ul class="product_list_widget">
                                <li>
                                    <a href="product-page.html" title="">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Leather Cap</span>
                                    </a>
                                    <span class="amount">&pound;20.00</span></li>
                                <li>
                                    <a href="product-page.html" title="">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Star Print Backpack</span>
                                    </a>
                                    <span class="amount">&pound;41.39</span>
								</li>
                                <li>
                                    <a href="product-page.html" title="Long Sleeve Top With  Raglan Sleeve">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Long Sleeve Top With  Raglan Sleeve</span>
                                    </a>
                                    <span class="amount">&pound;33.25</span>
								</li>
                                <li>
                                    <a href="product-page.html" title="Yellow Backpack">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Yellow Backpack</span>
                                    </a>
                                    <span class="amount">&pound;74.19</span>
								</li>
                            </ul>
                        </aside>
						{/* <!-- /Recent products widget --> */}
						{/* <!-- Product tags widget --> */}
                        <aside class="woocommerce widget_product_tag_cloud">
                            <h5 class="widget_title">Product Tags</h5>
                            <div class="tagcloud">
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
                        <aside class="woocommerce">
                            <h5 class="widget_title">Top Rated Products</h5>
                            <ul class="product_list_widget">
                                <li>
                                    <a href="product-sample.html" title="Star Print Backpack">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Star Print Backpack</span>
                                    </a>
                                    <div class="star-rating" title="Rated 5.00 out of 5">
										<span class="width_100per">
											<strong class="rating">5.00</strong> out of 5
										</span>
									</div> 
									<span class="amount">&pound;41.39</span>
								</li>
                                <li>
                                    <a href="product-sample.html" title="Principles of Written English, Part 2">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Principles of Written English, Part 2</span>
                                    </a>
                                    <div class="star-rating" title="Rated 5.00 out of 5">
										<span class="width_100per">
											<strong class="rating">5.00</strong> out of 5
										</span>
									</div> 
									<span class="amount">&pound;85.00</span>
								</li>
                                <li>
                                    <a href="product-sample.html" title="Video Training for Microsoft products and technologies">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Video Training for Microsoft products and technologies</span>
                                    </a>
                                    <div class="star-rating" title="Rated 5.00 out of 5">
										<span class="width_100per">
											<strong class="rating">5.00</strong> out of 5
										</span>
									</div> 
									<span class="amount">&pound;150.00</span>
								</li>
                                <li>
                                    <a href="product-sample.html" title="Yellow Backpack">
                                        <img src="http://placehold.it/75x75" alt="" /> 
										<span class="product-title">Yellow Backpack</span>
                                    </a>
                                    <div class="star-rating" title="Rated 4.00 out of 5">
										<span class="width_80per">
											<strong class="rating">4.00</strong> out of 5
										</span>
									</div> 
								<span class="amount">&pound;74.19</span></li>
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

export default ProductPage


