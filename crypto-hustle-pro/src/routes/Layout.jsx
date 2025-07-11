import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="top-nav">
        <Link className="home-button" to="/">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
