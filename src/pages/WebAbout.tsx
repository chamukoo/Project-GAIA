import React from "react";
import styles from "./WebAbout.module.css";
import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer";

const WebAbout = () => {
  return (
    <MainLayout ownClass={styles.mainContainer}>  
      <div className={styles.aboutGaia}>
        <img src='/home--plant-design@2x.png' />
        <div className={styles.aboutTextsContainer}>
          ABOUT <span>GAIA</span>
          <p>
            It is a very simple plant website with its functions and how to
            properly grow home-based plants. It provides thorough information
            and gives out a little extra excitement along with the quiz tool for
            identifying the categorical information of plants and more. This
            website was created to attract people to take care of and grow more
            plants at home, even with beginner knowledge, and guide them by just
            reading the plant information on this website.
          </p>
        </div>
      </div>
      <div className={styles.featuresContainer}>
        <h1>Features</h1>
        <div className={styles.featuresIcon}>
          <div className={styles.feature1}>
            <img src='/feature1Icon.png' />
            <p>Provide new knowledge about how to grow plants.</p>
          </div>
          <div className={styles.feature2}>
            <img src='/feature2Icon.png' />
            <p>Reconnect with nature by giving out positivity.</p>
          </div>
          <div className={styles.feature3}>
            <img src='/feature3Icon.png' />
            <p>Test your knowledge to become responsible.</p>
          </div>
        </div>
      </div>
      <Footer ownStyle={"1470px"} />
    </MainLayout>
  );
};

export default WebAbout;
