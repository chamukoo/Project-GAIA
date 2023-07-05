import React, { CSSProperties, ReactElement, ReactNode } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SwitchBack from "../components/SwitchBack";
import LogoComponent from "../components/LogoComponent";
import { Style } from "util";

interface Props {
  children: ReactNode;
  ownClass?: string;
  footer?: boolean;
  clickable?: CSSProperties;
}

const MainLayout = ({ ownClass, children, footer, clickable }: Props) => {
  return (
    <div className={ownClass} style={clickable}>
      <LogoComponent />
      <NavBar />
      {children}
      {footer ? <Footer /> : null}
    </div>
  );
};

export default MainLayout;
