import energieIcon from "../../assets/icons/energy.svg";
import proteinesIcon from "../../assets/icons/proteines.svg";
import glucidesIcon from "../../assets/icons/glucides.svg";
import lipidesIcon from "../../assets/icons/lipides.svg";

/** Created several Component for Key Icons */

export const EnergyIcon = () => {
  return (
    <>
      <img src={energieIcon} alt="Energie" />
    </>
  );
};

export const ProteinesIcon = () => {
  return (
    <>
      <img src={proteinesIcon} alt="Proteines" />
    </>
  );
};

export const GlucidesIcon = () => {
  return (
    <>
      <img src={glucidesIcon} alt="Glucides" />
    </>
  );
};

export const LipidesIcon = () => {
  return (
    <>
      <img src={lipidesIcon} alt="Lipides" />
    </>
  );
};
