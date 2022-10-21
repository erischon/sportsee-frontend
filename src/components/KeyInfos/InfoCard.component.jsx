import React from "react";

import LogoCard from "./LogoCard.component";
// import { EnergyIcon } from "./Icons";

const InfoCard = ({ infos, children }) => {
  const { color, value, symbol, type } = infos;
  // Converting the value to en-US locale-specific numeric representation
  const valueConversion = Number(value).toLocaleString("en-US");

  return (
    <article className="info-card">
      {<LogoCard color={color}>{children}</LogoCard>}

      <div>
        <h2 className="info-card__value">{`${valueConversion}${symbol}`}</h2>
        <h3 className="info-card__type">{type}</h3>
      </div>
    </article>
  );
};

export default InfoCard;