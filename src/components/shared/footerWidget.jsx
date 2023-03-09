import { Fragment } from "react";

const FooterWidget = () => {
    return ( 
        <Fragment>
            {/* <!-- Widgets Footer -->  */}
                    <footer className="footer_wrap bg_tint_light footer_style_white widget_area">
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
                                                <th className="month_cur" colSpan="5">September <span>2015</span></th>
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
                                                <td colSpan="1" className="pad"><span className="day_wrap">&nbsp;</span></td>
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
                                                <td className="pad" colSpan="4"><span className="day_wrap">&nbsp;</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </aside>
                                {/* <!-- /Calendar widget -->
						<!-- Popular courses widget --> */}
                                <aside className="column-1_3 widget">
                                    <h5 className="widget_title">Popular Courses</h5>
                                    <article className="post_item with_thumb first">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" /></div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Principles of Written English, Part 1</a>
                                            </h6>
                                            <div className="post_info"><span className="post_info_item post_info_posted">
                                                <a href="paid-course.html" className="post_info_date">December 24, 2014</a></span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                                                        <span className="post_counters_number">86.8</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Medical Chemistry: The  Molecular Basis...</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">March 8, 2015</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                                                        <span className="post_counters_number">83.8</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">February 27, 2015</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                                                        <span className="post_counters_number">76.3</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Introduction to Biomedical Imaging</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">January 1, 2016</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_rating icon-star-1">
                                                        <span className="post_counters_number">74.8</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </aside>
                                {/* <!-- /Popular courses widget -->
						<!-- Recent courses widget --> */}
                                <aside className="column-1_3 widget">
                                    <h5 className="widget_title">Recent Courses</h5>
                                    <article className="post_item with_thumb first">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Principles of Written English, Part 2</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">February 10, 2015</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                                                        <span className="post_counters_number">749</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Entrepreneurship 101:  Who is your customer?</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">February 27, 2015</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                                                        <span className="post_counters_number">729</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="free-course.html">Evaluating Social  Programs</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="free-course.html" className="post_info_date">January 1, 2015</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="free-course.html" className="post_counters_item post_counters_views icon-eye">
                                                        <span className="post_counters_number">1154</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="post_item with_thumb">
                                        <div className="post_thumb">
                                            <img alt="" src="http://placehold.it/75x75" />
                                        </div>
                                        <div className="post_content">
                                            <h6 className="post_title">
                                                <a href="paid-course.html">Principles of Written English, Part 1</a>
                                            </h6>
                                            <div className="post_info">
                                                <span className="post_info_item post_info_posted">
                                                    <a href="paid-course.html" className="post_info_date">December 24, 2014</a>
                                                </span>
                                                <span className="post_info_item post_info_posted_by">by
                                                    <a href="#" className="post_info_author">John Doe</a>
                                                </span>
                                                <span className="post_info_item post_info_counters">
                                                    <a href="paid-course.html" className="post_counters_item post_counters_views icon-eye">
                                                        <span className="post_counters_number">253</span>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </aside>
                                {/* <!-- /Recent courses widget --> */}
                            </div>
                        </div>
                    </footer>
                    {/* <!-- /Widgets Footer -->*/}
        </Fragment>
     );
}
 
export default FooterWidget;