import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="brand">
          <img src={logo} alt="SpotSee" />
        </div>
        <div className="links">
          <Link to="dashboard">Accueil</Link>
          <Link to="dashboard">Profil</Link>
          <Link to="dashboard">Réglage</Link>
          <Link to="dashboard">Communauté</Link>
        </div>
      </div>
    </header>
  );
};

export default header;
