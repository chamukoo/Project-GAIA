import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz1.module.css";
const Quiz1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onOption4Click = useCallback(() => {
    navigate("/score-reveal");
  }, [navigate]);

  const onOption3Click = useCallback(() => {
    navigate("/score-reveal");
  }, [navigate]);

  const onOption2Click = useCallback(() => {
    navigate("/score-reveal");
  }, [navigate]);

  const onOption1Click = useCallback(() => {
    navigate("/score-reveal");
  }, [navigate]);

  return (
    <div className={styles.quiz}>
      <img className={styles.quizChild} alt="" src="/rectangle-21@2x.png" />
      <div className={styles.quizItem} />
      <div className={styles.quizBoxContent}>
        <div className={styles.quizBox} />
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className={styles.option4} onClick={onOption4Click} />
        <div className={styles.option3} onClick={onOption3Click} />
        <div className={styles.option2} onClick={onOption2Click} />
        <div className={styles.option1} onClick={onOption1Click} />
        <div className={styles.timer}>
          <div className={styles.timerChild} />
          <img className={styles.timer11Icon} alt="" src="/timer1-1@2x.png" />
          <div className={styles.div}>20</div>
        </div>
        <div className={styles.quizBoxContentChild} />
        <div className={styles.div1}>10/10</div>
      </div>
      <img
        className={styles.arrowsCircleArrowLeft}
        alt=""
        src="/24--arrows--circlearrowleft1.svg"
      />
    </div>
  );
};

export default Quiz1;
