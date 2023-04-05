import Header from "../components/Header";

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header title="Podcaster" link="/" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
