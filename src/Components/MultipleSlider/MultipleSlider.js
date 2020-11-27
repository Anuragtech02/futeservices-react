import React from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import styles from "./MultipleSlider.module.css"; 
import {Logos} from "../../Static";

export const MultipleSlider = ()=>{
    const imgSlides = () =>  
    Logos.map(logo => (  
      <div className={styles.sliderBase}>  
       
         <div className={styles.imgContainer}> <img  src= {logo.img} alt="logo" /></div>   
           
      </div>  
    ));  
    return (  
       <div className={styles.slider}>  
            
                     
        <Slider className={styles.centerSlide} 
         dots={false}  
            slidesToShow={4}  
            slidesToScroll={1}  
            autoplay={true}  
             
            autoplaySpeed={1000}>{imgSlides()}</Slider>  
        </div>  
      );  
}
export default MultipleSlider;