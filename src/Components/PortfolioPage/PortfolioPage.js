import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import notFoundImg from "../../Assets/not-found.svg";
import cat1 from "../../Assets/projects/cat1.webp";
import { Helmet } from "react-helmet";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import homeVideo from "../../Assets/video/fute-video-bg.webm";
import Banner from "../Banner/Banner";
import MetaTags from "../MetaTags/MetaTags";

const PortfolioPage = () => {
  const { name } = useParams();
  const [current, setCurrent] = useState({});

  const [capName, setCapName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio =
        PortfolioData.find(
          (item) => item.name.toLowerCase() === name.toLowerCase()
        ) ?? {};
      console.log({ portfolio });
      setCurrent(portfolio);
      setCapName(capitalize(portfolio.name ?? name));
    }
  }, [name]);

  const capitalize = (str = "portfolio") => {
    return str
      .toString()
      .split(" ")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1, item.length))
      .join(" ");
  };

  return (
    <div className="container">
      <MetaTags title={capName} type="other" image={current?.image ?? cat1} />
      <Banner image={current?.image ?? cat1} title={current.name ?? name} />
      <section className="react-youtube">
        <Player>
          <source src={homeVideo} />
          <BigPlayButton position="center" />
        </Player>
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
