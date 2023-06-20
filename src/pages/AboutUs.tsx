import styles from "./AboutUs.module.css";
import MainLayout from "../layouts/MainLayout";
const AboutUs = () => {
  return (
    <MainLayout ownClass={styles.aboutUs}>
      <div className={styles.aboutUsChild} />
      <div className={styles.ourTeam}>
        <b className={styles.o}>O</b>
        <b className={styles.u}>U</b>
        <b className={styles.u}>R</b>
        <b className={styles.u}>T</b>
        <b className={styles.u}>E</b>
        <b className={styles.u}>A</b>
        <b className={styles.m}>M</b>
      </div>
      <img
        className={styles.plantElementIcon}
        alt=''
        src='/about--plant-design@2x.png'
      />

      <div className={styles.header}>
        <div className={styles.o}>
          <b>{`GET TO `}</b>
          <span className={styles.knowUs}>KNOW US</span>
          <b>{` `}</b>
        </div>
        <div className={styles.ourTeam1}>
          <div className={styles.leeAnneFrame}>
            <img className={styles.leeIcon} alt='' src='/lee@2x.png' />
            <div className={styles.info}>
              <div className={styles.leeAnneAngelesContainer}>
                <p className={styles.leeAnne}>{`LEE ANNE `}</p>
                <p className={styles.angeles}>ANGELES</p>
              </div>
              <div className={styles.helloIAm}>
                Hello, I am currently a second year Computer Engineering student
                at Polytechnic University of the Philippines, and I am an
                aspiring Front-End Developer.
              </div>
              <div className={styles.socialMediaLinks}>
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-facebook-v1.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-instagram.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-github.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-mail.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.leeAnneFrame}>
            <img className={styles.irelIcon} alt='' src='/irel@2x.png' />
            <div className={styles.info}>
              <div className={styles.leeAnneAngelesContainer}>
                <p className={styles.leeAnne}>IREL KIAN</p>
                <p className={styles.angeles}>BACOLOD</p>
              </div>
              <div className={styles.helloIAm}>
                Hello, I am currently a second year Computer Engineering student
                at Polytechnic University of the Philippines, and I am an
                aspiring Back-End Developer.
              </div>
              <div className={styles.socialMediaLinks}>
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-facebook-v11.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-instagram1.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-github1.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-mail1.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.leeAnneFrame}>
            <img className={styles.yuriIcon} alt='' src='/yuri@2x.png' />
            <div className={styles.info}>
              <div className={styles.leeAnneAngelesContainer}>
                <p className={styles.leeAnne}>{`URIEL `}</p>
                <p className={styles.angeles}>ESMERALDA</p>
              </div>
              <div className={styles.helloIAm}>
                Hello, I am currently a second year Computer Engineering student
                at Polytechnic University of the Philippines, and I am an
                aspiring Front-End Developer.
              </div>
              <div className={styles.socialMediaLinks}>
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-facebook-v12.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-instagram2.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-github2.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-mail2.svg'
                />
              </div>
            </div>
          </div>
          <div className={styles.leeAnneFrame}>
            <img className={styles.chaIcon} alt='' src='/cha@2x.png' />
            <div className={styles.info}>
              <div className={styles.leeAnneAngelesContainer}>
                <p className={styles.leeAnne}>CHARINA</p>
                <p className={styles.angeles}>VALLECERA</p>
              </div>
              <div className={styles.helloIAm}>
                Hello, I am currently a second year Computer Engineering student
                at Polytechnic University of the Philippines, and I am an
                aspiring Front-End Developer.
              </div>
              <div className={styles.socialMediaLinks}>
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-facebook-v13.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-instagram3.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-github3.svg'
                />
                <img
                  className={styles.iconInstagram}
                  alt=''
                  src='/-icon-mail3.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
