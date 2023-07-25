import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";
import MainLayout from "../layouts/MainLayout";
const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutComponentContainerClick = useCallback(() => {
    navigate("/all-about");
  }, [navigate]);

  const onContinueComponentContainerClick = useCallback(() => {
    navigate("/learning-course");
  }, [navigate]);

  return (
    <MainLayout footer={true} ownClass={styles.homepage}>
      <div className={styles.greenBg} />
      <div className={styles.homeBox} />
      <img
        className={styles.homePlantDesign}
        alt=''
        src='/home--plant-design@2x.png'
      />

      <div className={styles.displayInfo}>
        <div className={styles.info}>
          <div className={styles.bringNatureIntoContainer}>
            <p className={styles.p}>
              <span>
                <b className={styles.bring}>
                  <span className={styles.bring1}>BRING</span>
                  <span className={styles.span}>{` `}</span>
                </b>
                <span className={styles.nature}>NATURE</span>
                <b>
                  <span>{` `}</span>
                </b>
              </span>
            </p>
            <p className={styles.intoYourHome}>
              <span>
                <b>
                  <span>{`INTO YOUR `}</span>
                </b>
                <span className={styles.home1}>HOME</span>
              </span>
            </p>
          </div>
          <div className={styles.loremIpsumDolor}>
            Planting is a lot of more fun when done with consideration and care.
            Various plant species that you can grow and show in your home.
            Putting out a more varied approach to understanding nature and its
            purpose.
          </div>
        </div>
        <div className={styles.component}>
          <div
            className={styles.aboutComponent}
            onClick={onAboutComponentContainerClick}
          >
            <div className={styles.continue}>ABOUT</div>
            <img className={styles.frameIcon2} alt='' src='/frame2.svg' />
          </div>
          <div
            className={styles.continueComponent}
            onClick={onContinueComponentContainerClick}
          >
            <div className={styles.continue}>CONTINUE</div>
            <img className={styles.frameIcon3} alt='' src='/frame3.svg' />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
