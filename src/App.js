import React, { useEffect } from "react";
import {
  Home,
  Navbar,
  Nav,
  About,
  Footer,
  FAQ,
  Team,
  Portfolio,
  Cursor,
} from "./Components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import style from "./App.module.css";
import classNames from "classnames";
import Contact from "./Components/Contact/Contact";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  function setBackground() {
    if (
      (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop < 200) &&
      (!window.location.pathname.includes("contact") ||
        !window.location.pathname.includes("portfolio"))
    ) {
      document.getElementById("navbar").classList.remove(style.light);
      document.getElementById("navbar").classList.add(style.dark);
    } else {
      document.getElementById("navbar").classList.remove(style.dark);
      document.getElementById("navbar").classList.add(style.light);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", setBackground);
    }
    watchScroll();

    return () => {
      window.removeEventListener("scroll", setBackground);
    };
  }, []);

  useEffect(() => {
    const mouseCursor = document.getElementById("cursor");
    const inner = document.getElementById("inner-cursor");
    const links = document.getElementsByTagName("a");
    // console.log(links);
    // if (links && links.length) {
    //   [...links].forEach((link) => {
    //     link.addEventListener("mouseover", () => {
    //       mouseCursor.style.height =
    //         link.getAttribute("name") === "logo" ? "5rem" : "3.5rem";
    //       mouseCursor.style.width =
    //         link.getAttribute("name") === "logo" ? "5rem" : "3.5rem";
    //       mouseCursor.style.backgroundColor = "white";
    //       mouseCursor.style.border = "none";
    //       inner.style.opacity = "0";
    //       link.style.color = "black";
    //     });
    //     link.addEventListener("mouseleave", () => {
    //       mouseCursor.style.height = "2rem";
    //       mouseCursor.style.width = "2rem";
    //       mouseCursor.style.border = "2px solid red";
    //       mouseCursor.style.backgroundColor = "transparent";
    //       inner.style.opacity = "1";
    //       link.style.color = "white";
    //     });
    //   });
    // }
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Cursor /> */}
      <div className={classNames(style.navbar, style.dark)} id="navbar">
        <Nav />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/team" exact component={Team} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/:name" exact component={PortfolioPage} />
      </Switch>
      <div className={style.footer}>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
