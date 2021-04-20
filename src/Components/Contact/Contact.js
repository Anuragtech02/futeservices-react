import React from "react";
import style from "./Contact.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";

export const Contact = () => {
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
    </div>
  );
};

export default Contact;
