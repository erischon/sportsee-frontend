import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1>HOME</h1>
      </div>
      <Link to="/dashboard/12">Ouvrir le Dashboard</Link>
    </main>
  );
};

export default HomePage;
