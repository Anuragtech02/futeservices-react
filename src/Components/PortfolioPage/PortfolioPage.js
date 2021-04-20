import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import notFoundImg from "../../Assets/not-found.svg";
import cat1 from "../../Assets/projects/cat1.webp";

const PortfolioPage = () => {
  const { name } = useParams();
  const [current, setCurrent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio = PortfolioData.find((item) => item.name === name) ?? {};
      console.log({ portfolio });
      setCurrent(portfolio);
    }
  }, [name]);

  return (
    <div className="container">
      <section
        style={{ backgroundImage: `url(${current?.image ?? cat1})` }}
        className={"imageBg"}
      >
        <h1>{current.name ?? name}</h1>
      </section>
      <section className={"portfolioContainer"}>
        <div className="grid gallery">
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
        {(!current || !current.images) && (
          <div className="notFoundPortfolio">
            <img src={notFoundImg} alt="not-found-fute" />
            <p>Nothing found</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PortfolioPage;
