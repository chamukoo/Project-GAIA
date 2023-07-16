import React from "react";
import styles from "./NextButton.module.css";

interface Props {
  next?: () => void;
  back?: () => void;
  handleReset?: boolean;
}

const NextButton = ({ next, back }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backContainer} onClick={back}>
        <img alt='' src='/nextArrow.svg' />
      </div>
      <div className={styles.nextContainer} onClick={next}>
        <img alt='' src='/nextArrow.svg' />
      </div>
    </div>
  );
};

export default NextButton;
