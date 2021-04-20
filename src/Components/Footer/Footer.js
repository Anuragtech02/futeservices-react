import React from "react";
import style from "./Footer.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FooterData } from "../../Static";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import vimeoIcon from "../../Assets/vimeo-brands.svg";

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
      <div className={style.bottomFoot}>
        <p>©Fute-Services 2020</p>
        <ul className={style.socialLinks}>
          <li className={style.socialLink}>
            <IconButton>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton>
              <FacebookIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton>
              <img width={15} src={vimeoIcon} alt="vimeo-fute" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton>
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
