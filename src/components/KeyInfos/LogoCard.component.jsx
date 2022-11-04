/**
 * Component who create Logo Card
 * @component
 * @param {Object} props
 * @param {{color: string}} props.color
 * @param {JSX.Element} props.children
 * @returns {React.ReactElement}
 */
const LogoCard = ({ color, children }) => {
  return (
    <div className="info-card__logo" style={{ backgroundColor: color }}>
      <div>{children}</div>
    </div>
  );
};

export default LogoCard;
