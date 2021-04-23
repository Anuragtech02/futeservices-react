import React, { Suspense, lazy, useEffect, useState } from "react";
import { Footer, Cursor, NavWrapper } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import { CircularProgress } from "@material-ui/core";

const Home = lazy(() => import("./Components/Home/Home"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const PortfolioPage = lazy(() =>
  import("./Components/PortfolioPage/PortfolioPage")
);
const QuoteEnquiry = lazy(() =>
  import("./Components/QuoteEnquiry/QuoteEnquiry")
);
const Services = lazy(() => import("./Components/Services/Services"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const NotFound = lazy(() => import("./Components/404/NotFound"));

const App = () => {
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
    <Router>
      <Suspense
        fallback={
          <div className={style.loading}>
            <CircularProgress />
          </div>
        }
      >
        <Cursor />
        <NavWrapper isScrollingUp={isScrollingUp} />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
          <Route path="/contact" exact component={Contact} />
          <Route path="/services" exact component={Services} />
          <Route path="/quote" exact component={QuoteEnquiry} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/portfolio/:name" exact component={PortfolioPage} />
          <Route component={NotFound} />
        </Switch>
        <div className={style.footer}>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
