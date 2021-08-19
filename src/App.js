import { useState, useEffect } from "react";
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

  console.log(history);

  // if token in local storage, logs in
  useEffect(function checkForToken() {
    async function _checkForToken() {
      const token = localStorage.getItem("token");
      try{
        if (token) await _handleLogin(token)
      } catch(err) {
        console.error("INVALID TOKEN RECEIVED.");
        logout();
      }
    };

    _checkForToken();
  }, [])

  // signUp: registers user with API and logs in
  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    await _handleLogin(token);
    localStorage.setItem('token', token);
  }

  // login: authenticates user with API and logs in
  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    await _handleLogin(token);
    localStorage.setItem('token', token);
  }

  // _handleLogin: sets token to JoblyApi and updates current user state
  async function _handleLogin(token) {
    JoblyApi.token = token;
    const { username } = jsonwebtoken.decode(token);
    const user = await JoblyApi.getUser(username);
    setCurrentUser(user);
    history.push("/");
  }

  // logout: clears localStorage token, JoblyApi token, and current user state
  function logout() {
    JoblyApi.token = "";
    localStorage.removeItem("token");
    setCurrentUser({});
  }

  return (
    <div className="App">
      <ErrorContext.Provider value={{ errors, setErrors }}>
        <UserContext.Provider value={{ currentUser }}>
          <Navigation currentUser={currentUser} logout={logout} />
          <Routes currentUser={currentUser} signUp={signUp} login={login} />
        </UserContext.Provider>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
