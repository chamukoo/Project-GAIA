import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import PlantsData from "../components/PlantsData";
import SwitchBack from "../components/SwitchBack";

interface Props {
  children: ReactNode;
  clicked?: boolean;
  handleReset: () => void;
}

const CourseLayout = ({ clicked, children, handleReset }: Props) => {
  return (
    <div>
      {clicked ? <PlantsData handleReset={handleReset} /> : null}
      {children}
    </div>
  );
};

export default CourseLayout;
