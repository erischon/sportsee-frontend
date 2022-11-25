import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

/**
 * Header component
 * @component
 * @returns {React.ReactElement}
 */
const header = () => {
  const mode = process.env.REACT_APP_MODE;

  return (
    <header>
      <div className="wrapper">
        <div className="brand">
          <img src={logo} alt="SpotSee" />
          <p>({mode})</p>
        </div>
        <div className="links">
          <Link to="/">Accueil</Link>
          <Link to="/">Profil</Link>
          <Link to="/">Réglage</Link>
          <Link to="/">Communauté</Link>
        </div>
      </div>
    </header>
  );
};

export default header;
