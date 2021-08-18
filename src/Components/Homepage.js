import { Link } from "react-router-dom";

function Homepage() {
  //TODO: So mike doesn't forget. Remove when context added.
  const currentUser = false;

  if (!currentUser.username) {
    return (
      <div className="Homepage">
        <h3>Jobly</h3>
        <p>All of the jobs in one, convenient place.</p>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <h1>Homepage</h1>
    </div>
  );
}

export default Homepage;
