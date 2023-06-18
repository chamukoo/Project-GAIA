import { useState, useCallback, memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FernCourse.module.css";
import MainLayout from "../layouts/MainLayout";
import CourseLayout from "../layouts/CourseLayout";

const FernCourse = () => {
  const [showInfo, setShowInfo] = useState(false);

  const onFern1ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern2ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern3ContainerClick = () => {
    setShowInfo(true);
  };
  const onFern4ContainerClick = () => {
    setShowInfo(true);
  };
  const onFern5ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern6ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern7ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern8ContainerClick = () => {
    setShowInfo(true);
  };

  const onFern9ContainerClick = () => {
    setShowInfo(true);
  };

  return (
    <CourseLayout clicked={showInfo}>
      <MainLayout ownClass={showInfo ? styles.fernCourse1 : styles.fernCourse}>
        <div className={styles.sideInfo} />
        <div className={styles.sideBarfern}>
          <div className={styles.trivias}>
            <div className={styles.butIfThe}>
              But, if the Slavic folklore is to be believed, ferns bloom once a
              year during the shortest night of the year. This rare sight of the
              fern flower is believed to guarantee a lifetime of happiness and
              richness for the beholder.
            </div>
            <div className={styles.fernsNeitherBear}>
              Ferns neither bear flowers, nor seeds.
            </div>
            <div className={styles.theirHardinessMakes}>
              Their hardiness makes them one of the most grown plants across the
              world. They are comfortable to grow in their native-tropical
              region
            </div>
            <div className={styles.fernsCanSurvive}>
              Ferns can survive in any kind of climate.
            </div>
            <div className={styles.funFacts}>Fun Facts</div>
          </div>
          <b className={styles.recommended}>Recommended</b>
          <div className={styles.tipsRecommended}>
            <div className={styles.tipsRecommended1}>
              <a
                className={styles.tipsForSucculent}
                href='https://www.sciencelearn.org.nz/videos/712-why-are-ferns-unique#:~:text=Ferns%20are%20unique%20in%20land,that%20we%20call%20a%20gametophyte.'
                target='_blank'
              >
                Why are ferns unique?
              </a>
              <div className={styles.tipsRecos} />
              <a
                className={styles.readMore}
                href='https://www.sciencelearn.org.nz/videos/712-why-are-ferns-unique#:~:text=Ferns%20are%20unique%20in%20land,that%20we%20call%20a%20gametophyte.'
                target='_blank'
              >
                Read More
              </a>
            </div>
          </div>
          <div className={styles.therapyRecommended}>
            <div className={styles.areFernsLuckyPlantParent}>
              <a
                className={styles.areFernsLucky}
                href='https://www.velvetcushion.com/garden/ferns-everything-you-need-know-about-plant-good-luck-and-prosperity#:~:text=According%20to%20Feng%20Shui%2C%20many,entrance%20or%20in%20the%20bedroom.'
                target='_blank'
              >
                Are ferns lucky plant?
              </a>
              <div className={styles.therapyReco} />
            </div>
            <a
              className={styles.readMore1}
              href='https://www.velvetcushion.com/garden/ferns-everything-you-need-know-about-plant-good-luck-and-prosperity#:~:text=According%20to%20Feng%20Shui%2C%20many,entrance%20or%20in%20the%20bedroom.'
              target='_blank'
            >
              Read more
            </a>
          </div>
          <img
            className={styles.questionMarkPlantImage}
            alt=''
            src='/question-mark-plant-image2@2x.png'
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.fernContents}>
            <div className={styles.header}>
              <div className={styles.fernPlants}>
                <span>FERN</span>
                <span className={styles.plants}> PLANTS</span>
              </div>
              <div className={styles.learningMaterials}>Learning Materials</div>
            </div>
            <div className={styles.contents}>
              <div className={styles.row1}>
                <div className={styles.fern1} onClick={onFern1ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-1@2x.png'
                  />
                  <div className={styles.fern11}>Lemon Button</div>
                </div>
                <div className={styles.fern1} onClick={onFern2ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-2@2x.png'
                  />
                  <div className={styles.fern21}>Crocodile Fern</div>
                </div>
                <div className={styles.fern1} onClick={onFern3ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-3@2x.png'
                  />
                  <div className={styles.fern21}>Silver Lace</div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.fern1} onClick={onFern4ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-4@2x.png'
                  />
                  <div className={styles.fern21}>Autumn Fern</div>
                </div>
                <div className={styles.fern1} onClick={onFern5ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-5@2x.png'
                  />
                  <div className={styles.fern21}>Asparagus Fern</div>
                </div>
                <div className={styles.fern1} onClick={onFern6ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-6@2x.png'
                  />
                  <div className={styles.fern21}>Maidenhair</div>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.fern1} onClick={onFern7ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-7@2x.png'
                  />
                  <div className={styles.fern71}>Floating Fern</div>
                </div>
                <div className={styles.fern1} onClick={onFern8ContainerClick}>
                  <img
                    className={styles.fern8Icon}
                    alt=''
                    src='/fern-8@2x.png'
                  />
                  <div className={styles.fern81}>Water Sprite</div>
                </div>
                <div className={styles.fern1} onClick={onFern9ContainerClick}>
                  <img
                    className={styles.fern1Icon}
                    alt=''
                    src='/fern-9@2x.png'
                  />
                  <div className={styles.fern21}>Boston Fern</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quiz}>
            <div className={styles.testYourKnowledgeContainer}>
              <span className={styles.testYour}>
                <span className={styles.test}>TEST</span>
                <span className={styles.span}>{` `}</span>
                <span>{`YOUR  `}</span>
              </span>
              <span className={styles.knowledge}>KNOWLEDGE</span>
            </div>
          </div>
          <div className={styles.quizSucculent}>
            <div className={styles.triviaQuizBasic}>
              Trivia Quiz: Basic Facts About Plants!
            </div>
            <div className={styles.questions}>10 Questions</div>
            <div className={styles.flowerquizbtn}>
              <div className={styles.takeQuiz}>Take Quiz</div>
            </div>
          </div>
        </div>
      </MainLayout>
    </CourseLayout>
  );
};

export default memo(FernCourse);
