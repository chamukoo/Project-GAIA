import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
  ownClass?: string;
  footer?: boolean;
}

const MainLayout = ({ ownClass, children, footer }: Props) => {
  return (
    <div className={ownClass}>
      <NavBar />
      {children}
      {footer ? <Footer /> : null}
    </div>
  );
};

export default MainLayout;
