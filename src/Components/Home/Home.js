import React from 'react'
import style from './Home.module.css'
import {  motion  } from 'framer-motion'
import classNames from 'classnames'
import introImage from '../../Assets/pexels-daniel-absi-952670.jpg'
import introImage2 from '../../Assets/pexels-caleb-oquendo-2918590.jpg'
import bgImage2 from '../../Assets/josh-rose-trYl7JYATH0-unsplash.jpg';
import { introData, teamData, testimonialData, timelineData, timeline } from '../../Static'
import { Carousel, HrSlider, Footer } from '../index'
import Slider from 'react-slick'
import CustomStepper from '../CustomStepper/CustomStepper'


export const Home = () => {

    return(
        <div id="container" className={style.container}>
            <Carousel className={style.carousel}  />
            <section className={style.section} style={{backgroundImage: `url(${introImage})`}}>
                <div className={style.intro}>
                    <div className={style.alignLeft}>
                        <img width="50%" src={introImage2} alt="" />
                    </div>
                    <div className={style.alignRight}>
                        <motion.h6 className={style.heading}>
                            {introData.heading}
                        </motion.h6>
                        <motion.p className={style.para}>
                            {introData.para}
                        </motion.p>
                        <motion.button style={{opacity:1}} className={style.btnLight}>
                            {introData.buttonTxt}
                        </motion.button>
                    </div>
                </div>
            </section>
            
            <section className={style.section} style={{backgroundColor: "#111"}}>
                <HrSlider className={style.hrSlider}/>
            </section>
            <section className={style.thirdSection} style={{backgroundImage: `url(${bgImage2})`}}>
                <section className={style.section} style={{backgroundColor: "rgba(0, 0, 0, 0.93"}}>
                    <div className={style.team}>
                        <div className={style.alignTop}>
                            <motion.h6 className={style.heading}>
                                {teamData.heading}
                            </motion.h6>
                            <motion.p className={style.para}>
                                {teamData.para}
                            </motion.p>
                        </div>
                        <div className={style.alignBottom}>
                        {teamData.imgData.map((imgData, index) => {
                            return(
                                <motion.div key={index} id={`imgContainer${index}`} className={style.imgContainer}>
                                    <motion.img 
                                        className={style.img}
                                        src={imgData.img}
                                        alt=""
                                    />
                                    <motion.h6 className={style.name}>{imgData.name}</motion.h6>
                                </motion.div>
                            )
                        })}
                        </div>
                    </div>
                </section>
                <section id="test" style={{width: "100vw", height: "50vh", backgroundColor: "rgba(0, 0, 0, 0.93"}} >
                        <Testimonial />
                </section>
                <section style={{backgroundColor: "rgba(0, 0, 0, 0.93"}}>
                    <CustomStepper steps={timeline} content={timelineData}  />
                </section>
            </section>
            <Footer />
        </div>
    )
}

export const Testimonial = () => {

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        centerPadding: "60px",
        className: "center",
        ease: "cubic-bezier(0,.15,0,.24)",
    }

    return(
        <Slider {...settings} className={style.testimonial}>
            {testimonialData.map((testimonialData, index) =>{
                return(
                    <div key={index} className={style.testiContainer}>
                        <h1>{`"${testimonialData.heading}"`}</h1>
                        <p>{`"${testimonialData.para}"`}</p>
                        <div className={style.author} >
                            <img src={testimonialData.authorImg} alt="" />
                            <div className={style.authorExtras}>
                                <h6>{testimonialData.author}</h6>
                                <p>{testimonialData.aboutAuthor}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}



export default Home