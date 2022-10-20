import MenuCard from "./MenuCard.component";
import { Menu1, Menu2, Menu3, Menu4 } from "./MenuIcons";

const VerticalMenu = () => {
  return (
    <div className="vertical-menu">
      <MenuCard>
        <Menu1 />
      </MenuCard>
      <MenuCard>
        <Menu2 />
      </MenuCard>
      <MenuCard>
        <Menu3 />
      </MenuCard>
      <MenuCard>
        <Menu4 />
      </MenuCard>
    </div>
  );
};

export default VerticalMenu;
