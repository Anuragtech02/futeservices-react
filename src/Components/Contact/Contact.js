import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import { MapContainer } from '..'
import style from './Contact.module.css'

export const Contact = () => {
    return(
        <div className={style.container}>
            <div className={style.map}><MapContainer /></div>
            <div>
                <div className={style.floatLeft}>
                    <h6>COLLABORATE</h6>
                    <h2>WANT TO WORK WITH US? LEAVE US A MESSAGE!</h2>
                    <ul>
                        <li>{YouTube}</li>
                        <li>{Instagram}</li>
                        <li>{Twitter}</li>
                        <li>{Facebook}</li>
                    </ul>
                </div>
                <div className={style.floatRight}></div>
            </div>
        </div>
    )
}

export default Contact