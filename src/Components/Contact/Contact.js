import React from "react";
import style from "./Contact.module.css";
import cat1 from "../../Assets/projects/cat1.webp";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Helmet } from "react-helmet";
import { Button } from "@material-ui/core";
import logo from "../../Assets/logo.png";
import map from "../../Assets/map.webp";
import Dropzone from "react-dropzone";

export const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
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

      <ContactForm />
    </div>
  );
};

export const ContactForm = () => {
  const [fileName, setFileName] = React.useState(null);
  const [file, setFile] = React.useState(null);

  React.useEffect(() => {
    if (file) {
      setFileName(file.name);
    }
  }, [file]);

  const onSubmit = (e) => {
    e.preventDefault();
    setFile(null);
    setFileName(null);
  };

  return (
    <div className={style.content}>
      {/* <h6 className={style.heading}>COLLABORATE</h6> */}
      <p className={style.para}>Contact Us</p>
      <p className={style.contentPara}>
        Our home base is situated in Bengaluru, with branches in Mumbai,
        Hyderabad, & Dubai. We are immensely proud to provide all our services
        in-house with the added access to our Prague modeling studios time
        zones, allowing a fast and reliable 24/7 service for our local as well
        as international clients.
      </p>
      <div className={style.details}>
        <span style={{ cursor: "pointer" }}>
          For all project enquiries please email at
          <a
            style={{ cursor: "pointer" }}
            href="mailto:marketing@futeservices.com"
          >
            marketing@futeservices.com
          </a>
        </span>
        <span>
          For all job or employment enquiries please email{" "}
          <a style={{ cursor: "pointer" }} href="mailto:hr@futeservices.com">
            hr@futeservices.com
          </a>
        </span>
        <span>
          <CallIcon /> <a href="tel:+916362396806">+91 63623 96806</a>
        </span>
      </div>
      <form onSubmit={onSubmit}>
        <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className={style.fileInput}>
                <input {...getInputProps()} />
                <p>{fileName || "Click here or drag n drop a resume"}</p>
              </div>
            </section>
          )}
        </Dropzone>
        <Button type="submit" variant="text" className={style.submitBtn}>
          Submit
        </Button>
      </form>
      <img className={style.mapImage} src={map} alt="fute-bangaluru" />
    </div>
  );
};

export default Contact;
