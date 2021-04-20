import React from "react";
import style from "./Contact.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Helmet } from "react-helmet";
import logo from "../../Assets/logo.png";

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
      <Helmet>
        <title>Contact | FuteServices</title>
        <meta
          name="description"
          content="Our home base is situated in Bengaluru, with branches in Mumbai, Hyderabad,
            & Dubai. We are immensely proud to provide all our services in-house with the
            added access to our Prague modeling studios time zones, allowing a fast and
            reliable 24/7 service for our local as well as international clients."
        />
        <meta name="name" content="Contact | FuteServices" />
        <meta property="og:title" content="Contact | FuteServices" />
        <meta
          property="og:description"
          content="Our home base is situated in Bengaluru, with branches in Mumbai, Hyderabad,
            & Dubai. We are immensely proud to provide all our services in-house with the
            added access to our Prague modeling studios time zones, allowing a fast and
            reliable 24/7 service for our local as well as international clients."
        />
        <meta
          property="og:image"
          content={"https://tech.feedbox.co.in/" + logo}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://tech.feedbox.co.in/"} />
        <meta property="twitter:title" content="Contact | FuteServices" />
        <meta
          property="twitter:description"
          content="Our home base is situated in Bengaluru, with branches in Mumbai, Hyderabad,
            & Dubai. We are immensely proud to provide all our services in-house with the
            added access to our Prague modeling studios time zones, allowing a fast and
            reliable 24/7 service for our local as well as international clients."
        />
        <meta
          property="twitter:image"
          content={"https://tech.feedbox.co.in/" + logo}
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
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
