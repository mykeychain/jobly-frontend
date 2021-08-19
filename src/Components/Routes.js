import { Switch, Route, Redirect } from "react-router-dom";
import Companies from "./Companies";
import CompanyFinder from "./CompanyFinder";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import Jobs from "./Jobs";

function Routes({currentUser, signUp, login}) {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login login={login}/>
        </Route>
        <Route exact path="/signup">
          <Signup signUp={signUp}/>
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyFinder />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
