import React from "react";
import style from "./QuoteEnquiry.module.css";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import cat1 from "../../Assets/projects/cat1.webp";

export const QuoteEnquiry = () => {
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
        <h2>Quote Enquiry</h2>
      </div>
      <QuoteEnquiryForm />
    </div>
  );
};

const QuoteEnquiryForm = () => {
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
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <div className={style.floatLeft}>
            <h6 className={style.heading}>Quote Enquiry</h6>
            <p className={style.para}>
              Fute Services would love to hear from you and any project enquiry
              you may have... so don't be a stranger drop us a line by filling
              in this form... or upload your files to our dropbox folder.
            </p>
            {/* <div>
              <ul>
                {socialMedia.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}>{data.icon}</a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={style.floatRight}>
            <form>
              <div className={style.flex}>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              {/* <div className={style.flex}> */}
              <input
                className={style.companyInput}
                name="company"
                type="text"
                placeholder="Your Company"
              />
              {/* </div> */}
              <textarea
                rows="5"
                col="40"
                name="message"
                placeholder="Enter Your Message"
              />
              <br />
              <button
                style={{ opacity: 1 }}
                className={style.btnDrakFilled}
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuoteEnquiry;
