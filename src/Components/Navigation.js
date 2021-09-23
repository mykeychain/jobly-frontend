import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

/** Navigation: renders navigation bar
 *    props:
 *      - logout: parent function
 *      - currentUser: { username, firstName, lastName, email, isAdmin, applications }
 *
 *
 *    App -> Navigation
 */

function Navigation({ currentUser, logout }) {
  const isLoggedIn = !!currentUser.username;

  if (!isLoggedIn) {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-4" exact to="/">
            Home
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <NavLink className="nav-link" exact to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" exact to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-md">
      <NavLink className="navbar-brand" exact to="/">
        Home
      </NavLink>
      <ul className="navbar-nav">
        <li className="navbar-item me-4">
          <NavLink className="nav-link" exact to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="navbar-item me-4">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs
          </NavLink>
        </li>
          <NavLink className="nav-link" exact to="/profile">
            Profile
          </NavLink>
        <li className="navbar-item me-4">
          <Link className="nav-link" to="/" onClick={logout}>
            Logout {currentUser.username}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
