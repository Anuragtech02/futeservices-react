import React, { useEffect, useState } from "react";
import { Home, Footer, Team, Cursor } from "./Components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import style from "./App.module.css";
import Contact from "./Components/Contact/Contact";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import NavWrapper from "./Components/Nav/NavWrapper";
import QuoteEnquiry from "./Components/QuoteEnquiry/QuoteEnquiry";
import Services from "./Components/Services/Services";

const App = () => {
  useEffect(() => {
    const mouseCursor = document.getElementById("cursor");
    const inner = document.getElementById("inner-cursor");
    const links = document.getElementsByTagName("a");
    console.log(links);
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
    return () => {
      [...links].forEach((link) => {
        link.removeEventListener("mouseover");
        link.removeEventListener("mouseleave");
      });
    };
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
    <Router basename={process.env.PUBLIC_URL}>
      <Cursor />
      <NavWrapper isScrollingUp={isScrollingUp} />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} /> */}
        <Route path="/contact" exact component={Contact} />
        <Route path="/services" exact component={Services} />
        <Route path="/team" exact component={Team} />
        <Route path="/quote" exact component={QuoteEnquiry} />
        {/* <Route path="/portfolio" exact component={Portfolio} /> */}
        <Route path="/portfolio/:name" exact component={PortfolioPage} />
      </Switch>
      <div className={style.footer}>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
