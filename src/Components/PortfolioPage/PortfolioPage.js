import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import Isotope from "isotope-layout";

const PortfolioPage = () => {
  const { name } = useParams();

  const [current, setCurrent] = useState({});
  const isoRef = useRef(null);

  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio = PortfolioData.find((item) => item.name === name);
      console.log({ portfolio });
      setCurrent(portfolio);
    }
  }, [name]);

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
  }, []);

  return (
    <div className="container">
      <section
        style={{ backgroundImage: `url(${current?.image})` }}
        className={"imageBg"}
      >
        <h1>{current.name}</h1>
      </section>
      <section className={"portfolioContainer"}>
        <div className="portfolio-title">
          <h3>Portfolio Title</h3>
        </div>
        {/* <div className="grid-sizer"></div> */}
        {current?.images?.map((image, i) => (
          <div className={`grid-item`}>
            <img src={image.src} alt="isotope-item" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default PortfolioPage;
