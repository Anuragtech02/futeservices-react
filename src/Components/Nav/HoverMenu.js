import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";

const HoverMenu = ({ styles }) => {
  const innerData = [
    { name: "Drone Shoot", path: "/portfolio/dron-shoot" },
    { name: "Curtain Raisers", path: "/portfolio/curtain-raisers" },
    { name: "Walkthroughs (3D+Cinematic)", path: "/portfolio/walkthroughs" },
    { name: "3D Views & Renders", path: "/portfolio/3d-views" },
    { name: "Scale Model", path: "/portfolio/scale-model" },
    { name: "Interactive AR & VR", path: "/portfolio/ar-vr" },
  ];

  return (
    <li
      className={classNames(styles.navLink, styles.portfolioMenu)}
      onClick={(e) => e.preventDefault()}
    >
      Portfolio <ExpandMoreIcon />
      <div className={styles.innerMenuContainer}>
        <ul className={styles.innerMenu}>
          {innerData.map((item) => (
            <li key={item.name} className={styles.innerMenuItem}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default HoverMenu;
