import React, { CSSProperties, PointerEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { parse } from "querystring";

interface Props {
  clickable?: CSSProperties;
}

const NavBar = ({ clickable }: Props) => {
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
    <div className={styles.menu} style={clickable}>
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
