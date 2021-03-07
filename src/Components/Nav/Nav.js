import React from "react";
import styles from "./Nav.module.css";
import { withRouter } from "react-router";
import { HeaderData } from "../../Static";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Nav = ({ history }) => {
  return (
    <nav className={styles.container}>
      <div className={styles.brandName}>
        <img onClick={() => history.push("/")} src={logo} alt="logo-fute" />
      </div>
      <ul className={styles.navLinks}>
        {HeaderData.tabs.map((link) => (
          <li className={styles.navLink}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
