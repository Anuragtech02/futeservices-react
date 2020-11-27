import React from 'react'
import style from './Home.module.css'
import {  motion  } from 'framer-motion'
import introImage from '../../Assets/pexels-daniel-absi-952670.jpg'
import introImage2 from '../../Assets/pexels-caleb-oquendo-2918590.jpg'
import bgImage2 from '../../Assets/josh-rose-trYl7JYATH0-unsplash.jpg';
import { introData, teamData, timelineData, timeline } from '../../Static'
import { Carousel, HrSlider, Testimonial } from '../index'
import Slider from 'react-slick'
import CustomStepper from '../CustomStepper/CustomStepper'
import MultipleSlider from '../MultipleSlider/MultipleSlider'

export const Home = () => {

    const cursor=(e)=>{
        var mouseCursor = document.querySelector("#cursor");
          
        if(mouseCursor)
        {
           mouseCursor.style.top = e.pageY+"px";
           mouseCursor.style.left = e.pageX+"px";
        }
      
       
   }
   window.addEventListener('mousemove',cursor);



return(
  /* <div id="container" className={style.container}>
       <div id="cursor" className={style.customCursor} ></div>
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
                   <motion.button style={{opacity:1, marginTop: 30}} className={style.btnLight}>
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
                   <Testimonial theme="dark" />
           </section>
           <section style={{backgroundColor: "rgba(0, 0, 0, 0.93"}}>
               <CustomStepper steps={timeline} content={timelineData} theme="dark" />
           </section>
       </section>
   </div>*/
   <div id="container" className={style.container}>
       <div id="cursor" className={style.customCursor} ></div>
      
       <header className={style.header1}>
           <h1>Lorem Ipsum is simply dummy text of the.</h1>
       </header>
       <header className={style.header2}>
           <h1>Lorem Ipsum is simply dummy text of the.</h1>
       </header>
       <header className={style.header3}>
           <h1>Lorem Ipsum is simply dummy text of the.</h1>
       </header>
       <header className={style.header4}>
           <h1>Lorem Ipsum is simply dummy text of the.</h1>
       </header>
       <header className={style.header5}>
           <img src="https://lh3.googleusercontent.com/proxy/hTDZa9pjFCqaMNZZY8DX3gGU88ZgV6Zhk8kZYzSltaBNvp1LleMQ3OT1Wt0zP7mGBKGmh_c0aGEBOx7OWbyCZvs0SoYyHzFNo2T37VBBa8TJiXu3xd65acD637idln9Z-VwEow"/>
       </header>
       <MultipleSlider/>
       </div>
)
}
export default Home