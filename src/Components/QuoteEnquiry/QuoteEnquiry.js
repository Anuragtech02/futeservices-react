import React from "react";
import style from "./QuoteEnquiry.module.css";
import { Grid } from "@material-ui/core";
import cat1 from "../../Assets/projects/cat1.webp";
import { Helmet } from "react-helmet";

export const QuoteEnquiry = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.container}>
      {/* <div
        style={{ backgroundImage: `url(${cat1})` }}
        className={style.bgImage}
      >
        <h2>Quote Enquiry</h2>
      </div> */}
      <div className={style.beginning}>
        <h4>This could be the beginning of a very visual relationship . . .</h4>
        <p>
          with over 20 years industry experience, we know that all visualisation
          projects and client budgets are not equal . . . as such atomic 3d now
          offers 3 very unique services to suit any budget . . . each level we
          offer varies greatly . . . and reflects the amount of design time and
          design effort we put into 3d landscaping, 3d entourage and 3d styling
          . . . in other words when it comes to the world of 3d . . . you really
          do get what you really do pay for !
        </p>
      </div>
      <QuoteEnquiryForm />
    </div>
  );
};

const QuoteEnquiryForm = () => {
  return (
    <div className={style.content}>
      <Helmet>
        <title>Quote Enquiry | Portfolio</title>
        <meta
          name="description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta name="name" content="Quote Enquiry | FuteServices" />
        <meta property="og:title" content="Quote Enquiry | FuteServices" />
        <meta
          property="og:description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta
          property="og:image"
          content={"https://tech.feedbox.co.in/" + cat1}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://tech.feedbox.co.in/"} />
        <meta property="twitter:title" content="Contact | FuteServices" />
        <meta
          property="twitter:description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta
          property="twitter:image"
          content={"https://tech.feedbox.co.in/" + cat1}
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <div className={style.floatLeft}>
            <h6 className={style.heading}>Quote Enquiry</h6>
            <p className={style.para}>
              Fute Services would love to hear from you and any project enquiry
              you may have... so don't be a stranger drop us a line by filling
              in this form... or upload your files to our dropbox folder.
            </p>
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
