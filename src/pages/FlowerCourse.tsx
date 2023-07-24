import { FunctionComponent, useState } from "react";
import styles from "./FlowerCourse.module.css";
import CourseLayout from "../layouts/CourseLayout";
import MainLayout from "../layouts/MainLayout";
import TakeQuiz from "../components/TakeQuiz";
const FlowerCourse: FunctionComponent = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(String);

  const onFlower1ContainerClick = () => {
    setSelectedPlant("plant-19");
    setShowInfo(true);
  };

  const onFlower2ContainerClick = () => {
    setSelectedPlant("plant-20");
    setShowInfo(true);
  };

  const onFlower3ContainerClick = () => {
    setSelectedPlant("plant-21");
    setShowInfo(true);
  };
  const onFlower4ContainerClick = () => {
    setSelectedPlant("plant-22");
    setShowInfo(true);
  };
  const onFlower5ContainerClick = () => {
    setSelectedPlant("plant-23");
    setShowInfo(true);
  };

  const onFlower6ContainerClick = () => {
    setSelectedPlant("plant-24");
    setShowInfo(true);
  };

  const onFlower7ContainerClick = () => {
    setSelectedPlant("plant-25");
    setShowInfo(true);
  };

  const onFlower8ContainerClick = () => {
    setSelectedPlant("plant-26");
    setShowInfo(true);
  };

  const onFlower9ContainerClick = () => {
    setSelectedPlant("plant-27");
    setShowInfo(true);
  };

  const handleReset = () => {
    setShowInfo(false);
  };
  // Search
  const [query, setQuery] = useState("");
  const search = () => {
    let filter = query.toUpperCase();
    let item = document.getElementsByClassName(
      styles.flower2
    ) as HTMLCollectionOf<HTMLElement>;
    let nameLen = document.getElementsByClassName(
      styles.flower21
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < nameLen.length; i++) {
      let a = item[i].getElementsByClassName(styles.flower21)[0] as HTMLElement;
      let value = a.innerHTML || a.textContent;

      if (value != undefined)
        if (value?.toUpperCase().indexOf(filter) > -1) {
          item[i].style.cssText = "position: absolue; left: 0";
        } else {
          item[i].style.display = "none";
        }
    }
  };

  return (
    <CourseLayout
      plantChosen={selectedPlant}
      handleReset={handleReset}
      clicked={showInfo}
    >
      <MainLayout
        ownClass={showInfo ? styles.flowerCourse1 : styles.flowerCourse}
        clickable={
          showInfo ? { pointerEvents: "none" } : { pointerEvents: "inherit" }
        }
      >
        <div className={styles.flowerCourseChild} />
        <div className={styles.mainContent}>
          <div className={styles.flowerContents}>
            {/* Search bar */}
            <div className={styles.searchBar}>
              <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={search}
                placeholder='Search Plant'
              ></input>
              <img src='./search-icon.svg' alt='' />
            </div>
            <div className={styles.header}>
              <div className={styles.floweringPlantsWrapper}>
                <div className={styles.floweringPlants}>
                  <span>FLOWERING</span>
                  <span className={styles.plants}> PLANTS</span>
                </div>
              </div>
              <div className={styles.learningMaterialsWrapper}>
                <div className={styles.learningMaterials}>
                  Listed Individuals
                </div>
              </div>
            </div>
            <div className={styles.contents}>
              {/* Row 1 */}
              <div className={styles.flower2} onClick={onFlower1ContainerClick}>
                <div className={styles.flower21}>Gumamela</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-1@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower2ContainerClick}>
                <div className={styles.flower21}>Daisy</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-2@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower3ContainerClick}>
                <div className={styles.flower21}>Rose</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-3@2x.png'
                />
              </div>

              {/* Row 2 */}
              <div className={styles.flower2} onClick={onFlower4ContainerClick}>
                <div className={styles.flower21}>Sunflower</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-4@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower5ContainerClick}>
                <div className={styles.flower21}>Plumeria</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-5@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower6ContainerClick}>
                <div className={styles.flower21}>Marigold</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-6@2x.png'
                />
              </div>
              {/* ROw 3 */}
              <div className={styles.flower2} onClick={onFlower7ContainerClick}>
                <div className={styles.flower21}>Cosmos</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-7@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower8ContainerClick}>
                <div className={styles.flower21}>Lotus</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-8@2x.png'
                />
              </div>
              <div className={styles.flower2} onClick={onFlower9ContainerClick}>
                <div className={styles.flower21}>Hollyhocks</div>
                <img
                  className={styles.flower2Icon}
                  alt=''
                  src='/flower-9@2x.png'
                />
              </div>
            </div>
          </div>
          <TakeQuiz category={"Flower"} />
        </div>
        <div className={styles.sideBarflowering}>
          <div className={styles.sideBarflower}>
            <div className={styles.trivias}>
              <div className={styles.thisFlowerBlooms}>
                This flower blooms in rivers and damp wetlands, but may lie
                dormant for years during times of drought, only to rise again
                with the return of water. Egyptians viewed it as a symbol of
                resurrection and eternal life.
              </div>
              <div className={styles.theLotusWas}>
                The lotus was considered a sacred flower by ancient Egyptians
                and was used in burial rituals.
              </div>
              <div className={styles.theFlowerCalled}>
                The flower called "Titan arums" can produce flowers that are 10
                feet high and 3 feet wide.
              </div>
              <div className={styles.theLargestFlower}>
                The largest flower in the world is the titan arums.
              </div>
              <div className={styles.funFacts}>Fun Facts</div>
            </div>
            <div className={styles.recom}>
              <div className={styles.recommended}>
                <div className={styles.therapyRecommended}>
                  <a
                    className={styles.caringForYour}
                    href='https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers'
                    target='_blank'
                  >
                    Caring For Your Flowers
                  </a>
                  <div className={styles.therapyReco} />
                  <a
                    className={styles.readMore}
                    href='https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers'
                    target='_blank'
                  >
                    Read more
                  </a>
                </div>
                <b className={styles.recommended1}>Recommended</b>
              </div>
              <div className={styles.recommended11}>
                <div className={styles.therapyRecommended1}>
                  <a
                    className={styles.reasonsWhyFlowers}
                    href='https://community.thriveglobal.com/6-reasons-why-flowers-are-loved-by-millions/'
                    target='_blank'
                  >
                    6 Reasons Why Flowers Are Loved by Millions
                  </a>
                  <div className={styles.therapyReco} />
                  <a
                    className={styles.readMore1}
                    href='https://community.thriveglobal.com/6-reasons-why-flowers-are-loved-by-millions/'
                    target='_blank'
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <img
              className={styles.questionMarkPlantImage}
              alt=''
              src='/question-mark-plant-image1@2x.png'
            />
          </div>
        </div>
      </MainLayout>
    </CourseLayout>
  );
};

export default FlowerCourse;
