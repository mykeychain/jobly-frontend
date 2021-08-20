import { Switch, Route, Redirect } from "react-router-dom";
import Companies from "./Companies";
import CompanyFinder from "./CompanyFinder";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import Jobs from "./Jobs";

/** Directs user to correct endpoint
 *    props:
 *      - currentUser: { username, firstName, lastName, email, isAdmin, applications }
 *      - signUp: parent function
 *      - login: parent function
 *      - updateUser: parent function
 *
 *   App -> Routes -> { Homepage, Login, Signup, Companies, CompanyFinder, Jobs, Profile }
 */

function Routes({ currentUser, signUp, login, updateUser }) {
  const isLoggedIn = !!currentUser.username;

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage currentUser={currentUser} />
        </Route>
        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <Login login={login} />}
        </Route>
        <Route exact path="/signup">
          {isLoggedIn ? <Redirect to="/" /> : <Signup signUp={signUp} />}
        </Route>
        <Route exact path="/companies">
          {isLoggedIn ? <Companies /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/companies/:handle">
          {isLoggedIn ? <CompanyFinder /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/jobs">
          {isLoggedIn ? <Jobs /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/profile">
          {isLoggedIn ? (
            <Profile currentUser={currentUser} updateUser={updateUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
