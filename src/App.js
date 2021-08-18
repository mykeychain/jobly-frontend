import { useState } from "react";
import jsonwebtoken from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import UserContext from "./Context/UserContext";

/** App: has everything
 *    states: 
 *      - token: "token"
 *      - currentUser: { username, isAdmin, iat }
 * 
 *    context:
 *      - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, isAdmin, iat }
 * 
 *    App -> { Navigation, Routes }
 */

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    _handleLogin(token);
  }

  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    _handleLogin(token);
  }

  function _handleLogin(token) {
    setToken(token);
    JoblyApi.token = token;
    setCurrentUser(jsonwebtoken.decode(token));
    history.push("/");
  }

  function logout() {
    setToken("");
    JoblyApi.token = "";
    setCurrentUser({});
  }

  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, setCurrentUser}} >
        <Navigation logout={logout} />
        <Routes signUp={signUp} login={login} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
