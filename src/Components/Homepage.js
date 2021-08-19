import { Link } from "react-router-dom";

/** Displays login/signup or welcome page.
 *
 *    props:
 *       - currentUser = { username, firstName, lastName,
 *         isAdmin, applications }
 */

function Homepage({ currentUser }) {
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
