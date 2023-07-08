import React, { useCallback } from "react";
import styles from "./TakeQuiz.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  category?: String;
}

const TakeQuiz = ({ category }: Props) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/quiz-page");
  }, [navigate]);

  return (
    <div className={styles.succulentquiz}>
      <div className={styles.testYourKnowledgeContainer}>
        <span className={styles.testYour}>
          <span className={styles.test}>TEST</span>
          <span className={styles.span}>{` `}</span>
          <span>{`YOUR  `}</span>
        </span>
        <span className={styles.knowledge}>KNOWLEDGE</span>
      </div>
      <div className={styles.takesucculentquiz}>
        <div className={styles.quiz}>
          <div className={styles.basicFactsAbout}>
            Basic Facts About {`${category}`} Plants!
          </div>
          <div className={styles.questions}>10 Questions</div>
          <div onClick={handleClick} className={styles.succulentquizbtn}>
            <div className={styles.takeQuiz}>Take Quiz</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
