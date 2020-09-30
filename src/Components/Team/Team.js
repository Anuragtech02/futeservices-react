import { motion } from 'framer-motion'
import React from 'react'
import { mainTeamData } from '../../Static'
import style from './Team.module.css'

export const Team = () => {
    return(
        <div className={style.container}>
            <section className={style.banner}>
                    <div style={{width: "100", backgroundColor: "rgba(0,0,0,0.5"}}>
                        <h1 className={style.bannerText}>Our Team</h1> 
                    </div>
                </section>
            <div className={style.team}>
                    <div className={style.alignTop}>
                            <motion.h6 className={style.subheading}>
                            A BRIEF WORD ON
                            </motion.h6>
                            <motion.h2 className={style.heading}>
                            WHO’S IN OUR TEAM 
                            </motion.h2>
                            <motion.p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
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
        </div>
    )
}

export default Team