import React, { useCallback } from "react";
import styles from "./PlantsData.module.css";
import Data from "../data.json";
import SwitchBack from "./SwitchBack";

interface Props {
  handleReset: () => void;
}

const PlantsData = ({ handleReset }: Props) => {
  return (
    <>
      {Data.map((info) => (
        <div className={styles.plantCard} id={info.id}>
          <SwitchBack handleReset={handleReset} />

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
