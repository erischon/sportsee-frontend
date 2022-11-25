import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="home">
      <div className="home__container">
        <h1>Page d'Accueil</h1>
      </div>
      <div className="home__links">
        <Link to="/dashboard/12" className="link">
          Ouvrir le Dashboard de Karl
        </Link>
        <br />
        <Link to="/dashboard/18" className="link">
          Ouvrir le Dashboard de Cécilia
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
