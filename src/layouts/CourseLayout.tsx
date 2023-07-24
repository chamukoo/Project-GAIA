import { ReactNode, useEffect, useState, useCallback } from "react";
import PlantsData from "../components/PlantsData";
import NextButton from "../components/NextButton";
import Timer from "../components/Timer";

interface Props {
  children?: ReactNode;
  clicked?: boolean;
  handleReset: () => void;
  plantChosen?: string;
}

const CourseLayout = ({
  clicked,
  children,
  handleReset,
  plantChosen,
}: Props) => {
  const [timeLeft, updateTime] = useState(2);
  const [readingPoints, setReadingPoints] = useState(0);
  localStorage.setItem("readingPoints", readingPoints.toString());

  useEffect(() => {
    {
      let timer = setInterval(() => {
        if (timeLeft > 0) {
          updateTime((timeLeft) => timeLeft - 1);
        } else {
          updateTime(2);
          setReadingPoints(readingPoints + 1);
        }
      }, 1000);
      if (clicked) {
        null;
      } else updateTime(2);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div>
      {clicked ? (
        <>
          <Timer displayThis={false} timeLeft={timeLeft} />
          <PlantsData plantChosen={plantChosen} handleReset={handleReset} />
        </>
      ) : null}

      {children}
    </div>
  );
};

export default CourseLayout;
