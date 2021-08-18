import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ logout }) {
  //TODO: Change after context added
  const currentUser = false;

  if (!currentUser.username) {
    return (
      <div className="Navigation">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      </div>
    );
  }

  return (
    <div className="Navigation">
      <nav>
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
          Logout
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
