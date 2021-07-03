import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";
import "./FilterPortfolio.css";
import Banner from "../Banner/Banner";
import MetaTags from "../MetaTags/MetaTags";
import bgImage2 from "../../Assets/fute-bg.jpg";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { portfolioData } from "../../Static/portfolioProjectWise";
import VerticalCard from "../VerticalCard/VerticalCard";

// import cat1Image1 from "../../Assets/projects/cat1/cat1-fute-1.webp";
// import cat1Image2 from "../../Assets/projects/cat1/cat1-fute-2.webp";
// import cat1Image3 from "../../Assets/projects/cat1/cat1-fute-3.webp";
// import cat1Image4 from "../../Assets/projects/cat1/cat1-fute-4.webp";
// import cat1Image5 from "../../Assets/projects/cat1/cat1-fute-5.webp";

// import cat2 from "../../Assets/projects/cat2.webp";
// import cat2Image1 from "../../Assets/projects/cat1/cat1-fute-6.webp";
// import cat2Image2 from "../../Assets/projects/cat1/cat1-fute-7.webp";
// import cat2Image3 from "../../Assets/projects/cat1/cat1-fute-8.webp";
// import cat2Image4 from "../../Assets/projects/cat1/cat1-fute-9.webp";
// import cat2Image5 from "../../Assets/projects/cat1/cat1-fute-10.webp";

// import cat4 from "../../Assets/projects/cat4.webp";
// import cat3Image1 from "../../Assets/projects/cat1/cat1-fute-11.webp";
// import cat3Image2 from "../../Assets/projects/cat1/cat1-fute-12.webp";
// import cat3Image3 from "../../Assets/projects/cat1/cat1-fute-13.webp";
// import cat3Image4 from "../../Assets/projects/cat1/cat1-fute-14.webp";
// import cat3Image5 from "../../Assets/projects/cat1/cat1-fute-15.webp";
// import VerticalCard from "../VerticalCard/VerticalCard";

// const images = [
//   {
//     title: "Project 1",
//     category: "interior",
//     src: cat1Image1,
//     image: cat1Image1,
//   },
//   {
//     title: "Project 2",
//     category: "interior",
//     src: cat1Image2,
//     image: cat1Image2,
//   },
//   {
//     title: "Project 3",
//     category: "interior",
//     src: cat1Image3,
//     image: cat1Image3,
//   },
//   {
//     title: "Project 1",
//     category: "exterior",
//     src: cat2Image2,
//     image: cat2Image2,
//   },
//   {
//     title: "Project 2",
//     category: "exterior",
//     src: cat2Image1,
//     image: cat2Image1,
//   },
//   {
//     title: "Project 3",
//     category: "exterior",
//     src: cat2Image3,
//     image: cat2Image3,
//   },
//   {
//     title: "Project 1",
//     category: "vr",
//     src: cat3Image1,
//     image: cat3Image1,
//   },
//   {
//     title: "Project 2",
//     category: "vr",
//     src: cat3Image2,
//     image: cat3Image2,
//   },
//   {
//     title: "Project 3",
//     category: "vr",
//     src: cat3Image3,
//     image: cat3Image3,
//   },
// ];

const filterMenu = [
  // {
  //   name: "All",
  //   link: "*",
  //   dataFilter: "*",
  // },
  {
    name: "Residential",
    link: "residential",
    dataFilter: "residential",
  },
  {
    name: "Commercial",
    link: "commercial",
    dataFilter: "commercial",
  },
  {
    name: "Walkthrough",
    link: "walkthrough",
    dataFilter: "walkthrough",
  },
  {
    name: "360 & VR",
    link: "vr360",
    dataFilter: "vr360",
  },
  {
    name: "Scale Model",
    link: "scale-model",
    dataFilter: "scale-model",
  },
  {
    name: "3D Floor Plan",
    link: "floor-plan",
    dataFilter: "floor-plan",
  },
  {
    name: "Drone & Chroma Shoot",
    link: "drone",
    dataFilter: "drone",
  },
];

const FilterPortfolio = () => {
  const isoRef = useRef(null);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("walkthrough");
  const totalImages = portfolioData.length;
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [startIndexModal, setStartIndexModal] = useState(null);

  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  useEffect(() => {
    // if (count === totalImages) {
    //   if (loading) setLoading(false);
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
    // }
  }, [isotope, count, totalImages]);

  useEffect(() => {
    setModalImages(portfolioData.map((image) => image.image));
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: "*" })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <MetaTags title="Portfolio" type="other" />
      <Banner image={bgImage2} title="Portfolio" />
      <div className="portfolio-menu">
        <ul>
          {filterMenu.map((item) => (
            <li
              onClick={() => onClickMenu(item.link)}
              className={filterKey === item.dataFilter ? "is-selected" : ""}
              data-filter={`.${item.dataFilter}`}
            >
              {item.name}
            </li>
          ))}
          {/* <li
            onClick={() => onClickMenu("*")}
            className={filterKey === "*" ? "is-selected" : ""}
            data-filter="*"
          >
            All
          </li>
          <li
            onClick={() => onClickMenu("interior")}
            className={filterKey === "interior" ? "is-selected" : ""}
            data-filter=".interior"
          >
            Interior
          </li>
          <li
            onClick={() => onClickMenu("exterior")}
            className={filterKey === "exterior" ? "is-selected" : ""}
            data-filter=".exterior"
          >
            Exterior
          </li>

          <li
            onClick={() => onClickMenu("vr")}
            className={filterKey === "vr" ? "is-selected" : ""}
            data-filter=".vr"
          >
            Immersive VR/360
          </li> */}
        </ul>
      </div>
      <div ref={isoRef} className="grid gallery">
        <div className="grid-sizer"></div>
        {portfolioData.map((image, i) => {
          return (
            <div
              key={`${image.category + i}`}
              className={`grid-item ${image.category?.toLowerCase()}`}
            >
              {image?.external ? (
                <VerticalCard
                  // onClick={() => {
                  //   setStartIndexModal(i);
                  //   //   setCurrImage(project.image || project.src);
                  //   console.log("Clicked");
                  // }}
                  onLoad={() => {
                    setCount((curr) => curr + 1);
                  }}
                  type="inner"
                  item={image}
                />
              ) : (
                <Link to={`/portfolio/${image.link}`}>
                  <VerticalCard
                    // onClick={() => {
                    //   setStartIndexModal(i);
                    //   //   setCurrImage(project.image || project.src);
                    //   console.log("Clicked");
                    // }}
                    onLoad={() => {
                      setCount((curr) => curr + 1);
                    }}
                    type="inner"
                    item={image}
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
      {startIndexModal !== null && (
        <div className="image-modal">
          <Lightbox
            images={modalImages}
            startIndex={startIndexModal}
            onClose={() => setStartIndexModal(null)}
          />
        </div>
      )}
    </>
  );
};

export default FilterPortfolio;
