import { useState, useEffect, useCallback } from "react";
import styles from "./Quiz.module.css";
import QuizData from "../quiz.json";
import SwitchBack from "../components/SwitchBack";

import { useNavigate } from "react-router-dom";

interface Props {
  category?: any;
}

const Quiz = ({ category }: Props) => {
  const [itemNumber, setItemNumber] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeLeft, updateTime] = useState(20);

  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate("/succulent-course");
  }, [navigate]);

  //Checker
  const [points, setPoints] = useState(0);
  function checker(answer_param: string, correct: string) {
    if (answer_param == correct) {
      setPoints(points + 1);
    }
  }
  console.log(points);

  // Timer
  useEffect(() => {
    {
      let timer = setInterval(() => {
        if (timeLeft > 0) {
          updateTime((timeLeft) => timeLeft - 1);
        } else {
          currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
          setCurrentIndex(currentIndex + 1);
          updateTime(20);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const currentItem = itemNumber;

  const chosenCategory = category;
  const dataCategory = QuizData.filter(
    (data) => data.category == chosenCategory
  );

  return (
    <div className={styles.quiz}>
      <img className={styles.quizChild} alt='' src='/rectangle-2@2x.png' />
      <div className={styles.quizItem} />
      {dataCategory.map((inputData, index) => {
        const onOption4Click = () => {
          currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
          setCurrentIndex(currentIndex + 1);
          checker(inputData.choices[3], inputData.correct);
          updateTime(20);
        };

        const onOption3Click = () => {
          setCurrentIndex(currentIndex + 1);
          currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
          checker(inputData.choices[2], inputData.correct);
          updateTime(20);
        };

        const onOption2Click = () => {
          setCurrentIndex(currentIndex + 1);
          currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
          checker(inputData.choices[1], inputData.correct);
          updateTime(20);
        };
        const onOption1Click = () => {
          setCurrentIndex(currentIndex + 1);
          currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
          checker(inputData.choices[0], inputData.correct);
          updateTime(20);
        };
        if (index == currentIndex) {
          return (
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
                <img
                  className={styles.timer11Icon}
                  alt=''
                  src='/timer1-1@2x.png'
                />
                <div className={styles.div}>{timeLeft}</div>
              </div>
              <div className={styles.quizBoxContentChild} />
              <div className={styles.div1}>{`${currentItem}/10`}</div>
            </div>
          );
        }
      })}
      <SwitchBack handleReset={goBack} />
    </div>
  );
};

export default Quiz;
