import React from 'react'
import Slider from 'react-slick'
import { testimonialData } from '../../Static'
import style from './Testimonial.module.css'


export const Testimonial = (props) => {

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
                    <div key={index} className={props.theme === 'dark' ? style.testiContainerDark : style.testiContainerLight}>
                        <h1 style={{color: props.theme === 'dark' ? '#fff' : '#000'}}>{`"${testimonialData.heading}"`}</h1>
                        <p style={{color: props.theme === 'dark' ? '#fff' : '#000'}}>{`"${testimonialData.para}"`}</p>
                        <div className={style.author} >
                            <img src={testimonialData.authorImg} alt="" />
                            <div className={style.authorExtras}>
                                <h6 style={{color: props.theme === 'dark' ? '#fff' : '#000'}}>{testimonialData.author}</h6>
                                <p style={{color: props.theme === 'dark' ? '#fff' : '#000'}}>{testimonialData.aboutAuthor}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default Testimonial