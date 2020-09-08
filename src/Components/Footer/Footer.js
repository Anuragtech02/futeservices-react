import React from 'react';
import style from './Footer.module.css';
import logo from '../../Assets/logo.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { HeaderData } from '../../Static';

export const Footer = () =>{
    return(
        <nav className={style.container}>
            <div className={style.brandName}>
                <img src={logo} width="50%" alt="Fute Services" />
            </div>
            <ul className={classNames(style.nav, style.noDecoration)}>
            {HeaderData.tabs.map(({label, id, path}) => {
                return(
                    <li 
                     className={classNames(style.navItems,style.dropdown)}
                     id={id}
                     key={"header-"+ label}
                    >
                        <Link 
                            to={path}
                            className={classNames(style.navLink,style.noDecoration)}                            
                         >
                         {label}
                         </Link>
                    </li>
                )})}
            </ul>
        </nav>
    )
}

export default Footer