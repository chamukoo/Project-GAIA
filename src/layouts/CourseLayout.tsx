import { ReactNode } from "react";
import PlantsData from "../components/PlantsData";
import NextButton from "../components/NextButton";

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
  return (
    <div>
      {clicked ? (
        <PlantsData plantChosen={plantChosen} handleReset={handleReset} />
      ) : null}

      {children}
    </div>
  );
};

export default CourseLayout;
