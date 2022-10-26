import { Link } from "react-router-dom";
import MenuCard from "./MenuCard.component";
import { Menu1, Menu2, Menu3, Menu4 } from "./MenuIcons";

const VerticalMenu = () => {
  return (
    <div className="vertical-menu">
      <MenuCard>
        <Link to="404">
          <Menu1 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="404">
          <Menu2 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="404">
          <Menu3 />
        </Link>
      </MenuCard>
      <MenuCard>
        <Link to="404">
          <Menu4 />
        </Link>
      </MenuCard>
    </div>
  );
};

export default VerticalMenu;
