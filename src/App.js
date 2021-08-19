import { useState } from "react";
import jsonwebtoken from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import UserContext from "./Context/UserContext";
import ErrorContext from "./Context/ErrorContext";

/** App: renders nav bar and routes
 *    states:
 *      - token: "token"
 *      - currentUser: { username, isAdmin, iat }
 *
 *    context:
 *      - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName, isAdmin, applications }
 *      - ErrorContext Provider: [error, ...]
 *
 *    App -> { Navigation, Routes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    await _handleLogin(token);
  }

  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    await _handleLogin(token);
  }

  async function _handleLogin(token) {
    JoblyApi.token = token;
    const { username } = jsonwebtoken.decode(token);
    const user = await JoblyApi.getUser(username);
    setCurrentUser(user);
    history.push("/");
  }

  function logout() {
    JoblyApi.token = "";
    setCurrentUser({});
  }

  return (
    <div className="App">
      <ErrorContext.Provider value={{errors, setErrors}}>
        <UserContext.Provider value={{ currentUser }}>
          <Navigation logout={logout} />
          <Routes signUp={signUp} login={login} />
        </UserContext.Provider>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
