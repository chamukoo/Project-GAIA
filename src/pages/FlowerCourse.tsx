import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FlowerCourse.module.css";
const FlowerCourse: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFlower1ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower2ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower3ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower4ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower5ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower6ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower7ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower8ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onFlower9ContainerClick = useCallback(() => {
    navigate("/flower-info");
  }, [navigate]);

  const onLogoComponentContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBackButtonClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  const onPlantClassificationsTextClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.flowerCourse}>
      <div className={styles.flowerCourseChild} />
      <div className={styles.mainContent}>
        <div className={styles.flowerContents}>
          <div className={styles.header}>
            <div className={styles.floweringPlantsWrapper}>
              <div className={styles.floweringPlants}>
                <span>FLOWERING</span>
                <span className={styles.plants}> PLANTS</span>
              </div>
            </div>
            <div className={styles.learningMaterialsWrapper}>
              <div className={styles.learningMaterials}>Learning Materials</div>
            </div>
          </div>
          <div className={styles.contents}>
            <div className={styles.row1}>
              <div className={styles.flower1}>
                <div
                  className={styles.flower11}
                  onClick={onFlower1ContainerClick}
                >
                  <div className={styles.flower12}>Gumamela</div>
                  <img
                    className={styles.flower1Icon}
                    alt=""
                    src="/flower-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.flower2} onClick={onFlower2ContainerClick}>
                <div className={styles.flower21}>Daisy</div>
                <img
                  className={styles.flower2Icon}
                  alt=""
                  src="/flower-2@2x.png"
                />
              </div>
              <div className={styles.flower2} onClick={onFlower3ContainerClick}>
                <div className={styles.flower21}>Rose</div>
                <img
                  className={styles.flower2Icon}
                  alt=""
                  src="/flower-3@2x.png"
                />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.flower2} onClick={onFlower4ContainerClick}>
                <div className={styles.flower41}>Sunflower</div>
                <img
                  className={styles.flower4Icon}
                  alt=""
                  src="/flower-4@2x.png"
                />
              </div>
              <div className={styles.flower2} onClick={onFlower5ContainerClick}>
                <div className={styles.flower41}>Plumeria</div>
                <img
                  className={styles.flower4Icon}
                  alt=""
                  src="/flower-5@2x.png"
                />
              </div>
              <div className={styles.flower2} onClick={onFlower6ContainerClick}>
                <div className={styles.flower41}>Marigold</div>
                <img
                  className={styles.flower4Icon}
                  alt=""
                  src="/flower-6@2x.png"
                />
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.flower2} onClick={onFlower7ContainerClick}>
                <div className={styles.flower71}>Cosmos</div>
                <img
                  className={styles.flower7Icon}
                  alt=""
                  src="/flower-7@2x.png"
                />
              </div>
              <div className={styles.flower2} onClick={onFlower8ContainerClick}>
                <div className={styles.flower71}>Lotus</div>
                <img
                  className={styles.flower8Icon}
                  alt=""
                  src="/flower-8@2x.png"
                />
              </div>
              <div className={styles.flower2} onClick={onFlower9ContainerClick}>
                <div className={styles.flower71}>Hollyhocks</div>
                <img
                  className={styles.flower9Icon}
                  alt=""
                  src="/flower-9@2x.png"
                />
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
      </div>
      <div className={styles.sideBarflowering}>
        <div className={styles.sideBarflower}>
          <div className={styles.trivias}>
            <div className={styles.thisFlowerBlooms}>
              This flower blooms in rivers and damp wetlands, but may lie
              dormant for years during times of drought, only to rise again with
              the return of water. Egyptians viewed it as a symbol of
              resurrection and eternal life.
            </div>
            <div className={styles.theLotusWas}>
              The lotus was considered a sacred flower by ancient Egyptians and
              was used in burial rituals.
            </div>
            <div className={styles.theFlowerCalled}>
              The flower called "Titan arums" can produce flowers that are 10
              feet high and 3 feet wide.
            </div>
            <div className={styles.theLargestFlower}>
              The largest flower in the world is the titan arums.
            </div>
            <div className={styles.funFacts}>Fun Facts</div>
          </div>
          <div className={styles.recom}>
            <div className={styles.recommended}>
              <div className={styles.therapyRecommended}>
                <a
                  className={styles.caringForYour}
                  href="https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers"
                  target="_blank"
                >
                  Caring For Your Flowers
                </a>
                <div className={styles.therapyReco} />
                <a
                  className={styles.readMore}
                  href="https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
              <b className={styles.recommended1}>Recommended</b>
            </div>
            <div className={styles.recommended11}>
              <div className={styles.therapyRecommended1}>
                <a
                  className={styles.reasonsWhyFlowers}
                  href="https://community.thriveglobal.com/6-reasons-why-flowers-are-loved-by-millions/"
                  target="_blank"
                >
                  6 Reasons Why Flowers Are Loved by Millions
                </a>
                <div className={styles.therapyReco} />
                <a
                  className={styles.readMore1}
                  href="https://community.thriveglobal.com/6-reasons-why-flowers-are-loved-by-millions/"
                  target="_blank"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <img
            className={styles.questionMarkPlantImage}
            alt=""
            src="/question-mark-plant-image1@2x.png"
          />
        </div>
      </div>
      <div
        className={styles.logoComponent}
        onClick={onLogoComponentContainerClick}
      >
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button2.svg"
        onClick={onBackButtonClick}
      />
      <div className={styles.menu}>
        <div className={styles.home}>Home</div>
        <div
          className={styles.plantClassifications}
          onClick={onPlantClassificationsTextClick}
        >
          Plant Classifications
        </div>
        <div className={styles.plantClassifications} onClick={onAboutTextClick}>
          About
        </div>
      </div>
    </div>
  );
};

export default FlowerCourse;
