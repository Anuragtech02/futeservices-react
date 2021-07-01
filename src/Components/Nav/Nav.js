import React, { useState } from "react";
import styles from "./Nav.module.css";
import { withRouter } from "react-router";
import { HeaderData } from "../../Static";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
// import logoLight from "../../Assets/logo-light.png";
import { SwipeableDrawer } from "@material-ui/core";
import classNames from "classnames";

const Nav = ({ history }) => {
  const [open, setOpen] = useState(false);

  const [portOpen, setPortOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <nav className={styles.container}>
      <ul
        className={classNames(
          styles.navLinks,
          history.location.pathname !== "/" ? styles.includeHome : ""
        )}
      >
        {HeaderData.tabs.map((link) =>
          link.left && link.path.includes("#") ? (
            <li
              key={link.path}
              onClick={() => {
                if (history.location.pathname === "/") {
                  document
                    .getElementById("portfolio")
                    .scrollIntoView({ behavior: "smooth" });
                } else {
                  history.push("/");
                  setTimeout(() => {
                    document
                      .getElementById("portfolio")
                      .scrollIntoView({ behavior: "smooth" });
                  }, 500);
                }
              }}
              className={classNames(
                styles.navLink,
                pathname.includes(link.path) ? styles.selectedLink : ""
              )}
            >
              {link.label}
            </li>
          ) : link.left && link.label !== "Home" ? (
            <li
              key={link.path}
              className={classNames(
                styles.navLink,
                pathname.includes(link.path) ? styles.selectedLink : ""
              )}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ) : null
        )}
      </ul>
      <div className={styles.brandName}>
        <img onClick={() => history.push("/")} src={logo} alt="logo-fute" />
      </div>
      <ul className={styles.navLinks}>
        {HeaderData.tabs.map((link) =>
          !link.left ? (
            <li
              key={link.path}
              className={classNames(
                styles.navLink,
                pathname === link.path ? styles.selectedLink : ""
              )}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ) : null
        )}
      </ul>
      <div
        className={classNames(styles.burgerMenu)}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </div>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        // style={{ zIndex: 200000000000 }}
      >
        <div className={styles.sidebarContainer}>
          <div
            className={classNames(styles.burgerMenu, styles.burgerActive)}
            onClick={() => setOpen(!open)}
          >
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
          </div>
          <ul className={styles.navLinksMobile}>
            <li>
              <div className={styles.brandName}>
                <img
                  onClick={() => history.push("/")}
                  src={logo}
                  alt="logo-fute"
                />
              </div>
            </li>
            {HeaderData.tabs.map((link) =>
              link.path.includes("#") ? (
                <li
                  key={link.path}
                  onClick={() => {
                    if (history.location.pathname === "/") {
                      document
                        .getElementById("portfolio")
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      history.push("/");
                      setTimeout(() => {
                        document
                          .getElementById("portfolio")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 500);
                    }
                    setOpen(false);
                  }}
                  className={classNames(
                    styles.navLink,
                    pathname === link.path ? styles.selectedLink : ""
                  )}
                >
                  {link.label}
                </li>
              ) : (
                <li
                  onClick={() => setOpen(false)}
                  key={link.path}
                  className={classNames(
                    styles.navLink,
                    pathname === link.path ? styles.selectedLink : ""
                  )}
                >
                  <Link to={link.path}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </SwipeableDrawer>
    </nav>
  );
};

export default withRouter(Nav);
