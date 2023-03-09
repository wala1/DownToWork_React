import { Fragment } from "react";

const PricingComponent = () => {
    return ( <Fragment>
        {/* <!-- Pricing section -->  */}
         <div className="sc_section accent_top bg_tint_light sc_bg1" data-animation="animated fadeInUp normal">
                                        <div className="sc_section_overlay">
                                            <div className="sc_section_content">
                                                <div className="sc_content content_wrap margin_top_2_5em_imp margin_bottom_2_5em_imp">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text_center margin_top_0 margin_bottom_085em">Plans &amp; Pricing</h2>
                                                    <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_3">
                                                        <div className="column-1_3 sc_column_item sc_column_item_1 odd first text_center">
                                                            <div className="sc_price_block sc_price_block_style_1 width_100per">
                                                                <div className="sc_price_block_title">Trial</div>
                                                                <div className="sc_price_block_money">
                                                                    <div className="sc_price_block_icon icon-clock-2"></div>
                                                                </div>
                                                                <div className="sc_price_block_description">
                                                                    <span className="sc_highlight font_2_57em lh_1em"><b>Free!</b> 30 Days</span>
                                                                </div>
                                                                <div className="sc_price_block_link">
                                                                    <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_3 sc_column_item sc_column_item_2 even text_center">
                                                            <div className="sc_price_block sc_price_block_style_2">
                                                                <div className="sc_price_block_title">Monthly</div>
                                                                <div className="sc_price_block_money">
                                                                    <div className="sc_price"><span className="sc_price_currency">$</span><span className="sc_price_money">89</span></div>
                                                                </div>
                                                                <div className="sc_price_block_description">
                                                                    <p><b>Save $98</b> every year compared to the monthly
                                                                        <br /> plan by paying yearly.</p>
                                                                </div>
                                                                <div className="sc_price_block_link">
                                                                    <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="column-1_3 sc_column_item sc_column_item_3 odd text_center">
                                                            <div className="sc_price_block sc_price_block_style_3">
                                                                <div className="sc_price_block_title">Yearly</div>
                                                                <div className="sc_price_block_money">
                                                                    <div className="sc_price">
                                                                        <span className="sc_price_currency">$</span>
                                                                        <span className="sc_price_money">129</span>
                                                                    </div>
                                                                </div>
                                                                <div className="sc_price_block_description">
                                                                    <p><b>Save $120</b> every year compared to the monthly
                                                                        <br /> plan by paying biannually.</p>
                                                                </div>
                                                                <div className="sc_price_block_link">
                                                                    <a href="product-page.html" className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_small">I WANT THIS PLAN</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    </Fragment> );
}
 
export default PricingComponent;