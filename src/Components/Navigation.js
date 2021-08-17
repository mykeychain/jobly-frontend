import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
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
      </nav>
    </div>
  );
}

export default Navigation;
