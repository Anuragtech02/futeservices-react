import React, {
  Suspense,
  lazy,
  useEffect,
  useState,
  createContext,
} from "react";
import { Footer, Cursor, NavWrapper } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Loading from "./Components/Loading/Loading";

const Home = lazy(() => import("./Components/Home/Home"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const PortfolioPage = lazy(() =>
  import("./Components/PortfolioPage/PortfolioPage")
);
const PortfolioInside = lazy(() =>
  import("./Components/PortfolioInside/PortfolioInside")
);
const FilterPortfolio = lazy(() =>
  import("./Components/FilterPortfolio/FilterPortfolio")
);
const QuoteEnquiry = lazy(() =>
  import("./Components/QuoteEnquiry/QuoteEnquiry")
);
const Services = lazy(() => import("./Components/Services/Services"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const About = lazy(() => import("./Components/About/About"));
const NotFound = lazy(() => import("./Components/404/NotFound"));

const NewsRoom = lazy(() => import("./Components/NewsRoom/NewsRoom"));

export const WebpContextProvider = createContext({});

const App = () => {
  const [isWebpSupported, setIsWebpSupported] = useState(null);
  const [isWebmSupported, setIsWebmSupported] = useState(null);

  useEffect(() => {
    function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };
      webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
      setIsWebpSupported(Boolean(support));
    });

    var testEl = document.createElement("video"),
      webm;
    if (testEl.canPlayType) {
      // Check for Webm support
      webm = "" !== testEl.canPlayType('video/webm; codecs="vp8, vorbis"');
    }
    setIsWebmSupported(Boolean(webm));
  }, []);

  useEffect(() => {
    const mouseCursor = document.getElementById("cursor");
    const inner = document.getElementById("inner-cursor");
    const links = document.getElementsByTagName("a");

    // console.log(links);
    if (links && links.length) {
      [...links].forEach((link) => {
        link.addEventListener("mouseover", () => {
          mouseCursor.style.height =
            link.getAttribute("name") === "logo" ? "5rem" : "3.5rem";
          mouseCursor.style.width =
            link.getAttribute("name") === "logo" ? "5rem" : "3.5rem";
          mouseCursor.style.backgroundColor = "white";
          mouseCursor.style.border = "none";
          inner.style.opacity = "0";
          mouseCursor.classList.add(style.blendDifference);
          // link.style.color = "black";
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.style.height = "2rem";
          mouseCursor.style.width = "2rem";
          mouseCursor.style.border = "2px solid red";
          mouseCursor.style.backgroundColor = "transparent";
          inner.style.opacity = "1";
          mouseCursor.classList.remove(style.blendDifference);
          // link.style.color = "white";
        });
      });
    }
  }, []);

  const [isScrollingUp, setIsSCrollingUp] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      const isScrollingDown = lastY < yPos && yPos > 400;
      setTimeout(() => {
        setIsSCrollingUp(!isScrollingDown);
      }, 300);
      setLastY(yPos);
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);
  }, [lastY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <WebpContextProvider.Provider value={{ isWebpSupported, isWebmSupported }}>
      <Router basename="/demo-new">
        <Suspense fallback={<Loading loading={true} />}>
          <Cursor />
          <NavWrapper isScrollingUp={isScrollingUp} />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/about" exact component={About} /> */}
            <Route path="/contact" exact component={Contact} />
            <Route path="/what-we-do" exact component={PortfolioInside} />
            <Route path="/about" exact component={About} />
            <Route path="/quote" exact component={QuoteEnquiry} />
            <Route path="/portfolio" exact component={FilterPortfolio} />
            <Route path="/portfolio/:category" exact component={Portfolio} />
            <Route
              path="/portfolio/category/:category"
              exact
              component={FilterPortfolio}
            />
            {/* <Route
              path="/portfolio/:category/:name"
              exact
              component={PortfolioPage}
            /> */}
            <Route path="/news-room" component={NewsRoom} />
            <Route component={NotFound} />
          </Switch>
          <div className={style.footer}>
            <Footer />
          </div>
        </Suspense>
      </Router>
    </WebpContextProvider.Provider>
  );
};

export default App;
