import React, { useCallback } from "react";
import styles from "./PlantsData.module.css";
import Data from "../data.json";

interface Props {
  triggered?: false;
}

const PlantsData = ({ triggered }: Props) => {
  return (
    <>
      {Data.map((info) => (
        <div className={styles.plantCard} id={info.id}>
          <div className={styles.plantName}>{info.name}</div>
          <div className={styles.plantOrigin}>
            <b>Origin:</b>
            {/* <span className={styles.originText}>{info.origin}</span> */}
          </div>
          <div className={styles.plantSciName}>
            <b>Scientific Name: </b>
            {/* <span className={styles.scientificNameText}>
            <i>
              <u>{info["scientific-name"]}</u>
            </i>
          </span> */}
          </div>
          <div className={styles.plantDescription}>
            <b>Description: </b>
            {/* <span className={styles.descriptionText}>{info.description}</span> */}
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
