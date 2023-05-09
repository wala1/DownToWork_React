import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import InfoSection from './infoSecion';
import Video from './video';
function Videos(){
    const [Videos , setVideos] = useState([]);
    const [showAll,setShowAll]= useState(true);
    const [level, setLevel]=useState('');
    const [showBeginner,setShowBeginner]= useState(false);
    const [showMedium,setShowMedium]= useState(false);
    const [showAdvanced,setShowAdvanced]= useState(false);
    const {name} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3001/videosCourses/find-video-topic/${name}`)
        .then((response)=>{
            setVideos(response.data);
            console.log("this is what i am looking for" , response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
    const onBeginner = () => {
      setLevel("beginner");
      setShowBeginner(true);
      setShowAll(false);
      setShowMedium(false);
      setShowAdvanced(false);
      axios
              .get(`http://localhost:3001/videosCourses/find-video-topic-level/${name}/beginner`)
              .then((response) => {
                setVideos(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
    
      console.log("Level : "+ level +  " / beginner  : "+showBeginner);
    }
    const onMedium = () => {
      setLevel("medium");
      setShowMedium(true);
      setShowAll(false);
      setShowAdvanced(false);
      setShowBeginner(false);
      axios
              .get(`http://localhost:3001/videosCourses/find-video-topic-level/${name}/medium`)
              .then((response) => {
                setVideos(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
      console.log("Level : "+ level +  " / medium  : "+showMedium);
    }
    const onAdvanced = () => {
      setLevel("advanced");
      setShowAdvanced(true);
      setShowAll(false);
      setShowMedium(false);
      setShowBeginner(false);
      axios
              .get(`http://localhost:3001/videosCourses/find-video-topic-level/${name}/advanced`)
              .then((response) => {
                setVideos(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
      console.log("Level : "+ level +  " / advanced  : "+showAdvanced);
    }
    const onAllCoursesClick = () => {
      setShowAll(true);
      setShowMedium(false);
      setShowAdvanced(false);
      setShowBeginner(false);
      axios
      .get(`http://localhost:3001/videosCourses/find-video-topic/${name}`)
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log("All : " + showAll );
    }
    return ( <>
        {/* Body */}
        <div className="body_wrap">
          <div className="page_wrap">
            <div className="top_panel_fixed_wrap" />
            {/* Content */}
            <div className="page_content_wrap">
              <InfoSection nameTopic={name} description="Courses, videos and games" image="https://png.pngtree.com/background/20210711/original/pngtree-flat-education-office-stationery-background-picture-image_1116195.jpg"/>
      
              {/* /Course info section */}
              <div className="page_content_wrap">
                <div className="content_wrap">
                  <div className="content">
                    <div className="isotope_filters masonry-page-3-columns inited">
            
                      <a onClick={onAllCoursesClick}  data-filter=".flt_34" className="isotope_filters_button active">
                        All
                      </a>
                      <a
                        onClick={onBeginner}
                        data-filter=".flt_32"
                        className="isotope_filters_button "
                      >
                        Beginner
                      </a>
                      <a
                         onClick={onMedium}
                        data-filter=".flt_32"
                        className="isotope_filters_button "
                      >
                        Medium
                      </a>
                      <a
                        onClick={onAdvanced}
                        data-filter=".flt_32"
                        className="isotope_filters_button "
                      >
                        Advanced
                      </a>
                     
                    </div>
    
                    
                    { (showAll || showMedium || showAdvanced || showBeginner) &&
                    <div
                      className="isotope_wrap inited"
                      data-columns={1}
                      style={{ position: "relative", height: "2000px" }}
                    >
                      <div className="d-flex flex-wrap">
                        {Videos.map((video) => (
                          <Video key={video._id} videoCourse={video} nameTopic={name} />
                          
                        ))}
                      </div>
    
                    </div>
                }
    
                    <div id="viewmore" className="pagination_wrap pagination_viewmore">
                      <a
                        href="#"
                        id="viewmore_link"
                        className="theme_button viewmore_button"
                        style={{ display: "none" }}
                      >
                        <span className="icon-spin3 animate-spin viewmore_loading" />
                        <span className="viewmore_text_1">LOAD MORE</span>
                        <span className="viewmore_text_2">Loading ...</span>
                      </a>
                      <span className="viewmore_loader" />
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
            {/* /Content */}
          </div>
        </div>
       
        </> );

}
export default Videos