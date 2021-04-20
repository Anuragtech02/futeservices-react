import React, { useState } from "react";
import styles from "./Services.module.css";
import { Grid } from "@material-ui/core";
import cat1 from "../../Assets/projects/cat1.webp";
import droneIcon from "../../Assets/services-icon/camera-drone.svg";
import curtainIcon from "../../Assets/services-icon/curtains.svg";
import arIcon from "../../Assets/services-icon/360.svg";
import scaleIcon from "../../Assets/services-icon/scale.svg";
import cinemaIcon from "../../Assets/services-icon/clapperboard.svg";
import mobileIcon from "../../Assets/services-icon/mobile.svg";

import image1 from "../../Assets/services/image1-fute.webp";
import image2 from "../../Assets/services/image2-fute.webp";
import image3 from "../../Assets/services/image3-fute.webp";
import image4 from "../../Assets/services/image4-fute.webp";
import { Helmet } from "react-helmet";

const Services = () => {
  const data = [
    {
      title: "DRONE SHOOT",
      icon: droneIcon,
      description:
        "Every great projects needs an even greater location story. That’s where we pitch in to devise and direct seamless drone shoots that make viewers acquainted with all the iconic routes to reach the project via live view of the approach roads and the fascinating infrastructure around it. We take immense pride to create drone shoot movies that not only show the way to the project but package it in a way that it is nothing less than extraordinary.",
    },
    {
      title: "CURTAIN RAISERS",
      icon: curtainIcon,
      description:
        "Your projects deserve a grand opening before its star-studded launch. Our Curtain Raisers are the perfect accompaniment to your projects, helping not just tease the project to your prospects but also do it in a fashion that it leaves the audiences amazed and craving for more. The curtain raisers are designed to create interest and spark a desire in your prospects and make them eager to wait for the unveiling of your projects in their complete glory",
    },
    {
      title: "WALKTHROUGHS (3D+CINEMATIC)",
      icon: cinemaIcon,
      description:
        "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
    },
    {
      title: "3D VIEWS & RENDERS",
      icon: arIcon,
      description:
        "Your brochures, banners, advertisements, and other marketing collaterals will jazz up with our ultra realistic 3D renders that hit the mark right. Precision crafted views, with the minutest of details taken care of and accentuated with super realistic props and vegetation alongwith the perfect mood setting with lighting effects that take photorealism to the next level. What’s more, all our views are aligned to the specific needs and requirements of the agencies we work with, ensuring we deliver out of the world visualizations that are set to take your audience’s breath away.",
    },
    {
      title: "SCALE MODEL",
      icon: scaleIcon,
      description:
        "Scale up your brand presence with our state of the art scale models that push the limits towards excellence. Leave your audiences impressed with our accurately designed scale models that mimic every aspect of the project in its truest form, scaled down to a miniature version that makes you explore the project in its entirety but without the hassle of travelling floors to do the same at the actual site. Take your marketing skills to the highest level of fascination with our scales models and breathe new life to all your projects.",
    },
    {
      title: "INTERACTIVE AR & VR",
      icon: mobileIcon,
      description:
        "We create engaging and interactive platforms for your sales personnel to not just have an effective pitch, but at the same time bring a new dynamic to every sales presentation and pitch. With our interactive AR and VR, let us help you transport your audiences right to the heart and soul of the property, giving them virtual ours so enticing that they will forget they are with you and explore the project firsthand with realistic imagery, animation, sounds and sound effects, and the breathtaking feeling of aactually being at a place that is yet to be built. This is the future of marketing and we take the lead when it comes to providing your audiences with engagements such as these that elevate your brand name and solidify your presence in the real estate space.",
    },
  ];

  const gallery = [image1, image2, image3, image4];

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Services | FuteServices</title>
        <meta
          name="description"
          content="Our customized solutions approach ensures your project is the star of the show. We
            listen to your specific needs, your precise requirements, and your idea behind the
            conceptualization of your dream project. There onwards we masterfully use the
            technology and creative power in our hands to create and develop a show-stopping
            solutions for your brand, catering to and designed to your specific requirements and
            mimicking your dream in the most fascinating way possible."
        />
        <meta name="name" content="Services | FuteServices" />
        <meta property="og:title" content="Services | FuteServices" />
        <meta
          property="og:description"
          content="Our customized solutions approach ensures your project is the star of the show. We
            listen to your specific needs, your precise requirements, and your idea behind the
            conceptualization of your dream project. There onwards we masterfully use the
            technology and creative power in our hands to create and develop a show-stopping
            solutions for your brand, catering to and designed to your specific requirements and
            mimicking your dream in the most fascinating way possible."
        />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={"https://tech.feedbox.co.in/"} />
        <meta
          property="og:image"
          content={"https://tech.feedbox.co.in/" + image1}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://tech.feedbox.co.in/"} />
        <meta property="twitter:title" content="Services | FuteServices" />
        <meta
          property="twitter:description"
          content="Our customized solutions approach ensures your project is the star of the show. We listen to your specific needs, your precise requirements, and your idea behind the conceptualization of your dream project. There onwards we masterfully use the technology and creative power in our hands to create and develop a show-stopping solutions for your brand, catering to and designed to your specific requirements and mimicking your dream in the most fascinating way possible."
        />
        <meta
          property="twitter:image"
          content={"https://tech.feedbox.co.in/" + image1}
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <div
        style={{ backgroundImage: `url(${cat1})` }}
        className={styles.bgImage}
      >
        <h2>Our Services</h2>
      </div>
      <section className={styles.gallery}>
        <Grid container spacing={2}>
          {gallery.map((item, i) => (
            <Grid key={i} item lg={3} md={3} sm={6} xs={6}>
              <div className={styles.galleryImage}>
                <img src={item} alt="gallery-fute-services" />
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
      <div className={styles.services}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.title} item lg={4} md={6} sm={12} xs={12}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;

const Card = ({ item }) => {
  const { icon, title, description } = { ...item };
  const [more, setMore] = useState(false);

  return (
    <div className={styles.card}>
      <img src={icon} alt="icon-service-fute" />
      <h5>{title}</h5>
      <p>
        {!more ? description?.slice(0, 350) + "..." : description}{" "}
        <span onClick={() => setMore(!more)}>
          Read {more ? "Less" : "More"}
        </span>
      </p>
    </div>
  );
};
