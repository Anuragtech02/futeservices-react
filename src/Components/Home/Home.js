import React from 'react'
import style from './Home.module.css'
import {  motion  } from 'framer-motion'
import classNames from 'classnames'
import introImage from '../../Assets/pexels-daniel-absi-952670.jpg'
import introImage2 from '../../Assets/pexels-caleb-oquendo-2918590.jpg'
import { introData, teamData } from '../../Static'
import { Carousel, HrSlider } from '../index'

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
         
            <section className={style.section} style={{background: '#111' }} >
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
        </div>
    )
}

export default Home