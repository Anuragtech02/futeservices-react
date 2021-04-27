import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import styles from "./PortfolioInside.module.css";
import bg from "../../Assets/fute-bg.jpg";
import { Link, useParams } from "react-router-dom";
import { PortfolioData } from "../../Static/PortfolioData";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MetaTags from "../MetaTags/MetaTags";

import walkthrough from "../../Assets/projects/walkthrough/banner.jpg";
import exterior from "../../Assets/projects/exterior/banner.jpg";
import panaroma from "../../Assets/projects/ar-vr-360/banner.jpg";

const PortfolioInside = () => {
  // const { category } = useParams();
  // const [current, setCurrent] = useState({});

  // const [capName, setCapName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (category && category.length) {
    //   const portfolio =
    //     PortfolioData.find(
    //       (item) => item?.category?.toLowerCase() === category.toLowerCase()
    //     ) ?? {};
    //   // console.log({ portfolio });
    //   setCurrent(portfolio);
    //   setCapName(capitalize(portfolio.name ?? category));
    // }
  }, []);

  // const capitalize = (str = "portfolio") => {
  //   return str
  //     .toString()
  //     .split(" ")
  //     .map((item) => item.charAt(0).toUpperCase() + item.slice(1, item.length))
  //     .join(" ");
  // };

  return (
    <div className={styles.container}>
      <MetaTags title="Portfolio" type="other" />

      <Banner image={bg} title="Portfolio" />

      <section className={styles.types}>
        {data.map((item, i) => (
          <CategoryComponent dir={i % 2 ? "right" : "left"} item={item} />
        ))}
      </section>
    </div>
  );
};

export default PortfolioInside;

const CategoryComponent = ({ item, dir }) => {
  return (
    <div
      className={classNames(styles.row, dir === "right" ? styles.rowRight : "")}
    >
      <div className={styles.content}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        {item.title === "3D Rendering" ? (
          <div className={styles.renderingBtns}>
            <div className={styles.nextBtn} variant="text">
              <Link to={"/portfolio/" + item.link.interior}>Interior</Link>
              <ArrowForwardIcon fontSize="small" />
            </div>
            <div className={styles.nextBtn} variant="text">
              <Link to={"/portfolio/" + item.link.exterior}>Exterior</Link>
              <ArrowForwardIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <div className={styles.nextBtn} variant="text">
            <Link to={"/portfolio/" + item.link}>Portfolio</Link>
            <ArrowForwardIcon fontSize="small" />
          </div>
        )}
      </div>
      {item.type === "video" ? (
        <video src={item?.video}></video>
      ) : (
        <LazyLoadImage src={item?.image ?? bg} alt={item?.title ?? "fute"} />
      )}
    </div>
  );
};

const data = [
  {
    title: "walkthrough",
    link: "walkthrough",
    image: walkthrough,
    video: "",
    desc:
      "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
  },
  {
    title: "3D Rendering",
    link: {
      interior: "3d-rendering-interior",
      exterior: "3d-rendering-exterior",
    },
    image: exterior,
    desc:
      "Your brochures, banners, advertisements, and other marketing collaterals will jazz up with our ultra realistic 3D renders that hit the mark right. Precision crafted views, with the minutest of details taken care of and accentuated with super realistic props and vegetation alongwith the perfect mood setting with lighting effects that take photorealism to the next level. What’s more, all our views are aligned to the specific needs and requirements of the agencies we work with, ensuring we deliver out of the world visualizations that are set to take your audience’s breath away.",
  },
  {
    title: "VR/AR/360° Panaroma",
    link: "ar-vr-panaroma",
    image: panaroma,
    desc:
      "This is the future of marketing and we take the lead when it comes to providing your audiences with engagements such as these that elevate your brand name and solidify your presence in the real estate space. With our interactive AR, VR and 360° Panaroma, let us help you transport your audiences right to the heart and soul of the property with realistic imagery, animation, sounds and sound effects, and the breathtaking feeling of aactually being at a place that is yet to be built. ",
  },
  // {
  //   title: "Curtain Raisers",
  //   desc:
  //     "Your projects deserve a grand opening before its star-studded launch. Our Curtain Raisers are the perfect accompaniment to your projects, helping not just tease the project to your prospects but also do it in a fashion that it leaves the audiences amazed and craving for more. The curtain raisers are designed to create interest and spark a desire in your prospects and make them eager to wait for the unveiling of your projects in their complete glory.",
  // },
];
