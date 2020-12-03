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
import img1 from '../../Assets/1.png';
import { Parallax , Background } from 'react-parallax';
import bg1 from "../../Assets/pexels-artem-beliaikin-1319795.jpg";
import bg2 from "../../Assets/pexels-bich-tran-669996.jpg";
import bg3 from "../../Assets/pexels-caleb-oquendo-2918590.jpg";
import bg4 from "../../Assets/pexels-debasish-sahoo-140221.jpg";


export const Home = () => {

    
  
    React.useEffect(()=>{
        var mouseCursor = document.querySelector("#cursor");
        var img = document.querySelector('#img') ;

         
             img.addEventListener('mouseover',()=>{
                 mouseCursor.style.height="3rem";
                 mouseCursor.style.width="3rem";
                 mouseCursor.style.backgroundColor="transparent";
                 mouseCursor.style.backdropFilter="blur";
             })
             img.addEventListener('mouseleave',()=>{
                mouseCursor.style.height="1rem";
                mouseCursor.style.width="1rem";
                mouseCursor.style.backgroundColor="red";
            })
         
    },[])

    
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
      
      

<div className={style.Parallax}>
<Parallax bgImage={bg1} strength={500}>
      <div style={{ height: 700 , width:"100%" }}>
        <div className={style.insideStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing .</div>
      </div>
    </Parallax>
    <Parallax bgImage={bg2} strength={500}>
      <div style={{ height: 700 , width:"100%"}}>
        <div className={style.insideStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
      </div>
    </Parallax>
    <Parallax bgImage={bg3} strength={500}>
      <div style={{ height: 700 , width:"100%"}}>
        <div className={style.insideStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
      </div>
    </Parallax>
    <Parallax bgImage={bg4} strength={500}>
      <div style={{ height: 700 , width:"100%"}}>
        <div className={style.insideStyles}>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
      </div>
    </Parallax>
   
</div>

   
<header className={style.header5} >
           <div className={style.subheader}>
               <div>
               <h1>Lorem Ipsum</h1>
               <p>Lorem Ipsum is simply dummy text of the</p>
            </div>
        <img id="img" src={img1} />
           </div>
       </header>
       <MultipleSlider/>
       </div>
)
}
export default Home