import React from 'react';
function InfoSection({nameTopic,description,image}) {
    return ( 
        <>
          {/* Course info section */}
          <div className="content">
            <article className="post_item post_item_single_courses courses">
              <section className="post_featured bg_tint_dark">
                <img alt="" src={image} style={{ width: '100%', height: '400px' }} />

                <div className="post_thumb_hover d-flex flex-column justify-content-center align-items-center">
                  <div className="post_icon icon-book-2" />

                  <div className="post_categories">
                    <a className="courses_group_link" href="#">
                      {nameTopic}
                    </a>
                  </div>
                  <h3 className="post_title entry-title">
                    {description}
                  </h3>
                  

                  <div className="post_button">
                    <a
                      href="/topics"
                      className="sc_button sc_button_square sc_button_style_filled sc_button_bg_link sc_button_size_medium"
                    >
                      Topics
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>
    </>
     );
}

 
export default InfoSection;