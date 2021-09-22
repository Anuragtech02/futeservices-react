import React from "react";
import style from "./Contact.module.css";
import CallIcon from "@material-ui/icons/Call";
import { Helmet } from "react-helmet";
import { Button, Grid } from "@material-ui/core";
import logo from "../../Assets/logo.png";
import map from "../../Assets/fute-map.png";
import map2 from "../../Assets/fute-map.webp";
import Dropzone from "react-dropzone";
import backImg from "../../Assets/back-image.jpg";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Banner from "../Banner/Banner";
import MetaTags from "../MetaTags/MetaTags";

export const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.container}>
      <MetaTags title="Contact Us" type="contact" />
      <Banner image={backImg} title="Contact Us" />
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
      <Grid container spacing={0}>
        <Grid item md={6} sm={12}>
          <div className={style.mapImage}>
            <img src={map2} srcSet={map} alt="fute-location" />
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <div className={style.contactDetails}>
            <p>
              {" "}
              Our home base is situated in Bengaluru, with branches in Mumbai,
              Hyderabad, & Dubai. We are immensely proud to provide all our
              services in-house with the added access to our Prague modeling
              studios time zones, allowing a fast and reliable 24/7 service for
              our local as well as international clients.
            </p>
            <div className={style.phone}>
              <span>
                <CallIcon /> <h3>Phone</h3>
              </span>
              <a href="tel:+916362396806">+91 63623 96806</a>
              <a href="tel:+919742223928">+91 97422 23928</a>
            </div>
            <div className={style.email}>
              <span>
                <EmailIcon /> <h3>Email</h3>
              </span>
              <span>
                <a
                  style={{ cursor: "pointer" }}
                  href="mailto:marketing@futeservices.com"
                >
                  marketing@futeservices.com
                </a>
              </span>
            </div>
            <div className={style.addresses}>
              <span>
                <LocationOnIcon /> <h3>Addresses</h3>
              </span>
              <ul>
                <li>Bengaluru (Head Office)</li>
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>Hyderabad</li>
                <li>Dubai</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
      <section className={style.career}>
        <h2>Career</h2>
        {/* <Grid container spacing={2}>
          <Grid item md={8} sm={12}> */}
        <p>
          We are looking for professionals with extensive experience in
          architectural visualization and 3D animation. He/She should have
          extensive knowledge of 3D Studio Max & Photoshop. If you are
          interested in working with us, send us your CV with some examples of
          your work to <span> hr@futeservices.com</span> or upload your resume
          here.
        </p>
        {/* </Grid>
          <Grid item md={4} sm={12}> */}
        <form onSubmit={onSubmit}>
          <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} className={style.fileInput}>
                  <input {...getInputProps()} />
                  {/* <DescriptionIcon fontSize="large" /> */}
                  <p>{fileName || "Upload your resume"}</p>
                </div>
              </section>
            )}
          </Dropzone>
          <Button type="submit" variant="text" className={style.submitBtn}>
            Submit
          </Button>
        </form>
        {/* </Grid>
        </Grid> */}
      </section>
      {/* <h6 className={style.heading}>COLLABORATE</h6> */}
      {/* <p className={style.para}>Contact Us</p>
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
      <img className={style.mapImage} src={map} alt="fute-bangaluru" /> */}
    </div>
  );
};

export default Contact;
