import React from 'react'
import Slider from 'react-slick'
import style from './HrSlider.module.css'
import playButton from '../../Assets/play-btn.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion'

export const HrSlider = () => {

    const slides = []


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
    }

    return(
        <Slider {...settings} className={style.outerDiv} >
            
        </Slider>

    )
}

export default HrSlider;