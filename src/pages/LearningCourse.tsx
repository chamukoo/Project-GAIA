import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LearningCourse.module.css";
import MainLayout from "../layouts/MainLayout";
const LearningCourse = () => {
  const navigate = useNavigate();

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
    <MainLayout footer={true} ownClass={styles.learningCourse}>
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
