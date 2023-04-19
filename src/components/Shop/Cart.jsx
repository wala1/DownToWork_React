import { useDispatch, useSelector } from "react-redux";
import Nav from "../shared/NavBar";
import React, { Fragment } from "react";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/cartSlice";

function Cart() {
  const Key ="pk_test_51MpqyNGRNqPvE5WccXSilt2gBlKOh4eNF3j57KdEyHRMiydKkIkvQzct2p9aJXT5AIWzFH8vxC5CoW4yllPdDvWI00UONeUlXQ";
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector(state => state.cart)
  const myList = cart.products.map((product) => {
		function handleRemove() {
			dispatch(removeProduct({ productId: product._id }));
		}
		console.log(cart.total)
		return<tr class="cart_item">
			<td class="product-remove">
				<a href="#" class="remove" title="Remove this item" onClick={handleRemove} >&times;</a>
			</td>
			<td class="product-thumbnail">
				<a href="#">
					<img src={`http://localhost:3001/${product.prodImg.imgUrl}`} alt="" />
				</a>
			</td>
			<td class="product-name">
				{product.prodName}
			</td>
			<td class="product-price">
				<span class="amount">&pound;{product.prodPrice}</span>
			</td>
			
		</tr>

	})
  const onToken = (token) => {
    setStripeToken(token);
  };
  const navigate = useNavigate();
    useEffect(() => {
        const MakeRequest = async () => {
            try {
            const res = await axios.post("http://localhost:3001/checkout/payment", {
                tokenId: stripeToken.id,
                amount: 500,
            });
            console.log(res.data);
            navigate("/success",{state: {data:res.data , products:cart} } );

        }
        catch (error) {
            console.log(error.response.data);
            navigate("/fail",{state: {data:error.response.data}});
        }
    };
      stripeToken && MakeRequest();


    }, [stripeToken]);





  const dispatch = useDispatch();
  
  return (
    <body className="page body_style_wide body_filled article_style_boxed layout_single-standard top_panel_style_dark top_panel_opacity_transparent top_panel_above menu_right sidebar_hide woocommerce-cart woocommerce-page">
      {/* archive body_style_wide body_filled article_style_boxed top_panel_style_light top_panel_opacity_solid top_panel_above menu_right sidebar_show sidebar_right woocommerce woocommerce-page */}

      {/* <a
        id="toc_top"
        className="sc_anchor"
        title="To Top"
        data-description="&lt;i&gt;Back to top&lt;/i&gt; - &lt;br&gt;scroll to top of the page"
        data-icon="icon-angle-double-up"
        data-url=""
        data-separator="yes"
      ></a> */}
      {/* <!-- Body --> */}
      {/* <div className="body_wrap">//hedhi
        <div className="page_wrap">
        <Nav /> */}

          {/* <!-- Page title --> */}

          {/* <!-- /Page title --> */}
          {/* <!-- Content with sidebar --> */}
          <div class="page_content_wrap">
            <div
              class="content_wrap"
              style={{ marginTop: "200px", marginBottom: "70px" }}
            >
              <div class="content">
                <article class="post_item post_item_single page type-page sc_cart_st1">
                  <section class="post_content">
                    <div class="woocommerce">
                      <form action="#" method="post">
                        <table class="shop_table cart">
                          <thead>
                            <tr>
                              <th class="product-remove">remove item</th>
                              <th class="product-thumbnail">product image</th>
                              <th class="product-name">Product name</th>
                              <th class="product-price">Price</th>
                              {/* <th class="product-quantity">Quantity</th> */}
                              {/* <th class="product-subtotal">Total</th> */}
                            </tr>
                          </thead>
                          <tbody>
                          {myList}
                            {/* <tr class="cart_item">
													<td class="product-remove">
														<a href="#" class="remove" title="Remove this item">&times;</a> 
													</td>
													<td class="product-thumbnail">
														<a href="product-page.html">
															<img src="http://placehold.it/75x75" alt="" /></a>
													</td>
													<td class="product-name">
														<a href="#">Introduction to Computer Science </a> 
													</td>
													<td class="product-price">
														<span class="amount">&pound;120.00</span> 
													</td>
													<td class="product-quantity">
														<div class="quantity">
															<input type="number" step="1" min="0" name="cart[2][qty]" value="1" title="Qty" class="input-text qty text" size="4" />
														</div>
													</td>
													<td class="product-subtotal">
														<span class="amount">&pound;120.00</span> </td>
												</tr>
												<tr class="cart_item">
													<td class="product-remove">
														<a href="#" class="remove" title="Remove this item" data-product_id="" data-product_sku="">&times;</a> </td>

													<td class="product-thumbnail">
														<a href="product-page.html">
															<img src="http://placehold.it/75x75" class="attachment-shop_thumbnail" alt="" /></a>
													</td>

													<td class="product-name">
														<a href="#">Star Print Backpack </a> </td>

													<td class="product-price">
														<span class="amount">&pound;41.39</span> </td>

													<td class="product-quantity">
														<div class="quantity">
															<input type="number" step="1" min="0" name="cart[3][qty]" value="1" title="Qty" class="input-text qty text" size="4" />
														</div>
													</td>

													<td class="product-subtotal">
														<span class="amount">&pound;41.39</span> </td>
												</tr> */}
                            <tr>
                              <td colspan="6" class="actions">
                                <div class="coupon">
                                  <label for="coupon_code">Coupon:</label>
                                  <input
                                    type="text"
                                    name="coupon_code"
                                    class="input-text"
                                    id="coupon_code"
                                    value=""
                                    placeholder="Coupon code"
                                  />
                                  <input
                                    type="submit"
                                    class="button"
                                    name="apply_coupon"
                                    value="Apply Coupon"
                                  />
                                </div>
                                <input
                                  type="submit"
                                  class="button"
                                  name="update_cart"
                                  value="Update Cart"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                      <div class="cart-collaterals">
                        <div class="cart_totals ">
                          <h2>Cart Totals</h2>
                          <table>
                            <tr class="cart-subtotal">
                              <th>Subtotal</th>
                              <td>
                                <span class="amount">&pound;{cart.total}</span>
                              </td>
                            </tr>
                            <tr class="order-total">
                              <th>Total</th>
                              <td>
                                <strong>
                                  <span class="amount">
                                    &pound;{cart.total}
                                  </span>
                                </strong>
                              </td>
                            </tr>
                          </table>
                          <div class="wc-proceed-to-checkout">
                            <StripeCheckout
                              name="Shop"
                              description="Pay for your items"
                              shippingAddress
                              billingAddress
                              amount={cart.total * 100}
                              token={onToken}
                              stripeKey={Key}
                            >
                              <button class="checkout-button button alt wc-forward">
                                Proceed to Checkout
                              </button>
                            </StripeCheckout>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </article>
              </div>
             </div>
         </div>
          {/* <!-- /Content -->		 */}
          {/* <!-- Widgets Footer --> */}
          {/* <footer className="footer_wrap bg_tint_light footer_style_light widget_area">
            <div className="content_wrap">
              <div className="columns_wrap"> */}
                {/* <!-- Calendar widget --> */}
                {/* <aside className="column-1_3 widget widget_calendar">
                  <h5 className="widget_title">Calendar</h5>
                  <table>
                    <thead>
                      <tr>
                        <th className="month_prev">
                          <a
                            href="#"
                            data-type="post,courses,tribe_events"
                            data-year="2015"
                            data-month="01"
                            title="View posts for January 2015"
                          ></a>
                        </th>
                        <th className="month_cur" colspan="5">
                          September <span>2015</span>
                        </th>
                        <th className="month_next">
                          <a
                            href="#"
                            data-month="10"
                            data-year="2015"
                            data-type="post,courses,tribe_events"
                            title="View posts for October 2015"
                          ></a>
                        </th>
                      </tr>
                      <tr>
                        <th className="weekday" scope="col" title="Monday">
                          Mon
                        </th>
                        <th className="weekday" scope="col" title="Tuesday">
                          Tue
                        </th>
                        <th className="weekday" scope="col" title="Wednesday">
                          Wed
                        </th>
                        <th className="weekday" scope="col" title="Thursday">
                          Thu
                        </th>
                        <th className="weekday" scope="col" title="Friday">
                          Fri
                        </th>
                        <th className="weekday" scope="col" title="Saturday">
                          Sat
                        </th>
                        <th className="weekday" scope="col" title="Sunday">
                          Sun
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colspan="1" className="pad">
                          <span className="day_wrap">&nbsp;</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">1</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">2</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">3</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">4</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">5</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">6</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="day">
                          <span className="day_wrap">7</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">8</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">9</span>
                        </td>
                        <td className="day">
                          <a className="day_wrap" title="Post" href="#">
                            10
                          </a>
                        </td>
                        <td className="day">
                          <span className="day_wrap">11</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">12</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">13</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="day">
                          <span className="day_wrap">14</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">15</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">16</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">17</span>
                        </td>
                        <td className="day">
                          <a className="day_wrap" title="Post" href="#">
                            18
                          </a>
                        </td>
                        <td className="day">
                          <span className="day_wrap">19</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">20</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="today">
                          <span className="day_wrap">21</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">22</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">23</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">24</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">25</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">26</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="day">
                          <span className="day_wrap">28</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">29</span>
                        </td>
                        <td className="day">
                          <span className="day_wrap">30</span>
                        </td>
                        <td className="pad" colspan="4">
                          <span className="day_wrap">&nbsp;</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </aside> */}
                {/* <!-- /Calendar widget --> */}
                {/* <!-- Recent posts widget --> */}
                {/* <aside className="column-1_3 widget">
                  <h5 className="widget_title">Recent Posts</h5>
                  <article className="post_item first">
                    <div className="post_thumb">
                      <img alt="" src="http://placehold.it/75x75"></img>
                    </div>
                    <div className="post_content">
                      <h6 className="post_title">
                        <a href="post-with-sidebar.html">
                          Medical Chemistry: The Molecular Basis
                        </a>
                      </h6>
                      <div className="post_info">
                        <span className="post_info_item post_info_posted">
                          <a href="#" className="post_info_date">
                            January 14, 2015
                          </a>
                        </span>
                        <span className="post_info_item post_info_posted_by">
                          by
                          <a href="#" className="post_info_author">
                            John Doe
                          </a>
                        </span>
                        <span className="post_info_item post_info_counters">
                          <a
                            href="#"
                            className="post_counters_item post_counters_views icon-eye"
                          >
                            <span>157</span>
                          </a>
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
                        <a href="post-without-sidebar.html">
                          Introduction to Computer Science
                        </a>
                      </h6>
                      <div className="post_info">
                        <span className="post_info_item post_info_posted">
                          <a href="#" className="post_info_date">
                            January 14, 2015
                          </a>
                        </span>
                        <span className="post_info_item post_info_posted_by">
                          by
                          <a href="#" className="post_info_author">
                            John Doe
                          </a>
                        </span>
                        <span className="post_info_item post_info_counters">
                          <a
                            href="#"
                            className="post_counters_item post_counters_views icon-eye"
                          >
                            <span>103</span>
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
                        <a href="post-without-sidebar.html">
                          Introduction to Biomedical Imaging
                        </a>
                      </h6>
                      <div className="post_info">
                        <span className="post_info_item post_info_posted">
                          <a href="#" className="post_info_date">
                            January 13, 2015
                          </a>
                        </span>
                        <span className="post_info_item post_info_posted_by">
                          by
                          <a href="#" className="post_info_author">
                            John Doe
                          </a>
                        </span>
                        <span className="post_info_item post_info_counters">
                          <a
                            href="#"
                            className="post_counters_item post_counters_views icon-eye"
                          >
                            <span>80</span>
                          </a>
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
                        <a href="post-without-sidebar.html">
                          Evaluating Social Programs
                        </a>
                      </h6>
                      <div className="post_info">
                        <span className="post_info_item post_info_posted">
                          <a href="#" className="post_info_date">
                            January 13, 2015
                          </a>
                        </span>
                        <span className="post_info_item post_info_posted_by">
                          by
                          <a href="#" className="post_info_author">
                            John Doe
                          </a>
                        </span>
                        <span className="post_info_item post_info_counters">
                          <a
                            href="#"
                            className="post_counters_item post_counters_views icon-eye"
                          >
                            <span>77</span>
                          </a>
                        </span>
                      </div>
                    </div>
                  </article>
                </aside> */}
                {/* <!-- /Recent posts widget --> */}
                {/* <!-- Recent comments widget --> */}
                {/* <aside className="column-1_3 widget widget_recent_comments">
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
                      <a href="product-page.html">
                        Principles of Written English, Part 2
                      </a>
                    </li>
                    <li>
                      <span>TRX_admin</span> on
                      <a href="product-page.html">
                        Principles of Written English, Part 2
                      </a>
                    </li>
                    <li>
                      <span>TRX_admin</span> on
                      <a href="product-page.html">
                        Video Training for Microsoft products and technologies
                      </a>
                    </li>
                  </ul>
                </aside> */}
                {/* <!-- /Recent comments widget --> */}
              {/* </div>
            </div>
          </footer> */}
          {/* <!-- /Widgets Footer -->			 */}
          {/* <!-- Contacts Footer  --> */}
          {/* <footer className="contacts_wrap bg_tint_dark contacts_style_dark">
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
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_facebook"
                  >
                    <span className="sc_socials_hover social_facebook"></span>
                  </a>
                </div>
                <div className="sc_socials_item">
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_pinterest"
                  >
                    <span className="sc_socials_hover social_pinterest"></span>
                  </a>
                </div>
                <div className="sc_socials_item">
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_twitter"
                  >
                    <span className="sc_socials_hover social_twitter"></span>
                  </a>
                </div>
                <div className="sc_socials_item">
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_gplus"
                  >
                    <span className="sc_socials_hover social_gplus"></span>
                  </a>
                </div>
                <div className="sc_socials_item">
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_rss"
                  >
                    <span className="sc_socials_hover social_rss"></span>
                  </a>
                </div>
                <div className="sc_socials_item">
                  <a
                    href="#"
                    target="_blank"
                    className="social_icons social_dribbble"
                  >
                    <span className="sc_socials_hover social_dribbble"></span>
                  </a>
                </div>
              </div>
            </div>
          </footer> */}
          {/* <!-- /Contacts Footer --> */}
          {/* <!-- Copyright --> */}
          {/* <div className="copyright_wrap">
            <div className="content_wrap">
              <p>
                © 2015 All Rights Reserved. <a href="#">Terms of use</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div> */}
          {/* <!-- /Copyright --> */}
        {/* </div>
      </div> */}
      {/* <!-- /Body --> */}
      {/* <a href="#" className="scroll_to_top icon-up-2" title="Scroll to top"></a> */}

      {/* <div className="custom_html_section"></div> */}
    </body>
  );
}

export default Cart;
