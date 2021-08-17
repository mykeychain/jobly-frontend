import { Switch, Route } from "react-router-dom";
import Companies from "./Companies";
import CompanyFinder from "./CompanyFinder";
import Homepage from "./Homepage";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";
import Jobs from "./Jobs";

function Routes() {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/companies/:companyHandle">
          <CompanyFinder />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        {/* TODO: add redirect */}
      </Switch>
    </div>
  );
}

export default Routes;
