import { ReactNode } from "react";
import PlantsData from "../components/PlantsData";

interface Props {
  children: ReactNode;
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
