import InfoCard from "./InfoCard.component";
import { getUserMainData } from "../../utils/services";
import { EnergyIcon, ProteinesIcon, GlucidesIcon, LipidesIcon } from "./Icons";

const KeyInfos = ({ userId }) => {
  const userMainData = getUserMainData(userId);
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
