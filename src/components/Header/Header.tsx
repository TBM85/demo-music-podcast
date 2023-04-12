import { Link } from "react-router-dom";

const Header = ({ title, link }: HeaderProps) => (
  <header className="header">
    <div className="header__logo">
      <Link to={{ pathname: link}} className="header__logo-link">
        <h1>{title}</h1>
      </Link>
    </div>
  </header>
);

export default Header;