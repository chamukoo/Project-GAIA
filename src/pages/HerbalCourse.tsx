import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HerbalCourse.module.css";
const HerbalCourse: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHerbal1ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal2ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal3ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal4ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal5ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal6ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal7ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal8ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onHerbal9ContainerClick = useCallback(() => {
    navigate("/herbal-info");
  }, [navigate]);

  const onLogoComponentContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPlantClassificationsTextClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  return (
    <div className={styles.herbalCourse}>
      <div className={styles.sideInfo} />
      <div className={styles.sideBarherbal}>
        <div className={styles.trivias}>
          <div className={styles.theyreMainlySought}>
            they’re mainly sought by those looking to quit smoking since they
            contain no tobacco or menthol. People who share their experiences
            with herbal cigarettes claim that it makes them feel more relaxed
            and calmer.
          </div>
          <div className={styles.thePracticeOf}>
            The practice of smoking herbal cigarettes has come to light as an
            alternative to cigarettes;
          </div>
          <div className={styles.theFragranceOf}>
            The fragrance of lavender is believed to help promote relaxation and
            improve sleep quality. In fact, studies have shown that the scent of
            lavender can reduce stress levels and even lower heart rate.
          </div>
          <div className={styles.didYouKnow}>
            Did you know that lavender, known for its calming and soothing
            properties, has been used for centuries as a natural remedy for
            anxiety and insomnia?
          </div>
          <div className={styles.funFacts}>Fun Facts</div>
        </div>
        <div className={styles.recommendedlinks}>
          <div className={styles.therapyRecommended}>
            <a
              className={styles.thingsYouDidnt}
              href="https://fightershots.co.uk/blogs/blog/31-things-you-didn-t-know-about-spices-and-herbs"
              target="_blank"
            >
              31 Things you didn’t know about spices and herbs!
            </a>
            <div className={styles.therapyReco} />
            <a
              className={styles.readMore}
              href="https://fightershots.co.uk/blogs/blog/31-things-you-didn-t-know-about-spices-and-herbs"
              target="_blank"
            >
              Read more
            </a>
          </div>
          <div className={styles.therapyRecommended1}>
            <a
              className={styles.importanceOfHerbal}
              href="https://www.betterhealth.vic.gov.au/health/healthyliving/herbs#:~:text=Consuming%20herbs%20may%20help%20to,lemongrass%20may%20help%20lower%20cholesterol."
              target="_blank"
            >
              Importance of herbal plant
            </a>
            <div className={styles.therapyReco1} />
            <a
              className={styles.readMore1}
              href="https://www.betterhealth.vic.gov.au/health/healthyliving/herbs#:~:text=Consuming%20herbs%20may%20help%20to,lemongrass%20may%20help%20lower%20cholesterol."
              target="_blank"
            >
              Read more
            </a>
          </div>
          <b className={styles.recommended}>Recommended</b>
        </div>
        <img
          className={styles.questionMarkPlantImage}
          alt=""
          src="/question-mark-plant-image@2x.png"
        />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.herbalContents}>
          <div className={styles.header}>
            <div className={styles.herbalPlants}>
              <span>HERBAL</span>
              <span className={styles.plants}> PLANTS</span>
            </div>
            <div className={styles.learningMaterials}>Learning Materials</div>
          </div>
          <div className={styles.contents}>
            <div className={styles.row1}>
              <div className={styles.herbal1} onClick={onHerbal1ContainerClick}>
                <div className={styles.herbal1Wrapper}>
                  <img
                    className={styles.herbal1Icon}
                    alt=""
                    src="/herbal-1@2x.png"
                  />
                </div>
                <div className={styles.herbal11}>Basil</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal2ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-2@2x.png"
                />
                <div className={styles.herbal21}>Oregano</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal3ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-3@2x.png"
                />
                <div className={styles.herbal21}>Rosemary</div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.herbal1} onClick={onHerbal4ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-4@2x.png"
                />
                <div className={styles.herbal11}>Thyme</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal5ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-5@2x.png"
                />
                <div className={styles.herbal21}>Sage</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal6ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-6@2x.png"
                />
                <div className={styles.herbal11}>Arugula</div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.herbal1} onClick={onHerbal7ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-7@2x.png"
                />
                <div className={styles.herbal21}>Marjoram</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal8ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-8@2x.png"
                />
                <div className={styles.herbal21}>Tarragon</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal9ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=""
                  src="/herbal-9@2x.png"
                />
                <div className={styles.herbal21}>Spinach</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.herbalquiz}>
          <div className={styles.testYourKnowledgeContainer}>
            <span className={styles.testYour}>
              <span className={styles.test}>TEST</span>
              <span className={styles.span}>{` `}</span>
              <span>{`YOUR  `}</span>
            </span>
            <span className={styles.knowledge}>KNOWLEDGE</span>
          </div>
          <div className={styles.takeherbalquiz}>
            <div className={styles.basicFactsAbout}>
              Basic Facts About Herbal Plants!
            </div>
            <div className={styles.questions}>10 Questions</div>
            <div className={styles.herbalquizbtn}>
              <div className={styles.takeQuiz}>Take Quiz</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.logoComponent}
        onClick={onLogoComponentContainerClick}
      >
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
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
      <img
        className={styles.backButtonIcon}
        alt=""
        src="/back-button1.svg"
        onClick={onBackButtonClick}
      />
    </div>
  );
};

export default HerbalCourse;
