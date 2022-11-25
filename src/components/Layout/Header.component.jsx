import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

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
          <Link to="404">Accueil</Link>
          <Link to="404">Profil</Link>
          <Link to="404">Réglage</Link>
          <Link to="404">Communauté</Link>
        </div>
      </div>
    </header>
  );
};

export default header;
