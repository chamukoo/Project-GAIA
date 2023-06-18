import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwitchBack.module.css";
import FernCourse from "../pages/FernCourse";

const SwitchBack = () => {
  const navigate = useNavigate();
  const onBackButtonClick = useCallback(() => {}, []);
  return (
    <div className={styles.backButtonContainer}>
      <img
        className={styles.backButtonIcon}
        alt=''
        src='/back-button1.svg'
        onClick={onBackButtonClick}
      />
    </div>
  );
};

export default SwitchBack;
