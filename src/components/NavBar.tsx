import React, { CSSProperties, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

interface Props {
  clickable?: CSSProperties;
}

const NavBar = ({ clickable }: Props) => {
  const [activeTab, setActiveTab] = useState(window.location.pathname);

  const navigate = useNavigate();
  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onPlantClassificationsTextClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSucculentClick = useCallback(() => {
    navigate("/succulent-course");
  }, [navigate]);

  const onHerbalClick = useCallback(() => {
    navigate("/herbal-course");
  }, [navigate]);
  const onFlowerClick = useCallback(() => {
    navigate("/flower-course");
  }, [navigate]);
  const onFernClick = useCallback(() => {
    navigate("/fern-course");
  }, [navigate]);

  return (
    <div className={styles.menu} style={clickable}>
      <div
        className={activeTab == "/" ? styles.homeActive : styles.home}
        onClick={onHomeTextClick}
      >
        Home<span></span>
      </div>
      <div
        className={
          activeTab == "/learning-course" ||
          activeTab == "/succulent-course" ||
          activeTab == "/flower-course" ||
          activeTab == "/herbal-course" ||
          activeTab == "/fern-course"
            ? styles.plantClassificationsActive
            : styles.plantClassifications
        }
      >
        <span></span>
        <div onClick={onPlantClassificationsTextClick}>
          Plant Classification
        </div>
        <img alt='' src='./dropdown.svg' />
        <ul className={styles.dropDown}>
          <li onClick={onSucculentClick}>Succulent</li>
          <li onClick={onHerbalClick}>Herbal</li>
          <li onClick={onFlowerClick}>Flower</li>
          <li onClick={onFernClick}>Fern</li>
        </ul>
      </div>
      <div
        className={
          activeTab == "/about-us" ? styles.aboutUsActive : styles.aboutUs
        }
        onClick={onAboutTextClick}
      >
        Our Team<span></span>
      </div>
    </div>
  );
};

export default NavBar;
