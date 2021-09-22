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
  const links = {
    linkedin: "https://www.linkedin.com/in/fute-services-hr-team-89a0b850",
    instagram: "https://instagram.com/futeservices?utm_medium=copy_link",
    youtube: "https://youtube.com/user/Futeservices",
    vimeo: "https://vimeo.com/user48533872",
    facebook: "https://www.facebook.com/futeservices",
    twitter: "https://twitter.com/futeservices",
  };

  const onClickSocial = (type) => {
    if (type) {
      const a = document.createElement("a");
      a.href = links[type];
      a.target = "_blank";
      a.click();
    }
  };

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
        <p>© Unified Consulting 2021</p>
        <ul className={style.socialLinks}>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("twitter")}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("facebook")}>
              <FacebookIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("instagram")}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("linkedin")}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("vimeo")}>
              <img width={15} src={vimeoIcon} alt="vimeo-fute" />
            </IconButton>
          </li>
          <li className={style.socialLink}>
            <IconButton onClick={() => onClickSocial("youtube")}>
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
