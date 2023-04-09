import { Fragment } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import LevelTest from '../test/levelTest';
import Diagnostic from '../test/diagnostic';
import Specialist from '../test/specialist';

const FeaturesSections = () => {
    return ( 
        <Fragment>
            {/* <!-- Features section --> */}
            <div style={{ marginTop : "150px"}} className="sc_section" data-animation="animated zoomIn normal">
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
                                                                <Link className="menu_color" to="/test"> Start with Level Test</Link>
                                                                <br/>
                                                                <Link className="menu_color" to="/diagnostic">Diagnostic Test </Link>
                                                                <br/>
                                                                <Link className="menu_color" to="/specialist"> Specialist </Link>
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
            <Routes>
                <Route path="/test" element={<LevelTest/>}></Route>
                <Route path="/diagnostic" element={<Diagnostic/>}></Route>
                <Route path="/specialist" element={<Specialist/>}></Route>
            </Routes>
        </Fragment>
     );
}
 
export default FeaturesSections;