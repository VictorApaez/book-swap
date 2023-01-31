import React from "react";
import "../styles/LogoAnimation.css";

function LogoAnimation() {
  return (
    <svg className="text-line">
      <text x="50%" y="50%" textAnchor="middle">
        THE
        <tspan x="50%" dy="70">
          BOOK SWAP
        </tspan>
      </text>
    </svg>
  );
}

export default LogoAnimation;
