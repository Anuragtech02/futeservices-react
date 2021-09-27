import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import Isotope from "isotope-layout";
import "./FilterPortfolio.css";
import Banner from "../Banner/Banner";
import MetaTags from "../MetaTags/MetaTags";
import bgImage2 from "../../Assets/fute-bg.jpg";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { portfolioData } from "../../Static/portfolioProjectWise";
import { portfolio as pData } from "../../Static/portfolio";
import VerticalCard from "../VerticalCard/VerticalCard";
import ModalVideo from "react-modal-video";

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
    // external: true,
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
    // external: true,
  },
  {
    name: "3D/2D Floor Plan",
    link: "floorplan",
    // external: true,
    dataFilter: "floorplan",
  },
  {
    name: "Drone & Chroma Shoot",
    link: "drone-shoot",
    dataFilter: "drone-shoot",
    // external: true,
  },
];

const FilterPortfolio = ({ history }) => {
  const isoRef = useRef(null);

  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("residential");
  const totalImages = portfolioData.length;
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [startIndexModal, setStartIndexModal] = useState(null);

  const [allImages, setAllImages] = useState([]);

  const [ytOpen, setYtOpen] = useState(false);
  const [currentYt, setCurrentYt] = useState("");

  const [current, setCurrent] = useState({});

  const { category } = useParams();

  const onClickMenu = (item) => {
    setFilterKey(item);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    // console.log({ pData });
  }, []);

  useEffect(() => {
    if (category?.length) {
      setFilterKey(category.toLowerCase());
    }
  }, [category]);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: "*" })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  useEffect(() => {
    let projects = [];

    pData.forEach((item) => {
      item.projects.forEach((project) => {
        projects.push(project);
      });
    });

    setAllImages(projects);
  }, []);

  return (
    <>
      <MetaTags title="Portfolio" type="other" />
      <Banner image={bgImage2} title="Portfolio" />
      <div className="portfolio-menu">
        <ul>
          {filterMenu.map((item) => (
            <li
              onClick={() => {
                if (item?.external) {
                  history.push("/portfolio/" + item.link);
                  return;
                }
                onClickMenu(item.link);
              }}
              className={filterKey === item.dataFilter ? "is-selected" : ""}
              data-filter={`.${item.dataFilter}`}
              key={item.dataFilter}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div ref={isoRef} className="grid gallery">
        <div className="grid-sizer"></div>
        {allImages?.map((image, i) => {
          return (
            <div
              key={`${image.category + i}`}
              className={`grid-item ${image.category?.toLowerCase()}`}
            >
              {image?.external ? (
                <VerticalCard
                  onLoad={() => {
                    setCount((curr) => curr + 1);
                  }}
                  type="inner"
                  item={image}
                />
              ) : (
                <VerticalCard
                  onLoad={() => {
                    setCount((curr) => curr + 1);
                  }}
                  onClick={() => {
                    if (image.type === "yt") {
                      setCurrentYt(extractYtID(image.youtube));
                      setYtOpen(true);
                      return;
                    }
                    setStartIndexModal(i);
                    // setCurrent(image);
                    console.log("Clicked");
                  }}
                  type="inner"
                  item={image}
                  height="auto"
                />
              )}
            </div>
          );
        })}
      </div>
      {startIndexModal !== null && (
        <div className="image-modal">
          <Lightbox
            images={allImages}
            startIndex={startIndexModal}
            onClose={() => setStartIndexModal(null)}
          />
        </div>
      )}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={ytOpen}
        playsinline
        videoId={currentYt}
        onClose={() => {
          setYtOpen(false);
          setCurrentYt(null);
        }}
      />
    </>
  );
};

export default withRouter(FilterPortfolio);

const extractYtID = (url) => {
  return url.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
  )[1];
};
