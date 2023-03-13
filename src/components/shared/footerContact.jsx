import { Fragment } from "react";

function FooterContact() {
    return ( 
        <Fragment>
            {/* <!-- Contacts Footer -->  */}
            <footer className="contacts_wrap bg_tint_dark contacts_style_dark">
                        <div className="content_wrap">
                        
                            <div className="contacts_address">
                                <address className="address_right">
                                    Phone: 1.800.123.4567
                                    Fax: 1.800.123.4566
                                </address>
                                <address className="address_left">
                                    San Francisco, CA 94102, US
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
                   
			         
        </Fragment>
     );
}

export default FooterContact;