import { motion } from 'framer-motion'
import React from 'react'
import { CustomStepper, Testimonial } from '..'
import { AboutWork, ExperienceData, teamData, timeline, timelineData } from '../../Static'
import style from './About.module.css'

export const About = () => {
    return(
        <div className={style.container}>
            <section className={style.section}>
                <section className={style.banner}>
                    <div style={{width: "100", backgroundColor: "rgba(0,0,0,0.5"}}>
                        <h1 className={style.bannerText}>About Us</h1> 
                    </div>
                </section>
                <section className={style.aboutWork}>
                    {AboutWork.map((data, index) =>{
                        return(
                            <div className={style.flex}>
                                <img src={data.icon} alt="" />
                                <h6>{data.heading}</h6>
                                <p>{data.para}</p>
                            </div>  
                        )
                    })}
                </section>
            </section>
            <section className={style.section}>
                <CustomStepper steps={timeline} content={timelineData} theme="light" />
            </section>
            <section className={style.section}>
            </section>
            <section className={style.section} >
                <Testimonial />
            </section>
            <section className={style.section} >
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

export default About