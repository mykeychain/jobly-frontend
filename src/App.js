import { useState, useEffect } from "react";
import jsonwebtoken from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
import "./App.css";
import Navigation from "./Components/Navigation";
import Routes from "./Components/Routes";
import UserContext from "./Context/UserContext";
import Loading from "./Components/Loading";

/** App: renders nav bar and routes
 *    states:
 *      - token: "token"
 *      - currentUser: { username, firstName, lastName, isAdmin, applications }
 *
 *    context:
 *      - UserContext Provider: {currentUser, setCurrentUser}
 *          where currentUser = { username, firstName, lastName, isAdmin, applications }
 *          where applications = [id, ...]
 *
 *    App -> { Navigation, Routes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const history = useHistory();

  // if token in local storage, logs in
  useEffect(function checkForToken() {
    async function _checkForToken() {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
      } else {
        setIsAuthenticating(false);
      }
    }

    _checkForToken();
  }, []);

  // sets token in JoblyApi, gets and sets current user
  useEffect(
    function storeTokenAndSetUser() {
      async function _storeTokenAndSetUser() {
        try {
          JoblyApi.token = token;
          const { username } = jsonwebtoken.decode(token);
          const user = await JoblyApi.getUser(username);
          setCurrentUser(user);
        } catch {
          console.error("INVALID TOKEN RECEIVED.");
          logout();
        } finally {
          setIsAuthenticating(false);
        }
      }

      if (token) _storeTokenAndSetUser();
    },
    [token]
  );

  // signUp: registers user with API and logs in
  async function signUp(newUser) {
    const token = await JoblyApi.signUp(newUser);
    setToken(token);
    localStorage.setItem("token", token);
    history.push("/");
  }

  // login: authenticates user with API and logs in
  async function login(loginCredentials) {
    const token = await JoblyApi.login(loginCredentials);
    setToken(token);
    localStorage.setItem("token", token);
    history.push("/");
  }

  // logout: clears localStorage token, JoblyApi token, and current user state
  function logout() {
    setToken("");
    JoblyApi.token = "";
    localStorage.removeItem("token");
    setCurrentUser({});
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser }}>
        <Navigation currentUser={currentUser} logout={logout} />
        {!isAuthenticating ? (
          <Routes currentUser={currentUser} signUp={signUp} login={login} />
        ) : (
          <Loading />
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
