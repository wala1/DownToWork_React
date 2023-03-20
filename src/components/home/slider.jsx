import React from 'react';
import HeroSlider , {Slide} from 'hero-slider';
function SliderBg() {
   
    return (
        <>
        <HeroSlider className="slederShape" slidingAnimation="left_to_right " 
                    orientation="horizontal"
                    initialSlide={1} 
                    onBeforeChange={(previousSlide , nextSlide) => console.log("oBeforeChange",previousSlide,nextSlide)}
                    onChange={nextSlide => console.log("onChange" , nextSlide)}
                    onAfterChange={nextSlide => console.log("onfterChange " , nextSlide)}
                    style = {{
                        backgroundColor:"rgba(0, 0, 0.33)"
                    }}
                    settings={{
                              slidingDuration : 250 , 
                              slidingDisplay : 100 , 
                              shouldAutoplay : true ,
                              shouldDisplayButons : true,
                              autoplayDuration : 3000,
                              height : "100vh"
                    }}

        >
            <Slide
                 background=
                    {{backgroundImageSrc : "https://bootdey.com/img/Content/avatar/avatar1.png",
                        backgroundAttachment : "fixed"
                    
                    }}
            />
             <Slide
                 background=
                    {{backgroundImageSrc :"https://bootdey.com/img/Content/avatar/avatar2.png",
                        backgroundAttachment : "fixed"
                    
                    }}
            />
             <Slide
                 background=
                    {{backgroundImageSrc : "https://bootdey.com/img/Content/avatar/avatar3.png",
                        backgroundAttachment : "fixed"
                    
                    }}
            />
            
            
        </HeroSlider>
        </>
      );
}

export default SliderBg;