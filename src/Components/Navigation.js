import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../Context/UserContext";
import "./Navigation.css";

/** Navigation: renders navigation bar
 *    props:
 *      - logout: parent function
 *      - currentUser = { username, firstName, lastName, isAdmin, applications }
 *
 *
 *    App -> Navigation
 */

function Navigation({ currentUser, logout }) {
  const isLoggedIn = !!currentUser.username;

  if (!isLoggedIn) {
    return (
      <div className="Navigation">
        <nav className="Navigation-nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/signup">
            Sign Up
          </NavLink>
        </nav>
      </div>
    );
  }

  return (
    <div className="Navigation">
      <nav className="Navigation-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <Link to="/" onClick={logout}>
          Logout {currentUser.username}
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
