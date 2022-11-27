import { Link } from "react-router-dom";

/**
 * Display 404 Page
 * @component
 * @returns {React.ReactElement}
 */
const NotFoundPage = () => {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
};

export default NotFoundPage;
