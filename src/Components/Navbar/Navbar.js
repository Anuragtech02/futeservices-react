import React from "react";
import style from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import classNames from "classnames";
import { motion } from "framer-motion";
import { HeaderData } from "../../Static";

export const Navbar = () => {
  const { pathname } = useLocation();
  const backgroundVariants = {
    open: { display: "none", y: "-50%" },
    closed: { display: "block", y: "0%" },
  };
  const textVariants = {
    open: { opacity: 0, x: "50%" },
    closed: { opacity: 1, x: "10%" },
  };

  const linkVariants = {
    open: { x: "10%" },
    closed: { x: "20%" },
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  return (
    <header className={style.container}>
      <div className={style.brandName}>
        <a name="logo" href="/">
          <img src={logo} alt="Fute Services" />
        </a>
      </div>
      <nav className={style.nav}>
        <ul className={style.noDecoration}>
          {HeaderData.tabs.map(({ label, id, path, subheader }) => {
            return (
              <li
                className={classNames(style.navItems, style.dropdown)}
                id={id}
                key={"header-" + label}
                onMouseEnter={() => setIsOpen(false)}
                onMouseLeave={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link
                  to={path}
                  className={classNames(style.navLink, style.noDecoration)}
                >
                  {label}
                </Link>
                {/* {subheader && (
                  <motion.ul
                    className={style.dropdownContent}
                    animate={isOpen ? "open" : "closed"}
                    variants={backgroundVariants}
                    transition={{ duration: 0.2 }}
                    id="dropdown-content"
                  >
                    {subheader.map(({ label, path }) => {
                      return (
                        <motion.li
                          className={classNames(
                            style.dropdownItems,
                            style.noDecoration,
                            pathname.includes(path) ? style.subheaderActive : ""
                          )}
                          key={"subheader-" + label}
                          onMouseEnter={() => setIsHover(!isHover)}
                          onMouseLeave={() => setIsHover(!isHover)}
                          animate={isOpen ? "open" : "closed"}
                          variants={textVariants}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          <Link
                            to={path}
                            key={"subheader-" + label}
                            animate={isOpen ? "open" : "closed"}
                            variants={linkVariants}
                            className={classNames(
                              style.dropdownLink,
                              style.noDecoration,
                              pathname.includes(path)
                                ? style.subheaderActive
                                : ""
                            )}
                          >
                            {label}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                )} */}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
