const Header = ({ title, link }: HeaderProps) => (
  <header className="header">
    <div className="header__logo">
      <a href={link} className="header__logo-link">
        <h1>{title}</h1>
      </a>
    </div>
  </header>
);

export default Header;