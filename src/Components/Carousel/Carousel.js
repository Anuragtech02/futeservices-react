import React from 'react'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import style from './Carousel.module.css'
import classNames from 'classnames'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../Assets/pexels-artem-beliaikin-1319795.jpg'
import img2 from '../../Assets/pexels-bich-tran-669996.jpg'
import img3 from '../../Assets/pexels-simon-migaj-747964.jpg'

export const Carousel = () => {

    const [ isVisible, setIsVisible ] = React.useState(true)

    const h2Variants = {
        hide: { opacity: 0 },
        show: { opacity: 1 },
    }

    const line1Variants = {
        hide: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0 },
    }

    const line2Variants = {
        hide: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 },
    }

    const slideData = [
        {
            slide: 1,
            url: img1,
            contentLine1: "Hello! this is ",
            contentLine2: "first slide",
            buttonText: "Show More"
        },
        {
            slide: 2,
            url: img2,
            contentLine1: "Hello! this is ",
            contentLine2: "Second slide",
            buttonText: "Show More"
        },
        {
            slide: 3,
            url: img3,
            contentLine1: "Hello! this is ",
            contentLine2: "Third slide",
            buttonText: "Show More"
        }
    ]

    const settings ={
        fade: true,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        accessibility: true,
        lazyload: true,
        slidesToShow: "1",
        swipeToSlide: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        ease: "ease-in",
        beforeChange: (current, next) => setIsVisible(true),
        afterChange: (current, next) => setIsVisible(false),
    }
    return(
            <Slider {...settings} className={style.sliderCard}
            >
                {slideData.map((slides, index) =>{
                    return(
                        <motion.div id={`slide${slides.slide}`} key={slides.slide} className={style.card}>
                            <motion.div
                                className={style.outerDiv}
                                style={{ backgroundImage: `url(${slides.url})` }}
                            >
                                
                                <motion.div className={style.progressBarBg}>
                                    <motion.div 
                                        animate={{height: `${(index*2) * 33.5}%`}}
                                        transition={{ duration: 4, delay: 0.52, ease: "easeInOut" }}
                                        className={style.progressBar}
                                    >

                                    </motion.div>
                                </motion.div>
                                <motion.div>
                                    <motion.h4
                                        transition={{ duration: 0.4, ease:"easeInOut"}}
                                    >
                                        0{slides.slide}
                                    </motion.h4>
                                </motion.div>

                                <motion.div className={style.innerDiv} >
                                    <motion.h2
                                            custom={index}
                                            animate={isVisible? 'show' : 'hide'}
                                            variants={h2Variants}
                                            transition={{ duration: 1, delay: 0.45, ease:"easeInOut"}}
                                    >
                                        <motion.span
                                            custom={index}
                                            animate={isVisible? 'show' : 'hide'}
                                            variants={line1Variants}
                                            transition={{ duration: 1, delay: 0.45, ease:"easeInOut"}}
                                        >
                                            {slides.contentLine1}
                                        </motion.span>
                                        <motion.span
                                            custom={index}
                                            animate={isVisible? 'show' : 'hide'}
                                            variants={line2Variants}
                                            transition={{ duration: 1.5, delay: 0.50, ease:"easeInOut"}}
                                        >
                                            {slides.contentLine2}
                                        </motion.span>
                                    </motion.h2>
                                    <motion.div className={style.flex}>
                                        <motion.button 
                                            className={style.btnLight}
                                            style={{margin: '20px 30px'}}
                                            custom={index}
                                            animate={isVisible? 'show' : 'hide'}
                                            variants={line1Variants}
                                            transition={{ duration: 1, delay: 0.50, ease:"easeInOut"}}
                                            onMouseEnter={() => setIsVisible(true)}
                                        >{slides.buttonText}</motion.button>
                                        <motion.button 
                                            className={style.btnLightFilled}
                                            style={{margin: '20px 30px'}}
                                            custom={index}
                                            animate={isVisible? 'show' : 'hide'}
                                            variants={line2Variants}
                                            transition={{ duration: 1, delay: 0.50, ease:"easeInOut"}}
                                            onMouseEnter={() => setIsVisible(true)}
                                        >{slides.buttonText}</motion.button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                })}
        </Slider>
    )
}

export default Carousel