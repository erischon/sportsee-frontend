import React from "react";

const LogoCard = ({ color, children }) => {
  return (
    <div className="info-card__logo" style={{ backgroundColor: color }}>
      <div>{children}</div>
    </div>
  );
};

export default LogoCard;
