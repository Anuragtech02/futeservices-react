import { motion } from 'framer-motion'
import React from 'react'
import Slider from 'react-slick'
import { PortfolioData } from '../../Static'
import style from './Portfolio.module.css'
import NavStyle from '../../App.module.css'

export const Portfolio = () =>{

    React.useEffect(() => {
        document.getElementById("navbar").classList.remove(NavStyle.light)
        document.getElementById("navbar").classList.add(NavStyle.dark)
        document.getElementById("navbar").style.position= "relative"
    })

    const settings = {
        className: "center",
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return(
        <Slider {...settings} className={style.container}>
            {PortfolioData.map((data, index) => {
                return(
                    <motion.div key={index} id={`imgContainer${index}`} className={style.imgContainer}>
                        <div className={style.imgOverlay}>
                            <motion.img
                                className={style.img}
                                src={data.img}
                                alt=""
                            />
                        </div>
                        <motion.h6 className={style.name}>{data.name}</motion.h6>
                    </motion.div>
                )
            })}
        </Slider>
    )
}

export default Portfolio