import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import style from './Contact.module.css'

export const Contact = () => {

    const socialMedia = [
        {
            icon: <YouTube fontSize="small" />,
            link: "#",
        },
        {
            icon: <Instagram fontSize="small" />,
            link: "#",
        },
        {
            icon: <Twitter fontSize="small" />,
            link: "#",
        },
        {
            icon: <Facebook fontSize="small" />,
            link: "#",
        },
    ]

    React.useEffect(() => {
        document.getElementById("navbar").classList.remove(style.dark)
        document.getElementById("navbar").classList.add(style.light)
        document.getElementById("navbar").style.position= "relative"
    })
    
    return(
        <div className={style.container}>
            <div className={style.map}>
                <iframe 
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51779.724775462135!2d72.91161054598562!3d19.06508133795864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1600505394298!5m2!1sen!2sin" 
                    width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"
                />
            </div>
            <div className={style.content}>
                <div className={style.floatLeft}>
                    <h6 className={style.heading}>COLLABORATE</h6>
                    <p className={style.para}>WANT TO WORK WITH US? LEAVE US A MESSAGE!</p>
                    <div>
                        <ul>
                            {socialMedia.map((data, index) =>
                                <li key={index} ><a href={data.link} >{data.icon}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className={style.floatRight}>
                    <form>
                        <textarea rows="10" col="40" name="message" placeholder="Enter Your Message" />
                        <br />
                        <div className={style.flex}>
                            <input name="name" type="text" placeholder="Your Name" />
                            <input name="email" type="email" placeholder="Your Email" />
                        </div>
                        <button style={{opacity: 1}} className={style.btnDrakFilled} type="submit" >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact