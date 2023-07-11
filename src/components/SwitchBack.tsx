import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwitchBack.module.css";

interface Props {
  handleReset?: () => void;
}

const SwitchBack = ({ handleReset }: Props) => {
  return (
    <div className={styles.backButtonContainer}>
      <img
        className={styles.backButtonIcon}
        alt=''
        src='/back-button1.svg'
        onClick={handleReset}
      />
    </div>
  );
};

export default SwitchBack;
