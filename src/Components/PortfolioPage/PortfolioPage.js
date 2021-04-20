import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Isotope from "isotope-layout";

const PortfolioPage = () => {
  const { name } = useParams();

  const [isotope, setIsotope] = useState(null);

  const [current, setCurrent] = useState({});

  const isoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio = PortfolioData.find((item) => item.name === name);
      console.log({ portfolio });
      setCurrent(portfolio);
    }
  }, [name]);

  useEffect(() => {
    if (current?.images) {
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
    }
  }, [isotope, current]);

  return (
    <div className="container">
      <section
        style={{ backgroundImage: `url(${current?.image})` }}
        className={"imageBg"}
      >
        <h1>{current.name}</h1>
      </section>
      <section className={"portfolioContainer"}>
        <div ref={isoRef} className="grid gallery">
          <div className="grid-sizer"></div>
          {current?.images?.map((image, i) => {
            return (
              <div key={i} className={`grid-item`}>
                <img src={image.src} alt={image.title} />
                {/* <div className="title">
                <h4>{image.title}</h4>
              </div> */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
