import React from "react";
import styles from "./PlantsData.module.css";
import Data from "../data.json";
const PlantsData = () => {
  return (
    <>
      {Data.map((info) => (
        <div className={styles.plantCard} id={info.id}>
          <div className={styles.plantName}>{info.name}</div>
          <div className={styles.plantOrigin}>
            <b>Origin:</b>
            <span className={styles.originText}>{info.origin}</span>
          </div>
          <div className={styles.plantSciName}>
            <b>Scientific Name: </b>
            <span className={styles.scientificNameText}>
              <i>
                <u>{info["scientific-name"]}</u>
              </i>
            </span>
          </div>
          <div className={styles.plantDescription}>
            <b>Description: </b>
          </div>
          <div className={styles.plantImageContainer}>
            <img className={styles.plantImage} src={info.img} />
          </div>
        </div>
      ))}
    </>
  );
};

export default PlantsData;
