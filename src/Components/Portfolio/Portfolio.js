import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import bgImage from "../../Assets/back-img.jpg";
import bgImage2 from "../../Assets/fute-bg.jpg";
// import Isotope from "isotope-layout";
import cat1Image1 from "../../Assets/projects/cat1/cat1-fute-1.webp";
import cat1Image2 from "../../Assets/projects/cat1/cat1-fute-2.webp";
import cat1Image3 from "../../Assets/projects/cat1/cat1-fute-3.webp";
import cat1Image4 from "../../Assets/projects/cat1/cat1-fute-4.webp";
import cat1Image5 from "../../Assets/projects/cat1/cat1-fute-5.webp";

import cat2 from "../../Assets/projects/cat2.webp";
import cat2Image1 from "../../Assets/projects/cat1/cat1-fute-6.webp";
import cat2Image2 from "../../Assets/projects/cat1/cat1-fute-7.webp";
import cat2Image3 from "../../Assets/projects/cat1/cat1-fute-8.webp";
import cat2Image4 from "../../Assets/projects/cat1/cat1-fute-9.webp";
import cat2Image5 from "../../Assets/projects/cat1/cat1-fute-10.webp";

import cat4 from "../../Assets/projects/cat4.webp";
import cat3Image1 from "../../Assets/projects/cat1/cat1-fute-11.webp";
import cat3Image2 from "../../Assets/projects/cat1/cat1-fute-12.webp";
import cat3Image3 from "../../Assets/projects/cat1/cat1-fute-13.webp";
import cat3Image4 from "../../Assets/projects/cat1/cat1-fute-14.webp";
import cat3Image5 from "../../Assets/projects/cat1/cat1-fute-15.webp";
import { Grid } from "@material-ui/core";
import VerticalCard from "../VerticalCard/VerticalCard";
import Banner from "../Banner/Banner";
import MetaTags from "../MetaTags/MetaTags";
import { useParams } from "react-router-dom";
import { portfolio as pData } from "../../Static/portfolio";

const Portfolio = () => {
  // const isoRef = useRef(null);

  // const onClickMenu = (item) => {
  //   setFilterKey(item);
  // };

  // const [isotope, setIsotope] = useState(null);
  // const [filterKey, setFilterKey] = useState("*");

  const { category } = useParams();
  const [current, setCurrent] = useState({});

  const [capName, setCapName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (category && category.length) {
      const portfolio =
        pData.find(
          (item) => item?.name?.toLowerCase() === category.toLowerCase()
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

  const images = [
    {
      title: "Project 1",
      category: "Interior",
      src: cat1Image1,
    },
    {
      title: "Project 2",
      category: "Interior",
      src: cat1Image2,
    },
    {
      title: "Project 3",
      category: "Interior",
      src: cat1Image3,
    },
    {
      title: "Project 1",
      category: "Exterior",
      src: cat2Image2,
    },
    {
      title: "Project 2",
      category: "Exterior",
      src: cat2Image1,
    },
    {
      title: "Project 3",
      category: "Exterior",
      src: cat2Image3,
    },
    {
      title: "Project 1",
      category: "Immersive-VR",
      src: cat3Image1,
    },
    {
      title: "Project 2",
      category: "Immersive-VR",
      src: cat3Image2,
    },
    {
      title: "Project 3",
      category: "Immersive-VR",
      src: cat3Image3,
    },
  ];

  return (
    <div className="container">
      <MetaTags title="Portfolio" type="other" />
      <Banner
        image={bgImage2}
        title={current?.title || category || "Portfolio"}
      />
      <section className={"portfolio"}>
        <Grid container spacing={0}>
          {current?.projects?.map((project, i) => (
            <Grid item key={i} xl={6} lg={6} md={6} sm={12} xs={12}>
              <VerticalCard type="inner" item={project} />
            </Grid>
          ))}
        </Grid>
      </section>
    </div>
  );
};

export default Portfolio;
