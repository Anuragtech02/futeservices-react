import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import style from "./Contact.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import vimeoIcon from "../../Assets/vimeo-brands.svg";

export const Contact = () => {
  //   React.useEffect(() => {
  //     document.getElementById("navbar").classList.remove(style.dark);
  //     document.getElementById("navbar").classList.add(style.light);
  //     document.getElementById("navbar").style.position = "relative";
  //   });

  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url(${cat1})` }}
        className={style.bgImage}
      >
        <h2>Contact Details</h2>
      </div>
      <ContactForm />
    </div>
  );
};

export const ContactForm = () => {
  const socialMedia = [
    {
      icon: <Twitter fontSize="small" />,
      link: "#",
    },
    {
      icon: <Facebook fontSize="small" />,
      link: "#",
    },
    {
      icon: <Instagram fontSize="small" />,
      link: "#",
    },
    {
      icon: <LinkedIn fontSize="small" />,
      link: "#",
    },
    {
      icon: <img width={15} src={vimeoIcon} alt="vimeo-fute" />,
      link: "#",
    },
  ];

  return (
    <div className={style.content}>
      {/* <h6 className={style.heading}>COLLABORATE</h6> */}
      <p className={style.para}>WANT TO WORK WITH US? CONNECT NOW</p>
      <div className={style.details}>
        <span>
          <CallIcon /> <a href="tel:+916362396806">+91 63623 96806</a>
        </span>
        <span style={{ cursor: "pointer" }}>
          <MailIcon />{" "}
          <a
            style={{ cursor: "pointer" }}
            href="mailto:marketing@futeservices.com"
          >
            marketing@futeservices.com
          </a>
        </span>
      </div>
      {/* <div className={style.socialLinks}>
        <ul>
          {socialMedia.map((data, index) => (
            <li key={index}>
              <a href={data.link}>{data.icon}</a>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Contact;
