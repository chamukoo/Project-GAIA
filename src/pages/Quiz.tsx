import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";
const Quiz = () => {
  const [timeLeft, updateTime] = useState(20);

  if (timeLeft != 0) {
    setInterval(() => {
      updateTime(timeLeft - 1);
    }, 1000);
  }

  const navigate = useNavigate();

  const onOption4Click = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const onOption3Click = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const onOption2Click = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  const onOption1Click = useCallback(() => {
    navigate("/quiz");
  }, [navigate]);

  let timePassed = timeLeft;

  return (
    <div className={styles.quiz}>
      <img className={styles.quizChild} alt='' src='/rectangle-2@2x.png' />
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
        <div className={styles.option4} onClick={onOption4Click}></div>
        <div className={styles.option3} onClick={onOption3Click}></div>
        <div className={styles.option2} onClick={onOption2Click}></div>
        <div className={styles.option1} onClick={onOption1Click}></div>
        <div className={styles.timer}>
          <div className={styles.timerChild} />
          <img className={styles.timer11Icon} alt='' src='/timer1-1@2x.png' />
          <div className={styles.div}>{timePassed}</div>
        </div>
        <div className={styles.quizBoxContentChild} />
        <div className={styles.div1}>1/10</div>
      </div>
      <img
        className={styles.arrowsCircleArrowLeft}
        alt=''
        src='/24--arrows--circlearrowleft.svg'
      />
    </div>
  );
};

export default Quiz;
