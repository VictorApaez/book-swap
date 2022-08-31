import React from "react";
import "../styles/Header.css";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <div className="header">
      <DesktopHeader></DesktopHeader>
      <MobileHeader></MobileHeader>
    </div>
  );
}
