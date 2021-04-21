import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";

export const innerData = [
  { name: "3D architectural animation walkthrough", path: "/portfolio/arch" },
  { name: "Interior Visualization", path: "/portfolio/interior-visuailsation" },
  { name: "Exterior visualization", path: "/portfolio/exterior-visualisation" },
  { name: "Immersive VR", path: "/portfolio/immersive-vr" },
  { name: "Augmented Reality", path: "/portfolio/ar" },
  { name: "Product Visualization", path: "/portfolio/product" },
  { name: "Layer View", path: "/portfolio/layer-view" },
  {
    name: "Interactive Presentation",
    path: "/portfolio/interactive-presentation",
  },
  { name: "Physical Model", path: "/portfolio/physical-model" },
  { name: "Drone Shoot", path: "/portfolio/drone-shoot" },
  { name: "Croma Shoot", path: "/portfolio/croma-shoot" },
];
const HoverMenu = ({ styles }) => {
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
