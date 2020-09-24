import { motion } from 'framer-motion'
import React from 'react'
import { CustomStepper, Testimonial, ContactForm } from '..'
import { 
    AboutWork, 
    ExperienceData, 
    mainTeamData, 
    timeline, 
    timelineData 
} from '../../Static'
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
            <section className={style.midSection}>
                
                <div className={style.stepper}>
                    <CustomStepper steps={timeline} content={timelineData} theme="light" />
                </div>

                <div className={style.experience}>
                    <div className={style.alignLeft}>
                        <motion.h6 className={style.subheading}>
                            {ExperienceData.subheading}
                        </motion.h6>
                        <motion.h6 className={style.heading}>
                            {ExperienceData.heading}
                        </motion.h6>
                        <motion.p className={style.para}>
                            {ExperienceData.para}
                        </motion.p>
                        <motion.button style={{opacity:1, marginTop: 30}} className={style.btnDark}>
                            {ExperienceData.btnText}
                        </motion.button>
                    </div>
                    <div className={style.alignRight}>
                        <img width="100%" src={ExperienceData.img} alt="" />
                    </div>
                </div>

                <div className={style.testimonial}>
                    <Testimonial theme='light' />
                </div>
            </section>
            <section className={style.section} >
                <div className={style.team}>
                    <div className={style.alignTop}>
                            <motion.h6 className={style.subheading}>
                                {mainTeamData.heading}
                            </motion.h6>
                            <motion.p className={style.heading}>
                                {mainTeamData.para}
                            </motion.p>
                        </div>
                        <div className={style.alignBottom}>
                        {mainTeamData.imgData.map((imgData, index) => {
                            return(
                                <motion.div key={index} id={`imgContainer${index}`} className={style.imgContainer}>
                                    <div className={style.imgOverlay}>
                                        <motion.img 
                                            className={style.img}
                                            src={imgData.img}
                                            alt=""
                                        />
                                    </div>
                                    <motion.h6 className={style.name}>{imgData.name}</motion.h6>
                                    <motion.p className={style.position}>{imgData.position}</motion.p>
                                </motion.div>
                            )
                        })}
                        </div>
                    </div>
            </section>
            <section className={style.section} >
                <ContactForm />
            </section>
        </div>
    )
}

export default About