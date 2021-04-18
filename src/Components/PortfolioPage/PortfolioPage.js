import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PortfolioPage = () => {
  const { name } = useParams();

  const [current, setCurrent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio = PortfolioData.find((item) => item.name === name);
      console.log({ portfolio });
      setCurrent(portfolio);
    }
  }, [name]);

  return (
    <div className="container">
      <section
        style={{ backgroundImage: `url(${current?.image})` }}
        className={"imageBg"}
      >
        <h1>{current.name}</h1>
      </section>
      <section className={"portfolioContainer"}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {current?.images?.map((image, i) => (
              <img
                key={i}
                src={image?.src}
                style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </div>
  );
};

export default PortfolioPage;
