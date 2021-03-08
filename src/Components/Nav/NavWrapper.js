import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";
import style from "../../App.module.css";
import Nav from "../Nav/Nav";
import classNames from "classnames";

const NavWrapper = () => {
  const [navClass, setNavClass] = useState(style.dark);

  const { pathname } = useLocation();

  useEffect(() => {
    if (window.pageYOffset > 200) {
      setNavClass(style.light);
    } else {
      setNavClass(style.dark);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    function setBackground() {
      if (window.pageYOffset > 200) {
        setNavClass(style.light);
      } else {
        setNavClass(style.dark);
      }
      //   if (pathname === "/") {
      //     // setNavClass(style.dark);
      //     if (window.pageYOffset < 200) {
      //       setNavClass(style.dark);
      //     } else {
      //       setNavClass(style.light);
      //     }
      //   } else {
      //     setNavClass(style.light);
      //   }
      // if (
      //   document.body.scrollTop > 200 ||
      //   document.documentElement.scrollTop < 200 ||
      //   window.location.pathname.includes("contact") ||
      //   window.location.pathname.includes("portfolio")
      // ) {
      //   // document.getElementById("navbar").classList.remove(style.light);
      //   // document.getElementById("navbar").classList.add(style.dark);
      //   setNavClass(style.dark);
      // } else {
      //   // document.getElementById("navbar").classList.remove(style.dark);
      //   // document.getElementById("navbar").classList.add(style.light);
      //   setNavClass(style.light);
      // }
    }

    window.addEventListener("scroll", setBackground);
    setBackground();

    return () => {
      window.removeEventListener("scroll", setBackground);
    };
  }, [pathname]);

  return (
    <div className={classNames(style.navbar, navClass)} id="navbar">
      <Nav />
    </div>
  );
};

export default withRouter(NavWrapper);
