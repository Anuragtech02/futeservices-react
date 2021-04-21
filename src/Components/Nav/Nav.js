import React, { useState } from "react";
import styles from "./Nav.module.css";
import { withRouter } from "react-router";
import { HeaderData } from "../../Static";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import classNames from "classnames";
import HoverMenu, { innerData } from "./HoverMenu";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const Nav = ({ history }) => {
  const [open, setOpen] = useState(false);

  const [portOpen, setPortOpen] = useState(false);

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
              className={styles.navLink}
            >
              {link.label}
            </li>
          ) : link.left &&
            link.label === "Home" &&
            window.location.pathname === "/" ? null : link.left ? (
            <li key={link.path} className={styles.navLink}>
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
          link.label === "Portfolio" ? (
            <HoverMenu key={link.path} styles={styles} />
          ) : !link.left ? (
            <li key={link.path} className={styles.navLink}>
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
                  className={styles.navLink}
                >
                  {link.label}
                </li>
              ) : link.label === "Portfolio" ? (
                <li key={link.path} className="nav-link-mobile pages-mobile">
                  <List component="nav" aria-labelledby="nested-list-subheader">
                    <ListItem
                      button
                      onClick={() => setPortOpen(!portOpen)}
                      disableGutters
                    >
                      <ListItemText primary="Portfolio" />
                      {portOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={portOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {innerData?.map((item) => (
                          <ListItem key={item.name} button>
                            <Link
                              className={styles.noDecoration}
                              to={item.path}
                            >
                              <ListItemText primary={item.name} />
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </List>
                </li>
              ) : (
                <li key={link.path} className={styles.navLink}>
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
