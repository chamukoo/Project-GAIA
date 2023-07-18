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
          activeTab == "/learning-course" || activeTab == "/succulent-course"
            ? styles.plantClassificationsActive
            : styles.plantClassifications
        }
        onClick={onPlantClassificationsTextClick}
      >
        <span></span>
        Plant Classifications
        <img alt='' src='./dropdown.svg' />
        <ul className={styles.dropDown}>
          <li>
            <a href='/succulent-course'>Succulent</a>
          </li>
          <li>
            <a href='/herbal-course'>Herbal</a>
          </li>
          <li>
            <a href='/flower-course'>Flower</a>
          </li>
          <li>
            <a href='/fern-course'>Fern</a>
          </li>
        </ul>
      </div>
      <div
        className={
          activeTab == "/about-us" ? styles.aboutUsActive : styles.aboutUs
        }
        onClick={onAboutTextClick}
      >
        About<span></span>
      </div>
    </div>
  );
};

export default NavBar;
