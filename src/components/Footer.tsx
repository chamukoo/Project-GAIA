import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.iconParent}>
          <img className={styles.icon} alt='' src='/icon.svg' />
          <div className={styles.gaiaplantcom}>
            <p className={styles.p}>gaia@plant.com</p>
          </div>
        </div>
        <div className={styles.frameParent}>
          <img className={styles.icon} alt='' src='/frame.svg' />
          <div className={styles.div}>
            <p className={styles.p}>+639327893355</p>
          </div>
        </div>
        <div className={styles.layer1Parent}>
          <img className={styles.icon} alt='' src='/layer-1.svg' />
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
  );
};

export default Footer;
