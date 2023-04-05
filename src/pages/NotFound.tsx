import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">Error 404</h2>
        <p className="not-found__message">Sorry, we couldn't find this page.</p>
        <Link to="/" className="not-found__link card">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;