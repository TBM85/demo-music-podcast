import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Error 404</h2>
      <p className="not-found__message">Sorry, we couldn't find this page.</p>
      <Link to="/" className="not-found__link">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;