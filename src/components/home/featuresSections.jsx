import { Fragment } from "react";

const FeaturesSections = () => {
    return ( 
        <Fragment>
            {/* <!-- Features section --> */}
            <div className="sc_section" data-animation="animated zoomIn normal">
                                        <div className="sc_content content_wrap margin_top_3em_imp margin_bottom_3em_imp sc_features_st1">
                                            <div className="columns_wrap sc_columns columns_fluid sc_columns_count_3">
                                                <div className="column-1_3 sc_column_item sc_column_item_1 odd first text_center">
                                                    <a href="#" className="sc_icon icon-woman-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em"></a>
                                                    <div className="sc_section font-w_400 margin_top_1em_imp">
                                                        <p>
                                                            <a className="menu_color" href="#">Take computer science courses<br />
                                                                with personalized support</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="column-1_3 sc_column_item sc_column_item_2 even text_center">
                                                    <a href="#" className="sc_icon icon-rocket-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em"></a>
                                                    <div className="sc_section font-w_400 margin_top_1em_imp">
                                                        <p>
                                                            <a className="menu_color" href="#">Build cool projects<br />
                                                                to showcase your skills</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="column-1_3 sc_column_item sc_column_item_3 odd text_center">
                                                    <a href="#" className="sc_icon icon-world-2 sc_icon_bg_menu menu_dark_color font_5em lh_1em"></a>
                                                    <div className="sc_section font-w_400 margin_top_1em_imp">
                                                        <p>
                                                            <a className="menu_color" href="#">Earn certificates<br />
                                                                recognized by Industry</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* <!-- /Features section --> */}
        </Fragment>
     );
}
 
export default FeaturesSections;