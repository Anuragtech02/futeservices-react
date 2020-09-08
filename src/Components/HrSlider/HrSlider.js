import React from 'react'
import Slider from 'react-slick'
import style from './HrSlider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import vdo1 from "../../Assets/video/Pexels_Videos_2629.mp4"
import vdo2 from "../../Assets/video/Pexels_Videos_2795.mp4"
import vdo3 from "../../Assets/video/Pexels_Videos_2915.mp4"

export const HrSlider = () => {

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
        }
    ]


    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        accessibility: true,
        lazyload: true,
        slidesToShow: "3",
        swipeToSlide: "1",
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        ease: "ease-in",
        centerMode: true,
    }

    return(
        <Slider {...settings} >
            {slideData.map((slides, index) =>{
                return(
                    <div className={style.videoContainer} key={index}>
                        <video src={slides.url}  width="100%" autoplay muted>
                        </video>
                    </div>
                )
            })}
        </Slider>
    )
}

export default HrSlider;