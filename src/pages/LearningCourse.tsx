import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearningCourse.module.css";
import MainLayout from "../layouts/MainLayout";
const LearningCourse: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoComponentContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/succulent-course");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/herbal-course");
  }, [navigate]);

  const onFrameContainer8Click = useCallback(() => {
    navigate("/flower-course");
  }, [navigate]);

  const onFrameContainer10Click = useCallback(() => {
    navigate("/fern-course");
  }, [navigate]);

  return (
    <MainLayout ownClass={styles.learningCourse}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <div className={styles.iconParent}>
            <img className={styles.icon} alt='' src='/icon.svg' />
            <div className={styles.gaiaplantcom}>
              <p className={styles.p}>gaia@plant.com</p>
            </div>
          </div>
          <div className={styles.frameParent}>
            <img className={styles.icon} alt='' src='/frame4.svg' />
            <div className={styles.div}>
              <p className={styles.p}>+63 9327893355</p>
            </div>
          </div>
          <div className={styles.layer1Parent}>
            <img className={styles.icon} alt='' src='/layer-13.svg' />
            <div className={styles.sampalocManila}>
              <p className={styles.p}>Sampaloc Manila</p>
            </div>
          </div>
        </div>
        <div className={styles.socialMediIcons}>
          <img className={styles.layer1Icon1} alt='' src='/layer-11.svg' />
          <img className={styles.frameIcon1} alt='' src='/frame1.svg' />
          <img className={styles.frameIcon1} alt='' src='/layer-12.svg' />
        </div>
        <div className={styles.others}>
          <div
            className={styles.privacyTerms}
          >{`PRIVACY | TERMS AND CONDITIONS  `}</div>
          <div className={styles.copyrightIconParent}>
            <img
              className={styles.copyrightIcon}
              alt=''
              src='/copyright-icon.svg'
            />
            <div className={styles.privacyTerms}>
              2023 GAIA. All rights reserved
            </div>
          </div>
        </div>
        <img className={styles.logoIcon} alt='' src='/logo1@2x.png' />
      </div>
      <div
        className={styles.logoComponent}
        onClick={onLogoComponentContainerClick}
      >
        <img className={styles.logoIcon1} alt='' src='/logo@2x.png' />
      </div>
      <div className={styles.takeCourseFrame}>
        <div className={styles.header}>
          <b>{`PLANT `}</b>
          <span className={styles.classification}>CLASSIFICATION</span>
        </div>
        <div className={styles.takeCourseFrame1}>
          <div className={styles.succulent}>
            <img
              className={styles.succulentcourseimgIcon}
              alt=''
              src='/succulentcourseimg@2x.png'
            />
            <div className={styles.succulentPlantsParent}>
              <b className={styles.succulentPlants}>Succulent Plants</b>
              <div
                className={styles.viewPlantsParent}
                onClick={onFrameContainer4Click}
              >
                <div className={styles.viewPlants}>View Plants</div>
                <img
                  className={styles.layer1Icon3}
                  alt=''
                  src='/layer-14.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.herbal}>
            <img
              className={styles.herbcourseimgIcon}
              alt=''
              src='/herbcourseimg@2x.png'
            />
            <div className={styles.herbalPlantsParent}>
              <b className={styles.succulentPlants}>Herbal Plants</b>
              <div
                className={styles.viewPlantsGroup}
                onClick={onFrameContainer6Click}
              >
                <div className={styles.viewPlants}>View Plants</div>
                <img
                  className={styles.layer1Icon3}
                  alt=''
                  src='/layer-15.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.succulent}>
            <img
              className={styles.flowercourseimgIcon}
              alt=''
              src='/flowercourseimg@2x.png'
            />
            <div className={styles.flowerPlantsParent}>
              <b className={styles.succulentPlants}>Flower Plants</b>
              <div
                className={styles.viewPlantsParent}
                onClick={onFrameContainer8Click}
              >
                <div className={styles.viewPlants}>View Plants</div>
                <img
                  className={styles.layer1Icon3}
                  alt=''
                  src='/layer-14.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.herbal}>
            <img
              className={styles.ferncourseimgIcon}
              alt=''
              src='/ferncourseimg@2x.png'
            />
            <div className={styles.fernPlantsParent}>
              <b className={styles.succulentPlants}>Fern Plants</b>
              <div
                className={styles.viewPlantsGroup}
                onClick={onFrameContainer10Click}
              >
                <div className={styles.viewPlants}>View Plants</div>
                <img
                  className={styles.layer1Icon3}
                  alt=''
                  src='/layer-16.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningCourse;
