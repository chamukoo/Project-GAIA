import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
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
  return (
    <div className={styles.menu}>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div
        className={styles.plantClassifications}
        onClick={onPlantClassificationsTextClick}
      >
        Plant Classifications
      </div>
      <div className={styles.plantClassifications} onClick={onAboutTextClick}>
        About
      </div>
    </div>
  );
};

export default NavBar;
