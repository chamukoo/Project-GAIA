import React from "react";
import styles from "./Footer.module.css";

interface Props {
  ownStyle?: string;
}

const Footer = ({ ownStyle }: Props) => {
  return (
    <div
      style={ownStyle ? { top: ownStyle } : { top: "inherit" }}
      className={styles.footer}
    >
      <div className={styles.contacts}>
        <div className={styles.iconParent}>
          <img className={styles.icon} alt='' src='/icon.svg' />
          <div className={styles.gaiaplantcom}>
            <a href='mailto: gaia@plant.com'>
              <p className={styles.p}>gaia@plant.com</p>
            </a>
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
        <a href='https://www.facebook.com'>
          <img className={styles.layer1Icon1} alt='' src='/layer-11.svg' />
        </a>
        <a href='https://www.instagram.com'>
          <img className={styles.frameIcon1} alt='' src='/frame1.svg' />
        </a>
        <a href='https://www.twitter.com'>
          <img className={styles.frameIcon1} alt='' src='/layer-12.svg' />
        </a>
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
