import React from "react";
import style from "./Footer.module.css";
import logo from "../../Assets/logo.png";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FooterData } from "../../Static";

export const Footer = () => {
  return (
    <div>
      <nav className={style.container}>
        <div className={style.brandName}>
          {/* <img src={logo} width="50%" alt="Fute Services" /> */}
          <h1>Fute Services</h1>
        </div>
        <ul className={classNames(style.nav, style.noDecoration)}>
          {FooterData.tabs.map(({ label, id, path }) => {
            return (
              <li
                className={classNames(style.navItems)}
                id={id}
                key={"header-" + label}
              >
                <Link
                  to={path}
                  className={classNames(style.navLink, style.noDecoration)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr></hr>
      <p>©Fute-Services 2020</p>
    </div>
  );
};

export default Footer;
