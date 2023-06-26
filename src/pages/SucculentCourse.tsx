import { FunctionComponent, useState } from "react";
import styles from "./SucculentCourse.module.css";
import MainLayout from "../layouts/MainLayout";
import CourseLayout from "../layouts/CourseLayout";
const SucculentCourse = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(String);

  const onSucculent1ContainerClick = () => {
    setSelectedPlant("plant-1");
    setShowInfo(true);
  };

  const onSucculent2ContainerClick = () => {
    setSelectedPlant("plant-2");
    setShowInfo(true);
  };

  const onSucculent3ContainerClick = () => {
    setSelectedPlant("plant-3");
    setShowInfo(true);
  };
  const onSucculent4ContainerClick = () => {
    setSelectedPlant("plant-4");
    setShowInfo(true);
  };
  const onSucculent5ContainerClick = () => {
    setSelectedPlant("plant-5");
    setShowInfo(true);
  };

  const onSucculent6ContainerClick = () => {
    setSelectedPlant("plant-6");
    setShowInfo(true);
  };

  const onSucculent7ContainerClick = () => {
    setSelectedPlant("plant-7");
    setShowInfo(true);
  };

  const onSucculent8ContainerClick = () => {
    setSelectedPlant("plant-8");
    setShowInfo(true);
  };

  const onSucculent9ContainerClick = () => {
    setSelectedPlant("plant-9");
    setShowInfo(true);
  };

  const handleReset = () => {
    setShowInfo(false);
  };

  return (
    <CourseLayout
      plantChosen={selectedPlant}
      handleReset={handleReset}
      clicked={showInfo}
    >
      <MainLayout
        ownClass={
          showInfo ? styles.succulentCourseBlur : styles.succulentCourse
        }
      >
        <div className={styles.sideInfo} />
        <div className={styles.sideBarsucculent}>
          <div className={styles.trivias}>
            <div className={styles.itsCalledPropagatingContainer}>
              It's called "
              <a
                className={styles.propagating}
                href='http://www.succulentsandsunshine.com/propagating-succulents/propagating-succulents-from-leaves-part-2/'
                target='_blank'
              >
                <span className={styles.propagating1}>propagating</span>
              </a>
              ." To do this, snip off a succulent leaf, let it dry in the sun,
              and plant it in dirt and water.
            </div>
            <div className={styles.youCanUse}>
              You can use succulent cuttings to grow new plants.
            </div>
            <div className={styles.succulentsFirstCropped}>
              Succulents first cropped up in areas with long dry seasons (such
              as Africa), since they store water in their leaves.
            </div>
            <div className={styles.succulentsOriginateFrom}>
              Succulents originate from dry, desert locations.
            </div>
            <div className={styles.funFacts}>Fun Facts</div>
          </div>
          <div className={styles.recommended}>
            <div className={styles.therapyRecommended}>
              <a
                className={styles.waterTheraphyFor}
                href='https://www.sublimesucculents.com/water-therapy-succulents/'
                target='_blank'
              >
                Water Theraphy for Succulents
              </a>
              <div className={styles.therapyReco} />
              <a
                className={styles.readMore}
                href='https://www.sublimesucculents.com/water-therapy-succulents/'
                target='_blank'
              >
                Read more
              </a>
            </div>
            <div className={styles.tipsRecommendedWrapper}>
              <div className={styles.tipsRecommended}>
                <a
                  className={styles.tipsForSucculent}
                  href='https://www.sublimesucculents.com/5-tips-succulent-planters/'
                  target='_blank'
                >
                  5 Tips for Succulent Planters
                </a>
                <div className={styles.tipsRecos} />
                <a
                  className={styles.readMore1}
                  href='https://www.sublimesucculents.com/5-tips-succulent-planters/'
                  target='_blank'
                >
                  Read More
                </a>
              </div>
            </div>
            <b className={styles.recommended1}>Recommended</b>
          </div>
          <img
            className={styles.questionMarkPlantImage}
            alt=''
            src='/question-mark-plant-image@2x.png'
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.succulentContents}>
            <div className={styles.header}>
              <div className={styles.header1}>
                <span>SUCCULENT</span>
                <span className={styles.plants}> PLANTS</span>
              </div>
              <div className={styles.learningMaterials}>Learning Materials</div>
            </div>
            <div className={styles.contents}>
              <div className={styles.row1}>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent1ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/donkeystailimg@2x.png'
                  />
                  <div className={styles.donkeysTail}>Donkey’s Tail</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent2ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/ball-cactus@2x.png'
                  />
                  <div className={styles.donkeysTail}>Ball Cactus</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent3ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/ox-tongue@2x.png'
                  />
                  <div className={styles.donkeysTail}>Ox Tongue</div>
                </div>
              </div>
              <div className={styles.row1}>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent4ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/zebra-plant@2x.png'
                  />
                  <div className={styles.donkeysTail}>Zebra Plant</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent5ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/panda-plant@2x.png'
                  />
                  <div className={styles.donkeysTail}>Panda Plant</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent6ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/jade-plant@2x.png'
                  />
                  <div className={styles.donkeysTail}>Jade Plant</div>
                </div>
              </div>
              <div className={styles.row1}>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent7ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/sunburst@2x.png'
                  />
                  <div className={styles.donkeysTail}>{`Sunburst `}</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent8ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/dolphin@2x.png'
                  />
                  <div className={styles.donkeysTail}>Dolphin</div>
                </div>
                <div
                  className={styles.donkeystailbtn}
                  onClick={onSucculent9ContainerClick}
                >
                  <img
                    className={styles.donkeystailimgIcon}
                    alt=''
                    src='/moonstone@2x.png'
                  />
                  <div className={styles.donkeysTail}>Moonstone</div>
                </div>
              </div>
            </div>
          </div>
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
                  Basic Facts About Succulent Plants!
                </div>
                <div className={styles.questions}>10 Questions</div>
                <div className={styles.succulentquizbtn}>
                  <div className={styles.takeQuiz}>Take Quiz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </CourseLayout>
  );
};

export default SucculentCourse;
