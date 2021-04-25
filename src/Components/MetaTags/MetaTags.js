import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../Assets/logo.png";

const BASE_URL = "https://tech.feedbox.co.in/";

const MetaTags = ({ title, type, image }) => {
  return (
    <Helmet>
      <title>{title} | FuteServices</title>
      <meta name="description" content={data[type]} />
      <meta name="name" content={`${title} | FuteServices`} />
      {/* General OG Tags */}
      <meta property="og:title" content={`${title} | FuteServices`} />
      <meta property="og:description" content={data[type]} />
      <meta property="og:image" content={image || BASE_URL + logo} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={BASE_URL} />
      <meta property="twitter:title" content={`${title} | FuteServices`} />
      <meta property="twitter:description" content={data[type]} />
      <meta property="twitter:image" content={image || BASE_URL + logo}></meta>

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
};

export default MetaTags;

const data = {
  contact:
    "Our home base is situated in Bengaluru, with branches in Mumbai, Hyderabad, & Dubai. We are immensely proud to provide all our services in-house with the added access to our Prague modeling studios time zones, allowing a fast and reliable 24/7 service for our local as well as international clients.",
  other:
    "Ever since our inception, Fute Services has been proactive in delivering a mesmerizingly cinematic experience to our audiences, creating breathtaking architectural imagery perfected to the minutest of details. This philosophy helps us not just enhance the viewing experience but engross audiences while they actually feel physically present at the location themselves.",
};
