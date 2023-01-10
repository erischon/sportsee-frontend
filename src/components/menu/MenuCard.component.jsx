import PropTypes from "prop-types";

/**
 * Component who create Menu Card
 * @component
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @returns {React.ReactElement}
 */
const MenuCard = ({ children }) => {
  return (
    <div className="menu-card">
      <div>{children}</div>
    </div>
  );
};

export default MenuCard;

MenuCard.propTypes = {
  children: PropTypes.element,
};
