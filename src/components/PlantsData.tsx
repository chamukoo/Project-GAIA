import React, { useCallback } from "react";
import styles from "./PlantsData.module.css";
import Data from "../data.json";
import SwitchBack from "./SwitchBack";

interface Props {
  handleReset: () => void;
  plantChosen?: string;
}

const PlantsData = ({ handleReset, plantChosen }: Props) => {
  const plantId = plantChosen;
  const filteredData = Data.filter((data) => data.id == plantId);
  return (
    <>
      {filteredData.map((info, index) => (
        <div className={styles.plantCard} id={info.id} key={index}>
          <SwitchBack handleReset={handleReset} />
          <div className={styles.plantName}>{info.name}</div>
          <div className={styles.mainContent}>
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
              <span className={styles.descriptionText}>{info.description}</span>
            </div>
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
