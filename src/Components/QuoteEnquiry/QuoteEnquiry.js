import React from "react";
import style from "./QuoteEnquiry.module.css";
import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import cat1 from "../../Assets/projects/cat1.webp";
import { Helmet } from "react-helmet";
import backImage from "../../Assets/back-img.jpg";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import bgImg from "../../Assets/fute-bg1.jpg";

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
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={style.bgImage}
      >
        <h1>Get Quote</h1>
      </div>
      {/* <div className={style.beginning}>
        <h4>This could be the beginning of a very visual relationship . . .</h4>
        <p>
          With over 12 years industry experience, we know that all visualisation
          projects and client budgets are not equal . . . as such Fute Services
          now offers 3 very unique services to suit any budget . . . each level
          we offer varies greatly . . . and reflects the amount of design time
          and design effort we put into 3d landscaping, 3d entourage and 3d
          styling . . . in other words when it comes to the world of 3d . . .
          you really do get what you really do pay for !
        </p>
      </div> */}
      <QuoteEnquiryForm />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    background: "#f3f3f3",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "10px 0",
  },
  inputField: {
    textAlign: "left",
    "&::before": {
      display: "none",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const QuoteEnquiryForm = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={style.content}>
      <Helmet>
        <title>Get Quote | FuteServices</title>
        <meta
          name="description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta name="name" content="Get Quote | FuteServices" />
        <meta property="og:title" content="Get Quote | FuteServices" />
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
            <h6 className={style.heading}>
              Get <span>Quote</span>
            </h6>
            <p className={style.para}>
              Fute Services would love to hear from you and any project enquiry
              you may have... so don't be a stranger drop us a line by filling
              in this form... or upload your files to our dropbox folder.
            </p>
            <div className={style.contact}>
              <div className={style.phone}>
                <span>
                  <CallIcon /> <h3>Phone</h3>
                </span>
                <a href="tel:+916362396806">+91 63623 96806</a>
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
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={12}>
          <form className={style.formContainer}>
            <div className={style.nameEmail}>
              <input required name="name" type="text" placeholder="Your Name" />
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
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="category-input">Category</InputLabel>
              <Select
                className={classes.inputField}
                labelId="category-input"
                value={category}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default QuoteEnquiry;
