import React from "react";
import VerticalMenu from "../menu/VerticalMenu.component";

/**
 * Sidebar component
 * @component
 * @returns {React.ReactElement}
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      <VerticalMenu />
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
