import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Quiz.module.css";
import QuizData from "../quiz.json";
import SwitchBack from "../components/SwitchBack";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";

interface Props {
  category?: any;
}

const Quiz = ({ category }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(`/${category}-course`);
  }, [navigate]);

  const [isClicked, setIsClicked] = useState(Boolean);
  const [isClicked1, setIsClicked1] = useState(Boolean);
  const [isClicked2, setIsClicked2] = useState(Boolean);
  const [isClicked3, setIsClicked3] = useState(Boolean);

  //Checker
  const [isCorrect, setIsCorrect] = useState("none");

  const [points, setPoints] = useState(0);

  function checker(answer_param: string, correct: string) {
    if (answer_param == correct) {
      setPoints(points + 1);
    }
  }

  // Timer
  const [timeLeft, updateTime] = useState(20);
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

  // incrementing the item number
  const [itemNumber, setItemNumber] = useState(1);
  const currentItem = itemNumber;
  if (currentItem == 11) {
    localStorage.setItem("points", points.toString());

    navigate("/score-reveal");
  }

  // choosing category
  const chosenCategory = category;
  const dataCategory = QuizData.filter(
    (data) => data.category == chosenCategory
  );

  useCallback(() => {
    if (currentIndex == currentIndex) {
      setIsCorrect("");
    }
  }, []);

  //Randoming question
  const getRandomItems = (array: any[], n: number) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, n);
  };

  const [randomItems, setRandomItems] = useState<any[]>([]);

  useEffect(() => {
    const pickedItems = getRandomItems(dataCategory, 11);
    setRandomItems(pickedItems);
  }, []);

  return (
    <div className={styles.quiz}>
      <img className={styles.quizChild} alt='' src='/rectangle-2@2x.png' />
      <div className={styles.quizItem} />

      {randomItems.map((inputData, index) => {
        const onOption4Click = () => {
          setIsClicked(true);
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            currentItem < 11 ? setItemNumber(currentItem + 1) : currentItem;
            checker(inputData.choices[3], inputData.correct);
            updateTime(20);
            setIsCorrect("");
            setIsClicked(false);
          }, 500);

          inputData.choices[3] == inputData.correct
            ? setIsCorrect("green")
            : setIsCorrect("red");
        };
        const onOption3Click = () => {
          setIsClicked1(true);
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setIsClicked1(false);
            currentItem < 11 ? setItemNumber(currentItem + 1) : currentItem;
            checker(inputData.choices[2], inputData.correct);
            updateTime(20);
            setIsCorrect("");
          }, 500);
          inputData.choices[2] == inputData.correct
            ? setIsCorrect("green")
            : setIsCorrect("red");
        };

        const onOption2Click = () => {
          setIsClicked2(true);
          setTimeout(() => {
            setIsClicked2(false);
            setCurrentIndex(currentIndex + 1);
            currentItem < 11 ? setItemNumber(currentItem + 1) : currentItem;
            checker(inputData.choices[1], inputData.correct);
            updateTime(20);
            setIsCorrect("");
          }, 500);
          inputData.choices[1] == inputData.correct
            ? setIsCorrect("green")
            : setIsCorrect("red");
        };
        const onOption1Click = () => {
          setIsClicked3(true);
          setTimeout(() => {
            setIsClicked3(false);
            setCurrentIndex(currentIndex + 1);
            currentItem < 11 ? setItemNumber(currentItem + 1) : currentItem;
            checker(inputData.choices[0], inputData.correct);
            updateTime(20);
            setIsCorrect("");
          }, 500);
          inputData.choices[0] == inputData.correct
            ? setIsCorrect("green")
            : setIsCorrect("red");
        };
        if (index == currentIndex) {
          return (
            <div className={styles.quizBoxContent}>
              <div className={styles.quizBox} />
              <div className={styles.loremIpsumDolor}>{inputData.question}</div>
              <div
                style={
                  isClicked
                    ? { backgroundColor: isCorrect }
                    : { backgroundColor: "none" }
                }
                className={styles.option4}
                onClick={onOption4Click}
              >
                {inputData.choices[3]}
              </div>
              <div
                style={
                  isClicked1
                    ? { backgroundColor: isCorrect }
                    : { backgroundColor: "none" }
                }
                className={styles.option3}
                onClick={onOption3Click}
              >
                {inputData.choices[2]}
              </div>
              <div
                style={
                  isClicked2
                    ? { backgroundColor: isCorrect }
                    : { backgroundColor: "none" }
                }
                className={styles.option2}
                onClick={onOption2Click}
              >
                {inputData.choices[1]}
              </div>
              <div
                style={
                  isClicked3
                    ? { backgroundColor: isCorrect }
                    : { backgroundColor: "none" }
                }
                className={styles.option1}
                onClick={onOption1Click}
              >
                {inputData.choices[0]}
              </div>
              <Timer displayThis={true} timeLeft={timeLeft} />
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
