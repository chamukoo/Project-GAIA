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
                "When you plant something, you invest in a beautiful future amidst a stressful, chaotic and, at times, downright appalling world." <br></br>- Monty Don
              </div>
              <div className={styles.socialMediaLinks}>
                <a href='https://www.facebook.com/leeangeles111220'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-facebook-v1.svg'
                  />
                </a>
                <a href='https://www.instagram.com/liyaaaaaan_/'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-instagram.svg'
                  />
                </a>
                <a href='https://github.com/chamukoo'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-github.svg'
                  />
                </a>
                <a href='mailto: leeangeles2@gmail.com'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-mail.svg'
                  />
                </a>
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
                "Before the reward there must be labor. You plant before you harvest. You sow in tears before you reap joy." <br></br>- Ralph Ransom
              </div>
              <div className={styles.socialMediaLinks}>
                <a href='https://www.facebook.com/commoners.hexagon'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-facebook-v11.svg'
                  />
                </a>
                <a href='https://www.instagram.com/cyyynical_'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-instagram1.svg'
                  />
                </a>
                <a href='https://github.com/irel04'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-github1.svg'
                  />
                </a>
                <a href='mailto:kianirel56@gmail.com'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-mail1.svg'
                  />
                </a>
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
                "Always do your best. What you plant now, you will harvest later." <br></br>- Og Mandino
              </div>
              <div className={styles.socialMediaLinks}>
                <a href='https://m.facebook.com/theiskie'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-facebook-v12.svg'
                  />
                </a>
                <a href='https://instagram.com/theiskie'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-instagram2.svg'
                  />
                </a>
                <a href='https://github.com/EsmeraldaUriel'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-github2.svg'
                  />
                </a>
                <a href=''>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-mail2.svg'
                  />
                </a>
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
                "Plant your own garden and decorate your own soul instead of waiting for someone to bring you flowers." <br></br>- The Minds Journal
              </div>
              <div className={styles.socialMediaLinks}>
                <a href='https://www.facebook.com/Charina.Carpio.Vallecera'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-facebook-v13.svg'
                  />
                </a>
                <a href='https://instagram.com/chachi_vallecera'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-instagram3.svg'
                  />
                </a>
                <a href='https://github.com/akira1881'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-github3.svg'
                  />
                </a>
                <a href='mailto: charinavallecera08@gmail.com'>
                  <img
                    className={styles.iconInstagram}
                    alt=''
                    src='/-icon-mail3.svg'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
