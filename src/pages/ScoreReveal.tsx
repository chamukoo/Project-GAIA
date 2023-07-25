import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ScoreReveal.module.css";

const ScoreReveal = () => {
  const navigate = useNavigate();

  const onExitQuizButtonClick = useCallback(() => {
    localStorage.setItem("points", "0");
    navigate("/learning-course");
  }, [navigate]);

  const onTakeQuizButtonClick = useCallback(() => {
    navigate("/quiz-page");
    localStorage.setItem("points", "0");
  }, [navigate]);

  return (
    <div className={styles.scoreReveal}>
      <img
        className={styles.scoreRevealChild}
        alt=''
        src='/rectangle-22@2x.png'
      />
      <div className={styles.scoreRevealItem} />
      <img
        className={styles.arrowsCircleArrowLeft}
        alt=''
        src='/24--arrows--circlearrowleft2.svg'
      />
      <div className={styles.scoreBoxContent}>
        <div className={styles.quizBox} />
        <div
          className={styles.yourScoreIs}
        >{`Your Score is ${localStorage.getItem("points")}/10!`}</div>
        <div className={styles.exitQuizButton} onClick={onExitQuizButtonClick}>
          <div className={styles.quitBox} />
          <div className={styles.quit}>Quit</div>
        </div>
        <div className={styles.takeQuizButton} onClick={onTakeQuizButtonClick}>
          <div className={styles.quitBox} />
          <div className={styles.takeAgain}>Take Again</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreReveal;
