import React, { useRef, useState, useEffect } from "react";
import "./Portfolio.css";
import bgImage from "../../Assets/back-img.jpg";
import Isotope from "isotope-layout";
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

const Portfolio = () => {
  const isoRef = useRef(null);

  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

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

  useEffect(() => {
    if (isotope) {
      isotope.reloadItems();
    } else {
      setIsotope(
        new Isotope(isoRef.current, {
          itemSelector: ".grid-item",
          // percentPosition: true,
          layoutMode: "masonry",
          masonry: {
            columnWidth: ".grid-sizer",
          },
        })
      );
    }
  }, [isotope]);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: "*" })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="container">
      <div className="bgImage" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1>Portfolio</h1>
      </div>
      <section className={"portfolio"}>
        {/* <div onClick={closeModal} className={`modal ${modalClass}`}>
        <Modal images={images} open={modalOpen} image={modalImage} />
      </div> */}
        <div className="portfolio-menu">
          <ul>
            <li
              onClick={() => onClickMenu("*")}
              className={filterKey === "*" ? "is-selected" : ""}
              data-filter="*"
            >
              All
            </li>
            <li
              onClick={() => onClickMenu("exterior")}
              className={filterKey === "exterior" ? "is-selected" : ""}
              data-filter=".exterior"
            >
              Exterior
            </li>
            <li
              onClick={() => onClickMenu("interior")}
              className={filterKey === "interior" ? "is-selected" : ""}
              data-filter=".interior"
            >
              Interior
            </li>

            <li
              onClick={() => onClickMenu("immersive-vr")}
              className={filterKey === "immersive-vr" ? "is-selected" : ""}
              data-filter=".immersive-vr"
            >
              Immersive VR
            </li>
          </ul>
        </div>
        <div ref={isoRef} className="grid gallery">
          <div className="grid-sizer"></div>
          {images.map((image, i) => {
            return (
              <div
                //   onClick={() => {
                //     image.category === "vr" ? openVr(image) : openModal(image);
                //   }}
                key={`${image.category + i}`}
                className={`grid-item ${image.category.toLowerCase()}`}
              >
                <img
                  src={image.src}
                  // onLoad={() => {
                  //   setCount((curr) => curr + 1);
                  // }}
                  alt={image.title}
                  //   style={{
                  //     opacity:
                  //       image.category === "animation" || image.category === "vr"
                  //         ? "0.7"
                  //         : "1",
                  //   }}
                />
                <div className="title">
                  <h4>{image.title}</h4>
                </div>
                {/* {image.category === "animation" ? (
                  <div className="type-icon play-icon">
                    <i className="fas fa-play" />
                  </div>
                ) : image.category === "vr" ? (
                  <div className="type-icon">
                    <i className="fas fa-vr-cardboard" />
                  </div>
                ) : null} */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
