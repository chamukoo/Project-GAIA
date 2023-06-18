import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import PlantsData from "../components/PlantsData";
import SwitchBack from "../components/SwitchBack";

interface Props {
  children: ReactNode;
  clicked?: boolean;
}

const CourseLayout = ({ clicked, children }: Props) => {
  return (
    <div>
      {clicked ? <PlantsData /> : null}
      {children}
    </div>
  );
};

export default CourseLayout;
