import { Link } from "react-router-dom";

/** Displays login/signup or welcome page.
 *
 *    props:
 *       - currentUser: { username, firstName, lastName, email,
 *         isAdmin, applications }
 */

function Homepage({ currentUser }) {
  return (
    <div className="Homepage">
      <div className="">
        <h3>Jobly</h3>
        <p>All of the jobs in one, convenient place.</p>
        {!currentUser.username ? (
          <div>
            <Link className="btn btn-success me-3" to="/login">Login</Link>
            <Link className="btn btn-danger" to="/signup">Sign up</Link>
          </div>
        ) : (
          <p>Welcome back, {currentUser.username}</p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
