import React from "react";
import styles from "./Timer.module.css";

interface Props {
  displayThis?: boolean;
  timeLeft: number;
}

const Timer = ({ displayThis, timeLeft }: Props) => {
  return (
    <div>
      <div
        className={styles.timer}
        style={displayThis ? { display: "inherit" } : { display: "none" }}
      >
        <div className={styles.timerChild} />
        <img className={styles.timer11Icon} alt='' src='/timer1-1@2x.png' />
        <div className={styles.div}>{timeLeft.toString()}</div>
      </div>
    </div>
  );
};

export default Timer;
