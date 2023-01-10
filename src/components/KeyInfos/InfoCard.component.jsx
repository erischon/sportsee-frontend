import PropTypes from "prop-types";

import LogoCard from "./LogoCard.component";

/**
 * Component who display InfoCard
 * @component
 * @param {Object} props
 * @param {{color: string, symbol: string, type: string, value: number}} props.infos
 * @param {JSX.Element} props.children
 * @returns {React.ReactElement}
 */
const InfoCard = ({ infos, children }) => {
  const { color, value, symbol, type } = infos;
  // Converting the value to en-US locale-specific numeric representation
  const valueConversion = Number(value).toLocaleString("en-US");

  return (
    <article className="info-card">
      <LogoCard color={color}>{children}</LogoCard>

      <div>
        <h2 className="info-card__value">{`${valueConversion}${symbol}`}</h2>
        <h3 className="info-card__type">{type}</h3>
      </div>
    </article>
  );
};

export default InfoCard;

InfoCard.propTypes = {
  infos: PropTypes.PropTypes.shape({
    color: PropTypes.string,
    symbol: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
  }),
  children: PropTypes.element,
};
