import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";

/** Displays login/signup or welcome page.
 *
 *    context:
 *    - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName,
 *          isAdmin, applications }
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);

  // if not logged in, display login and sign up links,
  // otherwise, show welcome page
  return (
    <div className="Homepage">
      <h3>Jobly</h3>
      <p>All of the jobs in one, convenient place.</p>
      {!currentUser.username ? (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      ) : (
        <p>Welcome back, {currentUser.username}</p>
      )}
    </div>
  );
}

export default Homepage;
