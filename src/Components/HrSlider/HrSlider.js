import React from 'react'
import Slider from 'react-slick'
import {motion} from 'framer-motion'
import style from './HrSlider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import vdo1 from "../../Assets/video/Pexels_Videos_2629.mp4"
import vdo2 from "../../Assets/video/Pexels_Videos_2795.mp4"
import vdo3 from "../../Assets/video/Pexels_Videos_2915.mp4"
import playBtn from '../../Assets/play-btn.png'
import classNames from 'classnames'

export const HrSlider = () => {

    const [current, setCurrent] = React.useState(0)

    const variants = {
        focus: {width: "150%"} ,
        other: {width: "100%"}
    }

    const slideData = [
        {
            slide: 1,
            url: vdo1,
        },
        {
            slide: 2,
            url: vdo2,
        },
        {
            slide: 3,
            url: vdo3,
        },
        {
            slide: 1,
            url: vdo1,
        },
        {
            slide: 2,
            url: vdo2,
        },
        {
            slide: 3,
            url: vdo3,
        }
    ]


    const settings = {
        centerPadding: "60px",
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        ease: "cubic-bezier(0,.15,0,.24)",
        focusOnSelect: false,
        afterChange: current => setCurrent(current)
    }

    return(
        <Slider {...settings} className={style.container}>
            {slideData.map((slides, index) =>{
                return(
                    <motion.div 
                        
                        id={`vdo_slide_${index}`} 
                        className={classNames(style.videoContainer, current==index ? ".slick-center" : "" )} 
                        key={index}
                        custom={index}
                        variants={variants}
                        transition={{duration: 0.2}}
                        //animate={current==index ? "focus" : "other"}
                    >

                        <motion.video 
                            className={current==index ? ".slick-center" : "" }
                            width="100%"
                            //style={current==index ? {padding: "15% 0"} : {padding: "40% 0"}}
                            id={`vdo_${index}`} 
                            src={slides.url}  
                            muted
                        />
                    </motion.div>
                )
            })}
        </Slider>
    )
}

export default HrSlider;