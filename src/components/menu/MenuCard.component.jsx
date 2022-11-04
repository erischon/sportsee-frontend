/**
 * Component who create Menu Card
 * @component
 * @param {Object} props
 * @param {{color: string}} props.color
 * @param {JSX.Element} props.children
 * @returns {React.ReactElement}
 */
const MenuCard = ({ color, children }) => {
  return (
    <div className="menu-card">
      <div>{children}</div>
    </div>
  );
};

export default MenuCard;
