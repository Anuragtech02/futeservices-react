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
      ></div>
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
      <div className={style.floatLeft}>
        <h6 className={style.heading}>COLLABORATE</h6>
        <p className={style.para}>WANT TO WORK WITH US? LEAVE US A MESSAGE!</p>
        <div>
          <ul>
            {socialMedia.map((data, index) => (
              <li key={index}>
                <a href={data.link}>{data.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.floatRight}>
        <form>
          <textarea
            rows="10"
            col="40"
            name="message"
            placeholder="Enter Your Message"
          />
          <br />
          <div className={style.flex}>
            <input name="name" type="text" placeholder="Your Name" />
            <input name="email" type="email" placeholder="Your Email" />
          </div>
          <button
            style={{ opacity: 1 }}
            className={style.btnDrakFilled}
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
