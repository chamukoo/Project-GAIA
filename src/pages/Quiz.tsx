import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";
import QuizData from "../quiz.json";

const Quiz = () => {
  const [timeLeft, updateTime] = useState(20);
  const [answer, setAnswer] = useState(null);

  if (timeLeft != 0) {
    setInterval(() => {
      updateTime(timeLeft - 1);
    }, 1000);
  }

  const navigate = useNavigate();

  const onOption4Click = () => {
    setAnswer(answer);
  };

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
      {QuizData.map((inputData) => (
        <div className={styles.quizBoxContent}>
          <div className={styles.quizBox} />
          <div className={styles.loremIpsumDolor}>{inputData.question}</div>
          <div className={styles.option4} onClick={onOption4Click}>
            {inputData.choices[3]}
          </div>
          <div className={styles.option3} onClick={onOption3Click}>
            {inputData.choices[2]}
          </div>
          <div className={styles.option2} onClick={onOption2Click}>
            {inputData.choices[1]}
          </div>
          <div className={styles.option1} onClick={onOption1Click}>
            {inputData.choices[0]}
          </div>

          <div className={styles.timer}>
            <div className={styles.timerChild} />
            <img className={styles.timer11Icon} alt='' src='/timer1-1@2x.png' />
            <div className={styles.div}>20</div>
          </div>
          <div className={styles.quizBoxContentChild} />
          <div className={styles.div1}>1/10</div>
        </div>
      ))}

      <img
        className={styles.arrowsCircleArrowLeft}
        alt=''
        src='/24--arrows--circlearrowleft.svg'
      />
    </div>
  );
};

export default Quiz;
