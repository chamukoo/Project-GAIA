import React, { useState, useEffect, useRef } from "react";
import styles from "./PlantsData.module.css";
import Data from "../data.json";
import SwitchBack from "./SwitchBack";
import NextButton from "./NextButton";

interface Props {
  handleReset: () => void;
  plantChosen?: string;
}

const PlantsData = ({ handleReset, plantChosen }: Props) => {
  const [plantId, setPlantId] = useState(plantChosen);
  const [currentIndex, setIndex] = useState(Number);
  const filteredData = Data.filter((data) => data.id == plantId);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const textHeight = divRef.current.scrollHeight;
      divRef.current.style.height = `${textHeight}px`;
    }
  }, []);

  const next = () => {
    console.log(divRef.current);
    setIndex(currentIndex + 1);
    setPlantId(Data[currentIndex].id);
  };

  const back = () => {
    setIndex(currentIndex - 1);
    setPlantId(Data[currentIndex].id);
  };

  return (
    <div className={styles.container}>
      {filteredData.map((info, index) => (
        <div ref={divRef} className={styles.plantCard} id={info.id} key={index}>
          <SwitchBack handleReset={handleReset} />
          <div className={styles.plantName}>{info.name}</div>
          <div className={styles.mainContent}>
            <div className={styles.plantImageContainer}>
              <img className={styles.plantImage} src={info.img} />
            </div>
            <div className={styles.plantSciName}>
              <b>Scientific Name: </b>
              <span className={styles.scientificNameText}>
                <i>
                  <u>{info["scientific-name"]}</u>
                </i>
              </span>
            </div>
            <div className={styles.plantOrigin}>
              <b>Background and Origin:</b>
              <span className={styles.originText}>
                <ul>
                  <li>{info.origin[0]}</li>
                  <li>{info.origin[1]}</li>
                  <li>{info.origin[2]}</li>
                </ul>
              </span>
            </div>
            <div className={styles.facts}>
              <b>Facts:</b>
              <span className={styles.factsText}>
                <ul>
                  <li>{info.facts[0]}</li>
                  <li>{info.facts[1]}</li>
                  <li>{info.facts[2]}</li>
                </ul>
              </span>
            </div>
            <div className={styles.uses}>
              <b>{`Uses of ${info.name}:`}</b>
              <span className={styles.usesText}>
                <ul>
                  <li>{info.uses[0]}</li>
                  <li>{info.uses[1]}</li>
                  <li>{info.uses[2]}</li>
                </ul>
              </span>
            </div>
            <div className={styles.benefits}>
              <b>{`Benefits of ${info.name}:`}</b>
              <span className={styles.benefitsText}>
                <ul>
                  <li>{info.benefits[0]}</li>
                  <li>{info.benefits[1]}</li>
                  <li>{info.benefits[2]}</li>
                </ul>
              </span>
            </div>
            <div className={styles.caring}>
              <b>{`How to Take Care of ${info.name}`}:</b>
              <span className={styles.caringText}>
                <ul>
                  <li>{info.caring[0]}</li>
                  <li>{info.caring[1]}</li>
                  <li>{info.caring[2]}</li>
                </ul>
              </span>
            </div>
            <div className={styles.recom}>
              <b>Recommendations for Gardeners/Plant Lovers:</b>
              <span className={styles.recomText}>
                <ul>
                  <li>{info.recom[0]}</li>
                  <li>{info.recom[1]}</li>
                  <li>{info.recom[2]}</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantsData;
