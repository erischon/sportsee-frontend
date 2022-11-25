import { Link } from "react-router-dom";

import MenuCard from "./MenuCard.component";
import { Menu1, Menu2, Menu3, Menu4 } from "./MenuIcons";

/**
 * Vertical Menu component
 * @component
 * @returns {React.ReactElement}
 */
const VerticalMenu = () => {
  return (
    <div className="vertical-menu">
      <MenuCard>
        <Link to="/">
          <Menu1 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="/">
          <Menu2 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="/">
          <Menu3 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="/">
          <Menu4 />
        </Link>
      </MenuCard>
    </div>
  );
};

export default VerticalMenu;
