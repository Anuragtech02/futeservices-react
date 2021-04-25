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

const PortfolioInside = () => {
  const { category } = useParams();
  const [current, setCurrent] = useState({});

  const [capName, setCapName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category && category.length) {
      const portfolio =
        PortfolioData.find(
          (item) => item?.category?.toLowerCase() === category.toLowerCase()
        ) ?? {};
      // console.log({ portfolio });
      setCurrent(portfolio);
      setCapName(capitalize(portfolio.name ?? category));
    }
  }, [category]);

  const capitalize = (str = "portfolio") => {
    return str
      .toString()
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1, item.length))
      .join(" ");
  };

  return (
    <div className={styles.container}>
      <MetaTags
        title={current.name ?? category + " - Portfolio"}
        type="other"
      />

      <Banner image={current?.image ?? bg} title={current.name ?? category} />

      <section className={styles.types}>
        {[0, 1, 2].map((item) => (
          <CategoryComponent
            current={current}
            dir={item % 2 ? "right" : "left"}
          />
        ))}
      </section>
    </div>
  );
};

export default PortfolioInside;

const CategoryComponent = ({ current, dir }) => {
  return (
    <div
      className={classNames(styles.row, dir === "right" ? styles.rowRight : "")}
    >
      <div className={styles.content}>
        <h2>Walkthrough</h2>
        <p>
          Add a touch of glamor to your marketing needs with our 3D and
          cinematic walkthroughs. An experience that is so real, your prospects
          will feel like they are actually present at the project site, aided by
          seamless camera movements, intricate design and detailing, and the
          perfect lighting and scene setting. Our methodology ensures that your
          audiences experience the best in architectural visualization with
          engaging and immersive tours of the entire property seen through a
          creative eye.
        </p>
        <div className={styles.nextBtn} variant="text">
          <Link to="/">Portfolio</Link>
          <ArrowForwardIcon fontSize="small" />
        </div>
      </div>
      <LazyLoadImage
        src={current?.images?.[0]?.src ?? bg}
        alt={current?.images?.[0]?.title ?? "fute"}
      />
    </div>
  );
};

const data = [
  {
    title: "walkthrough",
    message:
      "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
  },
  {
    title: "walkthrough",
    message:
      "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
  },
  {
    title: "walkthrough",
    message:
      "Add a touch of glamor to your marketing needs with our 3D and cinematic walkthroughs. An experience that is so real, your prospects will feel like they are actually present at the project site, aided by seamless camera movements, intricate design and detailing, and the perfect lighting and scene setting. Our methodology ensures that your audiences experience the best in architectural visualization with engaging and immersive tours of the entire property seen through a creative eye.",
  },
];
