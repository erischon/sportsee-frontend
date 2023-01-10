import PropTypes from "prop-types";

import InfoCard from "./InfoCard.component";
import { EnergyIcon, ProteinesIcon, GlucidesIcon, LipidesIcon } from "./Icons";

/**
 * Component who generate Key Infos
 * @component
 * @param {Object} props
 * @param {{lipidCount: number, proteinCount: number, calorieCount: number, carbohydrateCount: number}} props.userMainData
 * @returns {React.ReactElement}
 */
const KeyInfos = ({ userMainData }) => {
  const { lipidCount, proteinCount, calorieCount, carbohydrateCount } =
    userMainData;

  const caloriesCardInfos = {
    color: "#FBEAEA",
    value: calorieCount,
    symbol: "KCal",
    type: "Calories",
  };

  const proteinesCardInfos = {
    color: "#E9F4FB",
    value: proteinCount,
    symbol: "g",
    type: "Proteines",
  };

  const glucidesCardInfos = {
    color: "#FAF6E5",
    value: carbohydrateCount,
    symbol: "g",
    type: "Glucides",
  };

  const lipidesCardInfos = {
    color: "#FBE6EF",
    value: lipidCount,
    symbol: "g",
    type: "Lipides",
  };

  return (
    <div className="key-infos">
      <InfoCard infos={caloriesCardInfos}>
        <EnergyIcon />
      </InfoCard>
      <InfoCard infos={proteinesCardInfos}>
        <ProteinesIcon />
      </InfoCard>
      <InfoCard infos={glucidesCardInfos}>
        <GlucidesIcon />
      </InfoCard>
      <InfoCard infos={lipidesCardInfos}>
        <LipidesIcon />
      </InfoCard>
    </div>
  );
};

export default KeyInfos;

KeyInfos.propTypes = {
  userMainData: PropTypes.PropTypes.shape({
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number,
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
  }),
  children: PropTypes.element,
};
