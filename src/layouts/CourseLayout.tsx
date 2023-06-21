import { ReactNode } from "react";
import PlantsData from "../components/PlantsData";

interface Props {
  children: ReactNode;
  clicked?: boolean;
  handleReset: () => void;
  plantChosen?: number;
}

const CourseLayout = ({
  clicked,
  children,
  handleReset,
  plantChosen,
}: Props) => {
  return (
    <div>
      {clicked ? <PlantsData handleReset={handleReset} /> : null}
      {children}
    </div>
  );
};

export default CourseLayout;
