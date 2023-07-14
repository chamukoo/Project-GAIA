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
    setActiveTab("/");
    navigate("/");
  }, [navigate]);
  const onPlantClassificationsTextClick = useCallback(() => {
    setActiveTab("/learning-course");
    navigate("/learning-course");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    setActiveTab("/about-us");
    navigate("/about-us");
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
          activeTab == "/learning-course"
            ? styles.plantClassificationsActive
            : styles.plantClassifications
        }
        onClick={onPlantClassificationsTextClick}
      >
        Plant Classifications<span></span>
      </div>
      <div
        className={
          activeTab == "/about-us"
            ? styles.plantClassificationsActive
            : styles.plantClassifications
        }
        onClick={onAboutTextClick}
      >
        About<span></span>
      </div>
    </div>
  );
};

export default NavBar;
