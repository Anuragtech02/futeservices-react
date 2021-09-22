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
import runwalOriginal from "../../Assets/runwal-image-original.jpg";
import droneShoot from "../../Assets/drone-shoot.jpg";
import floorplan from "../../Assets/categories/3d-floorplan.jpg";
import scaleModel from "../../Assets/categories/scale-model.jpg";

import fPlan from "../../Assets/categories/hogar-iso.png";
import scModel from "../../Assets/categories/scale-model-th.png";

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
      <MetaTags title="What We Do" type="other" />

      <Banner image={bg} title="What We Do" />

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
        <img src={item?.image ?? bg} alt={item?.title ?? "fute"} />
      )}
    </div>
  );
};

const data = [
  {
    title: "walkthrough",
    link: "runwal-nirvana",
    image: walkthrough,
    video: "",
    desc: "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
  },
  {
    title: "3D Views & Renders",
    // link: {
    //   interior: "3d-rendering-interior",
    //   exterior: "3d-rendering-exterior",
    // },
    link: "category/residential",
    image: runwalOriginal,
    desc: "Your brochures, banners, advertisements, and other marketing collaterals will jazz up with our ultra realistic 3D renders that hit the mark right. Precision crafted views, with the minutest of details taken care of and accentuated with super realistic props and vegetation alongwith the perfect mood setting with lighting effects that take photorealism to the next level.",
  },
  {
    title: "VR/AR/360° Panaroma",
    link: "category/vr360",
    image: panaroma,
    desc: "This is the future of marketing and we take the lead when it comes to providing your audiences with engagements such as these that elevate your brand name and solidify your presence in the real estate space. With our interactive AR, VR and 360° Panaroma, let us help you transport your audiences right to the heart and soul of the property with realistic imagery, animation, sounds and sound effects, and the breathtaking feeling of aactually being at a place that is yet to be built. ",
  },
  {
    title: "3d Floorplan",
    link: "3d-2d-floorplan",
    image: fPlan,
    desc: "3D Floor plans provides the ability to visualize the interior of a residential house, apartment with furtnitire layout, floor coverings, wall textures, color schemes to be utilized for a better look to the interior of the architectural construction. With the technology advancements, the use of 3-dimensional perspectives has increased to a great extent. 3D floor plans allow some one who has no experience in reading plans and it takes much of the guesswork out of sales process and leasing of property.",
  },
  {
    title: "3d Scale Model",
    link: "category/scale-model",
    image: scModel,
    desc: "Scale up your brand presence with our state of the art scale models that push the limits towards excellence. Leave your audiences impressed with our accurately designed scale models that mimic every aspect of the project in its truest form, scaled down to a miniature version that makes you explore the project in its entirety but without the hassle of travelling floors to do the same at the actual site.",
  },
  {
    title: "Drone Shoot",
    link: "drone-shoot",
    image: droneShoot,
    desc: "Every great projects needs an even greater location story. That’s where we pitch in to devise and direct seamless drone shoots that make viewers acquainted with all the iconic routes to reach the project via live view of the approach roads and the fascinating infrastructure around it. We take immense pride to create drone shoot movies that not only show the way to the project but package it in a way that it is nothing less than extraordinary. ",
  },
  // {
  //   title: "Curtain Raisers",
  //   desc:
  //     "Your projects deserve a grand opening before its star-studded launch. Our Curtain Raisers are the perfect accompaniment to your projects, helping not just tease the project to your prospects but also do it in a fashion that it leaves the audiences amazed and craving for more. The curtain raisers are designed to create interest and spark a desire in your prospects and make them eager to wait for the unveiling of your projects in their complete glory.",
  // },
];
