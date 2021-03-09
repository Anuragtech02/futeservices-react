import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import style from "./Contact.module.css";
import cat1 from "../../Assets/category1.jpg";
import { Grid } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";

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
  ];

  return (
    <div className={style.content}>
      {/* <h6 className={style.heading}>COLLABORATE</h6> */}
      <p className={style.para}>WANT TO WORK WITH US? CONNECT NOW</p>
      <div className={style.details}>
        <span>
          <CallIcon /> <a href="tel:+919876543210">+91 9876543210</a>
        </span>
        <span>
          <MailIcon />{" "}
          <a href="mailto:contact@futeservices.com">contact@futeservices.com</a>
        </span>
      </div>
      <div className={style.socialLinks}>
        <ul>
          {socialMedia.map((data, index) => (
            <li key={index}>
              <a href={data.link}>{data.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
