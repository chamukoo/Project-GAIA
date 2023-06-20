import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogoComponent.module.css";
const LogoComponent = () => {
  const navigate = useNavigate();
  const onLogoComponentContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='logoImage']");
    navigate("/");
  }, [navigate]);
  return (
    <div
      className={styles.logoComponent}
      onClick={onLogoComponentContainerClick}
    >
      <img
        className={styles.logoIcon1}
        alt=''
        src='/logo@2x.png'
        data-scroll-to='logoImage'
      />
    </div>
  );
};

export default LogoComponent;
