import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PortfolioPage.css";
import { PortfolioData } from "../../Static/PortfolioData";
import notFoundImg from "../../Assets/not-found.svg";
import cat1 from "../../Assets/projects/cat1.webp";
import { Helmet } from "react-helmet";

const PortfolioPage = () => {
  const { name } = useParams();
  const [current, setCurrent] = useState({});

  const [capName, setCapName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (name && name.length) {
      const portfolio = PortfolioData.find((item) => item.name === name) ?? {};
      // console.log({ portfolio });
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
      <Helmet>
        <title>{capName} | Portfolio FuteServices</title>
        <meta
          name="description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta name="name" content={capName + " | FuteServices"} />
        <meta property="og:title" content={capName + "| FuteServices"} />
        <meta
          property="og:description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta property="og:url" content={"https://tech.feedbox.co.in/"} />
        <meta
          property="og:image"
          content={"https://tech.feedbox.co.in/" + current?.image ?? cat1}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={"https://tech.feedbox.co.in/"} />
        <meta property="twitter:title" content={capName + " | FuteServices"} />
        <meta
          property="twitter:description"
          content="Ever since our inception, Fute Services has been proactive in delivering a
            mesmerizingly cinematic experience to our audiences, creating breathtaking
            architectural imagery perfected to the minutest of details. This philosophy helps us not
            just enhance the viewing experience but engross audiences while they actually feel
            physically present at the location themselves."
        />
        <meta
          property="twitter:image"
          content={"https://tech.feedbox.co.in/" + current?.image ?? cat1}
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
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
