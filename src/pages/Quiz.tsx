import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";
import QuizData from "../quiz.json";
import { FadeInAnimation } from "../animation.js";
import { type } from "os";

interface Props {
  category?: any;
}
function shuffleQuestions(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({ category }: Props) => {
  const [answer, setAnswer] = useState(null);
  const [itemNumber, setItemNumber] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [timeLeft, updateTime] = useState(20);

  if (timeLeft != 0) {
    setInterval(() => {
      updateTime(timeLeft - 1);
    }, 1000);
  }
  let timePassed = timeLeft;

  const currentItem = itemNumber;
  const onOption4Click = () => {
    currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
    setCurrentIndex(currentIndex + 1);
    setAnswer(answer);
  };

  const onOption3Click = () => {
    setCurrentIndex(currentIndex + 1);
    currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
    setAnswer(answer);
  };

  const onOption2Click = () => {
    setCurrentIndex(currentIndex + 1);
    currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
    setAnswer(answer);
  };
  const onOption1Click = () => {
    setCurrentIndex(currentIndex + 1);
    currentItem < 10 ? setItemNumber(currentItem + 1) : currentItem;
    setAnswer(answer);
  };

  const chosenCategory = category;
  const dataCategory = QuizData.filter(
    (data) => data.category == chosenCategory
  );

  return (
    <div className={styles.quiz}>
      <img className={styles.quizChild} alt='' src='/rectangle-2@2x.png' />
      <div className={styles.quizItem} />
      {dataCategory.map((inputData, index) => {
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
                <div className={styles.div}>20</div>
              </div>
              <div className={styles.quizBoxContentChild} />
              <div className={styles.div1}>{`${currentItem}/10`}</div>
            </div>
          );
        }
      })}
      <img
        className={styles.arrowsCircleArrowLeft}
        alt=''
        src='/24--arrows--circlearrowleft.svg'
      />
    </div>
  );
};

export default Quiz;
